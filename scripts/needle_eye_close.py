#!/usr/bin/env python3
"""Footer needle: close the eye rim so it reads as one continuous ring.

The real needle's eye end has an overlapping curl ("claw") and a notch gap at
the right end of the rim. At footer display size (~165 CSS px needle, eye
~20 px) those read as a BROKEN rim. This pass rebuilds the RIGHT closure of
the eye by transplanting the clean LEFT closure, mirrored horizontally and
warped column-by-column to the right end's ideal geometry:

- Target outer silhouette: bottom contour kept (clean, smoothed); cap top
  contour rebuilt by mirroring the bottom about a quadratic axis fit, which
  erases the notch step and claw wedge. Tip rounded over the last columns.
- Target aperture: observed main slot, median+gaussian smoothed, closed at
  x_close with a short taper; the thin trailing gap that cut the bottom-right
  rim is dropped (becomes solid metal).
- RGB texture: for each target column at signed distance u from the aperture's
  right end, sample the mirrored source column at the same distance from the
  aperture's LEFT end, with a piecewise-linear vertical map between the two
  columns' outer/aperture spans. Real rim highlights and inner shadows carry
  over; nothing is hand-synthesized.

Operates on assets/idyeah/footer-needle-{light,dark}.webp in place (1000px).
"""
import numpy as np
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets" / "idyeah"

P = {
    "light": dict(x_close=955, x_cap=928, cap_slim=0.94, ax_fit=(820, 932),
                  ramp=(895, 915), min_rim=4.5, cap_dome=(8, 993, 2.0)),
    "dark": dict(x_close=953, x_cap=926, cap_slim=0.94, ax_fit=(820, 932),
                 ramp=(895, 915), min_rim=4.5, cap_dome=(8, 993, 2.0)),
}


def smooth1d(a, sigma):
    r = int(3 * sigma)
    k = np.exp(-0.5 * (np.arange(-r, r + 1) / sigma) ** 2)
    k /= k.sum()
    return np.convolve(np.pad(a, r, mode="edge"), k, "valid")


def medfilt(a, w):
    r = w // 2
    pad = np.pad(a, r, mode="edge")
    return np.array([np.median(pad[i:i + w]) for i in range(len(a))])


def cov(yf, top, bot):
    return np.clip(np.minimum(bot, yf + 1.0) - np.maximum(top, yf), 0.0, 1.0)


def col_geo(op, x):
    """(T, B, gt, gb) for column x; gt/gb None if no aperture gap >=2px."""
    ys = np.nonzero(op[:, x])[0]
    if not len(ys):
        return None
    t, b = int(ys.min()), int(ys.max())
    runs, y = [], t
    while y <= b:
        if not op[y, x]:
            y2 = y
            while y2 <= b and not op[y2, x]:
                y2 += 1
            runs.append((y, y2))
            y = y2
        else:
            y += 1
    gt = gb = None
    if runs:
        main = max(runs, key=lambda r: r[1] - r[0])
        if main[1] - main[0] >= 2:
            gt, gb = float(main[0]), float(main[1])
    return float(t), float(b) + 1.0, gt, gb


def process(theme):
    p = P[theme]
    fp = ASSETS / f"footer-needle-{theme}.webp"
    a = np.array(Image.open(fp).convert("RGBA")).astype(np.float64)
    H, W = a.shape[:2]
    rgb, al = a[..., :3], a[..., 3]
    op = al > 128

    # observed geometry
    T = np.full(W, np.nan); B = np.full(W, np.nan)
    GT = np.full(W, np.nan); GB = np.full(W, np.nan)
    for x in range(600, W):
        g = col_geo(op, x)
        if g is None:
            continue
        T[x], B[x] = g[0], g[1]
        if g[2] is not None:
            GT[x], GB[x] = g[2], g[3]
    x_tip = int(np.nonzero(op.any(axis=0))[0].max())
    apx = np.nonzero(~np.isnan(GT))[0]
    x_a0 = int(apx.min())          # aperture left end (clean closure)
    x_a1 = p["x_close"]            # ideal aperture right end

    # axis: quadratic fit of midline on clean columns
    xs = np.arange(*p["ax_fit"])
    mid = (T[xs] + B[xs]) / 2.0
    ok = ~np.isnan(mid)
    axis = np.polyval(np.polyfit(xs[ok], mid[ok], 2), np.arange(W))

    # ideal outer contours
    Bs = B.copy(); v = ~np.isnan(Bs)
    Bs[v] = smooth1d(medfilt(Bs[v], 5), 1.5)
    Tn = T.copy()
    cap = np.arange(p["x_cap"], x_tip + 1)
    mirror = axis[cap] - p["cap_slim"] * (Bs[cap] - axis[cap])
    Tn[cap] = np.minimum(np.where(np.isnan(T[cap]), 1e9, T[cap]), mirror)
    v = ~np.isnan(Tn)
    Tn[v] = smooth1d(medfilt(Tn[v], 5), 1.5)
    Bn = Bs
    # blunt elliptical dome cap: no pointed tip on the eye end
    off, xtn, e = p["cap_dome"]
    xb = p["x_close"] + off
    m0 = (Tn[xb] + Bn[xb]) / 2.0
    h0 = (Bn[xb] - Tn[xb]) / 2.0
    for x in range(xb, xtn + 1):
        t = (x - xb) / float(xtn - xb)
        h = h0 * (1.0 - t ** e) ** (1.0 / e)
        m = m0 * (1 - t) + axis[x] * t
        wb = min(1.0, (x - xb) / 6.0)  # ease into the dome
        Tn[x] = (1 - wb) * Tn[x] + wb * (m - h)
        Bn[x] = (1 - wb) * Bn[x] + wb * (m + h)
    Tn[xtn + 1:] = np.nan
    Bn[xtn + 1:] = np.nan
    x_tip = xtn

    # ideal aperture
    gx = np.arange(x_a0, x_a1 + 1)
    gt = np.interp(gx, apx[apx <= x_a1], GT[apx[apx <= x_a1]])
    gb = np.interp(gx, apx[apx <= x_a1], GB[apx[apx <= x_a1]])
    gt = smooth1d(medfilt(gt, 5), 1.2)
    gb = smooth1d(medfilt(gb, 5), 1.2)
    n = len(gt)
    for i in range(n - 7, n):   # rounded close taper
        f = (i - (n - 8)) / 7.0
        m0, h0 = (gt[i] + gb[i]) / 2.0, (gb[i] - gt[i]) / 2.0
        h = h0 * float(np.sqrt(max(0.0, 1.0 - f * f)) * 0.62 + 0.38)
        gt[i], gb[i] = m0 - h, m0 + h
    GTn = np.full(W, np.nan); GBn = np.full(W, np.nan)
    GTn[gx] = np.maximum(gt, Tn[gx] + p["min_rim"])
    GBn[gx] = np.minimum(gb, Bn[gx] - p["min_rim"])

    # source (left closure) geometry, float-smoothed
    Ts = T.copy(); vs = ~np.isnan(Ts)
    Ts[vs] = smooth1d(medfilt(Ts[vs], 3), 1.0)
    Bsl = B.copy(); Bsl[vs] = smooth1d(medfilt(Bsl[vs], 3), 1.0)

    def src_col(xs_):
        xs_ = int(round(xs_))
        t, b = Ts[xs_], Bsl[xs_]
        g1, g2 = GT[xs_], GB[xs_]
        if np.isnan(g1):
            g1 = g2 = None
        return t, b, g1, g2

    def vmap(yt, Tt, Bt, g1t, g2t, ts, bs, g1s, g2s):
        """Map target y to source y, piecewise linear across spans."""
        if g1t is not None and g1s is not None:
            if yt <= g1t:
                f = (yt - Tt) / max(g1t - Tt, 1e-3)
                return ts + f * (g1s - ts)
            if yt >= g2t:
                f = (yt - g2t) / max(Bt - g2t, 1e-3)
                return g2s + f * (bs - g2s)
            f = (yt - g1t) / max(g2t - g1t, 1e-3)
            return g1s + f * (g2s - g1s)
        f = (yt - Tt) / max(Bt - Tt, 1e-3)
        return ts + f * (bs - ts)

    # cap donors: clean top-rim columns; each with the depth of its brightest point
    cap_donors = []
    for xd in (x_a0 + 10, x_a0 + 13, x_a0 + 16, x_a0 + 19, x_a0 + 22):
        t_, b_, g1_, g2_ = src_col(xd)
        if g1_ is None:
            continue
        lums = rgb[:, xd].mean(axis=1)
        t0i = int(round(t_))
        span = max(int(round(g1_)) - t0i, 3)
        dpk_ = min(max((int(np.argmax(lums[t0i:t0i + span])) + 0.5) / span, 0.33), 0.58)
        cap_donors.append((xd, t_, g1_, dpk_))

    out_rgb = rgb.copy()
    out_al = al.copy()
    r0, r1 = p["ramp"]
    yy = np.arange(H, dtype=np.float64)
    for x in range(r0, W):
        if np.isnan(Tn[x]):
            out_al[:, x] = 0
            continue
        Tt, Bt = Tn[x], Bn[x]
        g1t = GTn[x] if not np.isnan(GTn[x]) else None
        g2t = GBn[x] if g1t is not None else None
        # new alpha from ideal contours
        c = cov(yy, Tt, Bt)
        if g1t is not None:
            c -= cov(yy, max(g1t, Tt), min(g2t, Bt))
        new_a = np.clip(c, 0, 1) * 255
        # source column: mirror about the two aperture ends. Cap columns build
        # a dome from the clean top-rim profile (outer dark edge -> bright),
        # mirrored about the cap's vertical center - no shaft dark band.
        u = x - x_a1
        if u <= 0:
            xs_f = float(min(max(x_a0 - u, 600), W - 1))
            cap_mode = False
        else:
            xs_f = x_a0 + 12.0 + 8.0 * (u / max(x_tip - x_a1, 1))
            cap_mode = True
        xa, xb_ = int(np.floor(xs_f)), int(np.floor(xs_f)) + 1
        fxx = xs_f - xa
        xb_ = min(xb_, W - 1)
        ga, gb2 = src_col(xa), src_col(xb_)
        ts, bs = (1 - fxx) * ga[0] + fxx * gb2[0], (1 - fxx) * ga[1] + fxx * gb2[1]
        g1s = g2s = None
        if ga[2] is not None and gb2[2] is not None:
            g1s = (1 - fxx) * ga[2] + fxx * gb2[2]
            g2s = (1 - fxx) * ga[3] + fxx * gb2[3]
        if cap_mode and not cap_donors:
            cap_mode = False

        def samp(ys_f):
            yi = int(np.clip(np.floor(ys_f - 0.5), 0, H - 2))
            fy = np.clip(ys_f - 0.5 - yi, 0, 1)
            va = rgb[yi, xa] * (1 - fy) + rgb[yi + 1, xa] * fy
            vb = rgb[yi, xb_] * (1 - fy) + rgb[yi + 1, xb_] * fy
            return (1 - fxx) * va + fxx * vb

        newc = np.empty((H, 3))
        for y in range(H):
            if new_a[y] < 3:
                newc[y] = rgb[y, x]
                continue
            if cap_mode:
                vf = float(np.clip((y + 0.5 - Tt) / max(Bt - Tt, 1e-3), 0.0, 1.0))
                dd = min(min(vf, 1.0 - vf) * 2.0, 1.0) ** 0.8
                vals = []
                for xd, ts_, g1s_, dpk_ in cap_donors:
                    ys_f = ts_ + dpk_ * dd * (g1s_ - ts_)
                    yi = int(np.clip(np.floor(ys_f - 0.5), 0, H - 2))
                    fy = np.clip(ys_f - 0.5 - yi, 0, 1)
                    vals.append(rgb[yi, xd] * (1 - fy) + rgb[yi + 1, xd] * fy)
                newc[y] = np.median(vals, axis=0)
            else:
                newc[y] = samp(vmap(y + 0.5, Tt, Bt, g1t, g2t, ts, bs, g1s, g2s))
        w = min(1.0, (x - r0) / float(r1 - r0))
        out_al[:, x] = (1 - w) * al[:, x] + w * new_a
        m = new_a > 3
        out_rgb[m, x] = (1 - w) * rgb[m, x] + w * newc[m]

    # alpha-weighted blur helper (no bleed from transparent pixels)
    from PIL import ImageFilter

    def wblur(sigma):
        w = (out_al / 255.0)[..., None]
        num = np.array(Image.fromarray((out_rgb * w).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(sigma))).astype(np.float64)
        den = np.array(Image.fromarray((w[..., 0] * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(sigma))).astype(np.float64) / 255.0
        return num / np.maximum(den[..., None], 0.05)

    # polish the cap: mild blur so the dome reads as smooth metal
    blur = wblur(1.0)
    capm = np.zeros((H, W), bool)
    capm[:, x_a1 + 1:] = out_al[:, x_a1 + 1:] > 60
    out_rgb[capm] = 0.42 * out_rgb[capm] + 0.58 * blur[capm]

    # feather the ring/cap junction with a blur band
    hb = wblur(2.0)
    jm = np.zeros((H, W), bool)
    jm[:, x_a1 - 4:x_a1 + 10] = out_al[:, x_a1 - 4:x_a1 + 10] > 60
    out_rgb[jm] = 0.5 * out_rgb[jm] + 0.5 * hb[jm]
    out_rgb = np.clip(out_rgb, 0, 255)

    res = np.dstack([out_rgb, out_al]).astype(np.uint8)
    Image.fromarray(res).save(fp, quality=95, method=6)
    print(f"{theme}: aperture [{x_a0},{x_a1}] tip {x_tip} axis@950 {axis[950]:.1f} "
          f"cap_top@970 {Tn[970]:.1f} bot@970 {Bn[970]:.1f}")


if __name__ == "__main__":
    for t in ("light", "dark"):
        process(t)
