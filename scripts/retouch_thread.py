#!/usr/bin/env python3
"""Retouch: give the hero needle-thread a subtle natural sag.

Method (photo-faithful, no synthetic stroke):
  1. Fit the straight thread centerline by chroma (coral is the only
     saturated hue in the frame).
  2. Find the eye crossing (solid metal near the line) -> protected zone,
     zero displacement there so metal/thread overlap is never touched.
  3. Inpaint the background beneath a feathered band around the thread
     (row-wise linear interpolation across the smooth gradient).
  4. Vertically warp the ORIGINAL thread band down by a smooth Hann-window
     sag per span (zero shift + zero slope at borders and at the eye), then
     composite over the inpainted background. Preserves the real twist
     texture and soft cross-section exactly.

Tuning: SAG_LONG / SAG_SHORT below (px of max sag at 1536px width; the
image displays at ~235px, so display sag = value * 0.153).
"""
import numpy as np
from PIL import Image

WT = "/Users/idyeah.studio/Documents/Business/idyeah.studio/Brand Identity/Website/website/.claude/worktrees/agent-a6aff0d4edacf40d3"

SAG_LONG = 20.0   # max sag (px) for the long span: bottom edge -> eye
SAG_SHORT = 2.5   # max sag (px) for the short span: eye -> right edge

CFG = {
    "needle-light": dict(bw=19.0, feather=5.0, metal_lum=(55, 235)),
    "needle-dark":  dict(bw=22.0, feather=5.0, metal_lum=(55, 999)),
}


def process(name, cfg, sag_long=SAG_LONG, sag_short=SAG_SHORT, out_suffix=""):
    src = f"{WT}/assets/idyeah/{name}.webp"
    img = Image.open(src).convert("RGB")
    a = np.asarray(img).astype(np.float64)
    H, W = a.shape[:2]
    R, G, B = a[..., 0], a[..., 1], a[..., 2]
    chroma = R - np.maximum(G, B)
    tmask = chroma > 40

    # --- centerline fit ---
    ys, xs = np.nonzero(tmask)
    x0t, x1t = xs.min(), xs.max()
    cols_x, cols_y, cols_n = [], [], []
    for x in range(x0t, x1t + 1):
        yy = np.nonzero(tmask[:, x])[0]
        if len(yy):
            w = chroma[yy, x]
            cols_x.append(x); cols_y.append((yy * w).sum() / w.sum()); cols_n.append(len(yy))
    cols_x = np.array(cols_x); cols_y = np.array(cols_y); cols_n = np.array(cols_n, float)
    good = cols_n >= np.median(cols_n) * 0.6
    m, b = np.polyfit(cols_x[good], cols_y[good], 1)

    # --- protected zone: solid metal within 45px of line ---
    mx = a.max(axis=2); mn = a.min(axis=2); lum = a.mean(axis=2)
    lo, hi = cfg["metal_lum"]
    metal = ((mx - mn) < 30) & (lum > lo) & (lum < hi)
    prot = []
    for x in range(x0t, x1t + 1):
        yline = m * x + b
        y_lo = max(0, int(yline - 45)); y_hi = min(H, int(yline + 46))
        if metal[y_lo:y_hi, x].sum() >= 5:
            prot.append(x)
    pz0, pz1 = min(prot) - 25, max(prot) + 25
    print(f"{name}: line y={m:.5f}x+{b:.2f}; thread x {x0t}-{x1t}; protected {pz0}-{pz1}")

    # --- displacement per column (downward positive) ---
    d = np.zeros(W)
    xa0, xa1 = float(x0t), float(pz0)          # long span (lower left)
    xb0, xb1 = float(pz1), float(x1t)          # short span (upper right)
    xs_all = np.arange(W, dtype=float)
    ta = (xs_all - xa0) / (xa1 - xa0)
    in_a = (ta > 0) & (ta < 1)
    d[in_a] = sag_long * np.sin(np.pi * ta[in_a]) ** 2
    if xb1 > xb0 + 4:
        tb = (xs_all - xb0) / (xb1 - xb0)
        in_b = (tb > 0) & (tb < 1)
        d[in_b] = sag_short * np.sin(np.pi * tb[in_b]) ** 2

    bw, f = cfg["bw"], cfg["feather"]
    out = a.copy()

    # --- per-column: inpaint bg under band, then composite warped band ---
    # Precompute row-wise inpainting on a bg copy, restricted to processed cols.
    proc_cols = [x for x in range(x0t, x1t + 1) if not (pz0 <= x <= pz1)]
    # replace mask: band around ORIGINAL line, plus room below for sag
    rep = np.zeros((H, W), bool)
    for x in proc_cols:
        yc = m * x + b
        y_lo = max(0, int(np.floor(yc - bw - 1)))
        y_hi = min(H, int(np.ceil(yc + bw + d[x] + 2)))
        rep[y_lo:y_hi, x] = True

    bg = a.copy()
    guard = 3
    # pixels unfit as interpolation sources: replaced band, any thread tint, metal
    badsrc = rep | (chroma > 12) | metal
    for y in range(H):
        row = rep[y]
        if not row.any():
            continue
        idx = np.nonzero(row)[0]
        # contiguous runs
        splits = np.nonzero(np.diff(idx) > 1)[0]
        starts = np.concatenate(([0], splits + 1))
        ends = np.concatenate((splits, [len(idx) - 1]))
        for s, e in zip(starts, ends):
            xl, xr = idx[s], idx[e]
            xl_s, xr_s = xl - guard, xr + guard
            for _ in range(40):                     # walk past unfit sources
                if xl_s < 0 or not badsrc[y, xl_s]:
                    break
                xl_s -= 1
            for _ in range(40):
                if xr_s >= W or not badsrc[y, xr_s]:
                    break
                xr_s += 1
            has_l = xl_s >= 0 and not badsrc[y, xl_s]
            has_r = xr_s < W and not badsrc[y, xr_s]
            if has_l and has_r:
                cl, cr = a[y, xl_s], a[y, xr_s]
                t = (np.arange(xl, xr + 1) - xl_s) / (xr_s - xl_s)
                bg[y, xl:xr + 1] = cl[None, :] * (1 - t[:, None]) + cr[None, :] * t[:, None]
            elif has_l:
                bg[y, xl:xr + 1] = a[y, xl_s]
            elif has_r:
                bg[y, xl:xr + 1] = a[y, xr_s]

    # feathered band alpha profile
    def band_alpha(dy):
        ad = np.abs(dy)
        aa = np.clip((bw - ad) / f, 0.0, 1.0)
        return aa * aa * (3 - 2 * aa)  # smoothstep

    for x in proc_cols:
        yc = m * x + b
        dx = d[x]
        y_lo = max(0, int(np.floor(yc - bw - 1)))          # cover old band top too
        y_hi = min(H, int(np.ceil(yc + bw + dx + 2)))
        yy = np.arange(y_lo, y_hi)
        src_y = yy - dx                     # sample original at shifted pos
        alpha = band_alpha(src_y - yc)
        # bilinear sample original column
        sy0 = np.clip(np.floor(src_y).astype(int), 0, H - 1)
        sy1 = np.clip(sy0 + 1, 0, H - 1)
        wgt = (src_y - np.floor(src_y))[:, None]
        col = a[sy0, x] * (1 - wgt) + a[sy1, x] * wgt
        out[y_lo:y_hi, x] = bg[y_lo:y_hi, x] * (1 - alpha[:, None]) + col * alpha[:, None]

    res = Image.fromarray(np.clip(np.round(out), 0, 255).astype(np.uint8))
    dst = f"{WT}/assets/idyeah/{name}{out_suffix}.webp"
    res.save(dst, lossless=True, quality=100, method=6)
    print(f"  saved {dst}")
    return dst


if __name__ == "__main__":
    for name, cfg in CFG.items():
        process(name, cfg)
