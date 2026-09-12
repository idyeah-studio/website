#!/usr/bin/env python3
"""Footer needle cutouts, v2: rebuild the eye end from REAL pixels.

The threads cross the eye at different positions in the light and dark hero
photos, so rim/cap structure occluded in one is usually clean in the other.
Per column (affine x-map, axis-relative y-map) we transfer clean pixels across
images with a tone LUT fitted on clean-in-both metal pairs; fall back to
mirror-cloning about the needle axis in the same image; last resort is
directional inpaint. The eye aperture + outer silhouette in the eye zone are
rebuilt from observed clean columns of BOTH images (no synthetic superellipse,
no flood fill). Finally the hero blend-mode result is baked into the asset
tones (multiply over #fafafa for light, screen over #141414 for dark) so the
footer needle renders exactly like the hero does in situ.

Outputs: full-res repaired cutouts + comparison crops into the scratchpad,
1000px webp assets into this worktree.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

SP = "/private/tmp/claude-501/-Users-idyeah-studio-Documents-Business-idyeah-studio-Brand-Identity-Website-website/fbc67661-c341-4973-a277-51456ca0f7df/scratchpad"
WT = "/Users/idyeah.studio/Documents/Business/idyeah.studio/Brand Identity/Website/website/.claude/worktrees/agent-a2634511359b9c2fc"
sys.path.insert(0, SP)
import needle_extract as NE  # noqa: E402

NE.WT = WT

ZW = 345          # eye-zone width, from the needle's right end leftward
BAND = 42         # half-height of the working band around the axis
PAPER_L = np.array([250.0, 250.0, 250.0])   # --paper light #fafafa
PAPER_D = np.array([20.0, 20.0, 20.0])      # --paper dark #141414


def gray(a):
    return a[..., :3].mean(axis=2) if a.ndim == 3 else a


def bilinear(im, yf, xf):
    """Sample im (H,W,3) at float (yf,xf)."""
    H, W = im.shape[:2]
    x0 = int(np.clip(np.floor(xf), 0, W - 2)); fx = xf - x0
    y0 = int(np.clip(np.floor(yf), 0, H - 2)); fy = yf - y0
    return ((im[y0, x0] * (1 - fx) + im[y0, x0 + 1] * fx) * (1 - fy)
            + (im[y0 + 1, x0] * (1 - fx) + im[y0 + 1, x0 + 1] * fx) * fy)


class Side:
    """One theme's rotated hero image + derived geometry."""

    def __init__(self, name, mode):
        self.mode = mode
        self.im, self.bgc = NE.load_rot(name)
        self.H, self.W = self.im.shape[:2]
        self.td, self.fg = NE.masks(self.im, mode)
        self.fgc = NE.erode(NE.dilate(self.fg, 3), 3)
        top, bot, self.xmin, self.xmax = NE.outer_contours(self.fg, self.td, self.H, self.W)
        self.top, self.bot = top, bot
        # raw spans + per-column corruption flags (recomputed; outer_contours interps silently)
        self.top_raw = np.full(self.W, np.nan)
        self.bot_raw = np.full(self.W, np.nan)
        self.ct = np.zeros(self.W, bool)   # top edge corrupt
        self.cb = np.zeros(self.W, bool)
        for x in range(self.xmin, self.xmax + 1):
            ys = np.nonzero(self.fgc[:, x])[0]
            if not len(ys):
                self.ct[x] = self.cb[x] = True
                continue
            t0, b0 = ys.min(), ys.max()
            self.top_raw[x], self.bot_raw[x] = t0, b0
            if self.td[max(t0 - 8, 0): t0 + 12, x].any():
                self.ct[x] = True
            if self.td[max(b0 - 12, 0): b0 + 8, x].any():
                self.cb[x] = True
        self.ct = NE.dilate(self.ct[None, :], 3)[0]
        self.cb = NE.dilate(self.cb[None, :], 3)[0]
        # straight-axis fit from clean shaft columns left of the eye zone
        xs = np.arange(self.xmax - 620, self.xmax - ZW - 10)
        ok = xs[~self.ct[xs] & ~self.cb[xs] & ~np.isnan(self.top_raw[xs])]
        c = (self.top_raw[ok] + self.bot_raw[ok]) / 2.0
        self.axis_fit = np.polyfit(ok, c, 1)
        self.halfw = float(np.median((self.bot_raw[ok] - self.top_raw[ok]) / 2.0))
        # luminance for classification
        self.lum = gray(self.im)

    def axis(self, x):
        return self.axis_fit[0] * x + self.axis_fit[1]

    def is_see_through(self, y, x):
        """Background/aperture test on the raw photo (light: white, dark: black)."""
        if self.mode == "light":
            return 255 - self.im[y, x].min() < 16
        return self.im[y, x].max() < 34


def build_luts(L, D, sx):
    """Tone LUTs between themes from clean-in-both metal pixel pairs."""
    pairsL, pairsD = [], []
    for x in range(L.xmax - 560, L.xmax + 1):
        if L.ct[x] or L.cb[x] or np.isnan(L.top_raw[x]):
            continue
        xd = int(round(D.xmin + (x - L.xmin) * sx))
        if xd < 0 or xd >= D.W or D.ct[xd] or D.cb[xd] or np.isnan(D.top_raw[xd]):
            continue
        t0, b0 = int(L.top_raw[x]) + 1, int(L.bot_raw[x])
        for y in range(t0, b0):
            if L.td[y, x]:
                continue
            yd = int(round((y - L.axis(x)) * (D.halfw / L.halfw) + D.axis(xd)))
            if yd < 0 or yd >= D.H or D.td[yd, xd]:
                continue
            if L.is_see_through(y, x) or D.is_see_through(yd, xd):
                continue
            pairsL.append(L.lum[y, x])
            pairsD.append(D.lum[yd, xd])
    pairsL = np.array(pairsL); pairsD = np.array(pairsD)
    print(f"tone pairs: {len(pairsL)}")

    def fit(src, dst):
        centers, vals = [], []
        for b0 in range(0, 256, 8):
            m = (src >= b0) & (src < b0 + 8)
            if m.sum() >= 40:
                centers.append(b0 + 4)
                vals.append(np.median(dst[m]))
        centers = np.array(centers, float); vals = np.array(vals, float)
        # smooth
        if len(vals) > 4:
            k = np.ones(3) / 3
            vals = np.convolve(np.pad(vals, 1, mode="edge"), k, mode="valid")
        lut = np.interp(np.arange(256), centers, vals)
        return lut

    return fit(pairsD, pairsL), fit(pairsL, pairsD)  # D->L, L->D


def estimate_offsets(L, D, sx):
    """Systematic y-error of the naive affine map in the head zone (light frame).

    Compares slot edges seen full-trusted in BOTH photos: negative values mean
    dark features land below light features after naive mapping.
    """
    z0 = L.xmax - ZW
    d_tops, d_bots = [], []
    for x in range(z0, L.xmax + 1):
        runsL = [r for r in see_runs(L, x, None, None)
                 if r[2] and r[3] and 8 <= r[1] - r[0] <= 26 and r[0] - 5 < L.axis(x) + 1.2 < r[1] + 5]
        xd = D.xmin + (x - L.xmin) * sx
        xdi = int(round(xd))
        if not (0 <= xdi < D.W):
            continue
        runsD = []
        for r in see_runs(D, xdi, None, None):
            a = (r[0] - D.axis(xd)) * (L.halfw / D.halfw) + L.axis(x)
            b = (r[1] - D.axis(xd)) * (L.halfw / D.halfw) + L.axis(x)
            if r[2] and r[3] and 8 <= b - a <= 26 and a - 9 < L.axis(x) + 1.2 < b + 9:
                runsD.append((a, b))
        if len(runsL) == 1 and len(runsD) == 1:
            if abs(runsL[0][0] - runsD[0][0]) < 9 and abs(runsL[0][1] - runsD[0][1]) < 9:
                d_tops.append(runsL[0][0] - runsD[0][0])
                d_bots.append(runsL[0][1] - runsD[0][1])
    d_top = float(np.median(d_tops)) if d_tops else 0.0
    d_bot = float(np.median(d_bots)) if d_bots else 0.0
    print(f"map offsets (light frame): top {d_top:+.1f} bottom {d_bot:+.1f} (n={len(d_tops)})")
    return d_top, d_bot


def rebuild_contours(T, S, t2s_x, vscale, corr_t=0.0, corr_b=0.0):
    """Rebuild T's outer contours in the eye zone using S where T is corrupt."""
    z0 = T.xmax - ZW
    top = T.top_raw.copy(); bot = T.bot_raw.copy()
    prov_t = {}; prov_b = {}
    for x in range(z0, min(T.xmax + 6, T.W)):
        xs = t2s_x(x); xsi = int(round(xs))
        s_ok_t = (0 <= xsi < S.W and not S.ct[xsi] and not np.isnan(S.top_raw[xsi]))
        s_ok_b = (0 <= xsi < S.W and not S.cb[xsi] and not np.isnan(S.bot_raw[xsi]))
        if not T.ct[x] and not np.isnan(T.top_raw[x]):
            prov_t[x] = "self"
        elif s_ok_t:
            top[x] = (S.top_raw[xsi] - S.axis(xs)) / vscale + T.axis(x) + corr_t
            prov_t[x] = "cross"
        else:
            top[x] = np.nan; prov_t[x] = "gap"
        if not T.cb[x] and not np.isnan(T.bot_raw[x]):
            prov_b[x] = "self"
        elif s_ok_b:
            bot[x] = (S.bot_raw[xsi] - S.axis(xs)) / vscale + T.axis(x) + corr_b
            prov_b[x] = "cross"
        else:
            bot[x] = np.nan; prov_b[x] = "gap"
    # mirror fallback only near the tip (no left/right anchors there for interp;
    # elsewhere interp between real neighbors beats mirroring, since the head
    # is not perfectly symmetric about the axis)
    for x in range(max(z0, T.xmax - 70), min(T.xmax + 6, T.W)):
        if prov_t.get(x) == "gap" and prov_b.get(x) in ("self", "cross"):
            top[x] = 2 * T.axis(x) - bot[x]; prov_t[x] = "mirror"
        elif prov_b.get(x) == "gap" and prov_t.get(x) in ("self", "cross"):
            bot[x] = 2 * T.axis(x) - top[x]; prov_b[x] = "mirror"
    for arr in (top, bot):
        seg = arr[z0:T.xmax + 6]
        good = ~np.isnan(seg)
        if good.sum() >= 2:
            idx = np.arange(len(seg))
            seg[~good] = np.interp(idx[~good], idx[good], seg[good])
        arr[z0:T.xmax + 6] = seg
    # smooth the zone
    k = np.ones(5) / 5
    for arr in (top, bot):
        seg = arr[z0 - 4:T.xmax + 6]
        m = ~np.isnan(seg)
        if m.all():
            arr[z0 - 4 + 2:T.xmax + 6 - 2] = np.convolve(seg, k, mode="valid")
    n_cross = sum(1 for v in prov_t.values() if v == "cross") + sum(1 for v in prov_b.values() if v == "cross")
    n_mir = sum(1 for v in prov_t.values() if v == "mirror") + sum(1 for v in prov_b.values() if v == "mirror")
    print(f"{T.mode} contours: cross={n_cross} mirror={n_mir}")
    return top, bot


def aperture_spans(L, D, sx, topL, botL, d_top, d_bot):
    """Eye aperture spans per LIGHT column, cross-image confirmed.

    See-through = white in light AND black in dark. A column where both photos
    are clean must agree (intersection); a column clean in only one photo is
    tentative and accepted only if it aligns with the confirmed slot.
    Returns (tops, bots, second, (x_left, x_right)).
    """
    z0 = L.xmax - ZW
    raw_runs = {}
    for x in range(z0, L.xmax + 1):
        runsL = see_runs(L, x, topL[x], botL[x])
        xd = D.xmin + (x - L.xmin) * sx
        xdi = int(round(xd))
        runsD = []
        if 0 <= xdi < D.W:
            for (y0, y1, ot, ob) in see_runs(D, xdi, None, None):
                runsD.append(((y0 - D.axis(xd)) * (L.halfw / D.halfw) + L.axis(x),
                              (y1 - D.axis(xd)) * (L.halfw / D.halfw) + L.axis(x), ot, ob))
        raw_runs[x] = (runsL, runsD)

    confirmed = {}
    tedges, bedges = {}, {}
    for x, (runsL, runsD) in raw_runs.items():
        runsDc = [(r[0] + d_top, r[1] + d_bot, r[2], r[3]) for r in runsD]
        conf_spans = []
        for runs in (runsL, runsDc):
            for r in runs:
                if r[2] and r[3] and 2.5 <= r[1] - r[0] <= 26 and r[0] - 5 < L.axis(x) + 1.2 < r[1] + 5:
                    conf_spans.append((r[0], r[1]))
        if conf_spans:
            confirmed[x] = conf_spans
        tedges[x] = [r[0] for r in runsL if r[2]] + [r[0] for r in runsDc if r[2]]
        bedges[x] = [r[1] for r in runsL if r[3]] + [r[1] for r in runsDc if r[3]]

    if not confirmed:
        raise RuntimeError("no confirmed aperture columns")
    # region-grow the primary slot from the widest confirmed column with
    # y-continuity; a column with only one trusted edge near the model updates
    # that edge and holds the other (nan -> interpolated later)
    x_seed = max(confirmed, key=lambda x: max(r[1] - r[0] for r in confirmed[x]))
    seed = max(confirmed[x_seed], key=lambda r: r[1] - r[0])
    tops = np.full(L.W, np.nan); bots = np.full(L.W, np.nan)
    tops[x_seed], bots[x_seed] = seed

    def grow(direction):
        last_t, last_b = seed
        x = x_seed + direction
        gap = 0
        edge = x_seed
        while z0 <= x <= L.xmax and gap < 40:
            best = None
            for r in confirmed.get(x, []):
                if min(r[1], last_b + 6) - max(r[0], last_t - 6) >= 2:
                    if best is None or (r[1] - r[0]) > (best[1] - best[0]):
                        best = r
            if best is None:
                # cross-paired trusted edges near the model
                tc = [t for t in tedges.get(x, []) if abs(t - last_t) <= 5]
                bc = [b for b in bedges.get(x, []) if abs(b - last_b) <= 5]
                if tc and bc:
                    t = min(tc, key=lambda v: abs(v - last_t))
                    b = min(bc, key=lambda v: abs(v - last_b))
                    if 2.5 <= b - t <= 26:
                        best = (t, b)
                elif tc:
                    t = min(tc, key=lambda v: abs(v - last_t))
                    tops[x] = t
                    last_t = 0.6 * last_t + 0.4 * t
                    gap = 0; edge = x; x += direction
                    continue
                elif bc:
                    b = min(bc, key=lambda v: abs(v - last_b))
                    bots[x] = b
                    last_b = 0.6 * last_b + 0.4 * b
                    gap = 0; edge = x; x += direction
                    continue
            if best is not None:
                tops[x], bots[x] = best
                last_t = 0.6 * last_t + 0.4 * best[0]
                last_b = 0.6 * last_b + 0.4 * best[1]
                gap = 0
                edge = x
            else:
                gap += 1
            x += direction
        return edge

    x1s = grow(+1)
    x0s = grow(-1)
    xc0, xc1 = min(confirmed), max(confirmed)

    # interpolate + clip to rim, smooth
    seg = slice(x0s, x1s + 1)
    for arr in (tops, bots):
        a = arr[seg]; good = ~np.isnan(a)
        idx = np.arange(len(a))
        a[~good] = np.interp(idx[~good], idx[good], a[good])
        arr[seg] = a
    k = np.ones(7) / 7
    for arr in (tops, bots):
        a = arr[seg].copy()
        if len(a) > 7:
            arr[x0s + 3:x1s - 2] = np.convolve(a, k, mode="valid")
    for x in range(x0s, x1s + 1):
        if not np.isnan(topL[x]):
            tops[x] = max(tops[x], topL[x] + 3.0)
            bots[x] = min(bots[x], botL[x] - 3.0)

    # secondary runs (wrap/claw gap around the slot's right part): full-trusted
    # observed runs only, no interpolation
    second = {}
    for x in range(x1s - 130, min(x1s + 60, L.xmax + 1)):
        if x not in raw_runs:
            continue
        runsL, runsD = raw_runs[x]
        runsDc = [(r[0] + d_top, r[1] + d_bot, r[2], r[3]) for r in runsD]
        for r in runsL + runsDc:
            if not (r[2] and r[3]):
                continue
            if r[1] - r[0] > 14 or r[1] - r[0] < 1.5:
                continue
            if not np.isnan(tops[x]) and min(r[1], bots[x]) - max(r[0], tops[x]) >= -1:
                continue  # overlaps/touches primary
            if abs((r[0] + r[1]) / 2 - L.axis(x)) < 17:
                if x not in second or (r[1] - r[0]) > (second[x][1] - second[x][0]):
                    second[x] = (r[0], r[1])
    print(f"light aperture: confirmed x[{xc0},{xc1}] grown x[{x0s},{x1s}] "
          f"confirmed-cols={len(confirmed)} secondary-cols={len(second)}")
    return tops, bots, second, (x0s, x1s)


def see_runs(SD, x, tlim, blim):
    """Background-colored runs inside the head interior of column x.

    Returns (y0, y1, ok_top, ok_bot): an edge is trusted when the run does not
    touch the search band boundary and the 3 px beyond it are thread-free metal
    (a thread splitting a run produces untrusted inner edges).
    """
    a = SD.axis(x)
    y0 = int(a - 24); y1 = int(a + 24)
    if tlim is not None and not np.isnan(tlim):
        y0 = max(y0, int(tlim) + 3)
    if blim is not None and not np.isnan(blim):
        y1 = min(y1, int(blim) - 3)
    if y1 <= y0:
        return []
    if SD.mode == "light":
        m = 255 - SD.im[y0:y1, x].min(axis=1) < 14
    else:
        m = SD.im[y0:y1, x].max(axis=1) < 32
    runs = []
    i = 0
    while i < len(m):
        if m[i]:
            j = i
            while j < len(m) and m[j]:
                j += 1
            ya, yb = y0 + i, y0 + j - 1
            if j - i >= 2:
                ok_t = (i > 0 and not SD.td[max(ya - 3, 0):ya, max(x - 1, 0):x + 2].any()
                        and SD.fgc[max(ya - 3, 0):ya, x].any())
                ok_b = (j < len(m) and not SD.td[yb + 1:yb + 4, max(x - 1, 0):x + 2].any()
                        and SD.fgc[yb + 1:yb + 4, x].any())
                runs.append((ya, yb, ok_t, ok_b))
            i = j
        else:
            i += 1
    return runs


def repair_zone(T, S, t2s_x, vscale, lut_s2t, apT, yoff, name):
    """Repair thread damage in T's eye zone using S, mirror, inpaint."""
    z0 = T.xmax - ZW
    z1 = min(T.xmax + 8, T.W)
    H, W = T.H, T.W
    repaired = np.zeros((H, W), bool)
    deferred = []
    sil = np.zeros((H, W), bool)
    for x in range(z0, z1):
        t, b = T.topz[x], T.botz[x]
        if np.isnan(t):
            continue
        sil[int(round(t)):int(round(b)) + 1, x] = True
    n_cross = n_mirror = n_inpaint = 0
    src_td = NE.dilate(S.td, 1)
    for x in range(z0, z1):
        ys = np.nonzero(T.td[:, x])[0]
        ys = ys[(ys > T.axis(x) - BAND) & (ys < T.axis(x) + BAND)]
        for y in ys:
            if not sil[y, x]:
                T.im[y, x] = T.bgc
                repaired[y, x] = True
                continue
            if apT[y, x]:
                T.im[y, x] = T.bgc
                repaired[y, x] = True
                continue
            # cross-image (search +-2 px vertically: thin rims tolerate small
            # mapping error, so snap onto the nearest clean metal sample)
            xs = t2s_x(x)
            yv0 = (y - T.axis(x)) * vscale + S.axis(xs) + yoff
            xsi = int(round(xs))
            hit = None
            if 2 <= xsi < S.W - 2:
                for dy in (0, -1, 1, -2, 2, -3, 3, -4, 4):
                    yv = yv0 + dy
                    yvi = int(round(yv))
                    if (2 <= yvi < S.H - 2 and not src_td[yvi, xsi]
                            and not S.apmask[yvi, xsi] and not S.is_see_through(yvi, xsi)):
                        hit = yv
                        break
            if hit is not None:
                v = float(np.interp(float(bilinear(S.im, hit, xs).mean()), np.arange(256), lut_s2t))
                T.im[y, x] = (v, v, v)
                repaired[y, x] = True
                n_cross += 1
                continue
            deferred.append((y, x))
    # mirror pass (about the local head center, not the shaft axis: the eye
    # head is not centered on the fitted axis)
    still = []
    tdw = NE.dilate(T.td, 1)
    for (y, x) in deferred:
        c_loc = T.axis(x)
        if not np.isnan(T.topz[x]) and not np.isnan(T.botz[x]):
            c_loc = (T.topz[x] + T.botz[x]) / 2.0
        ym = int(round(2 * c_loc - y))
        if (0 <= ym < H and sil[ym, x] and not tdw[ym, x] and not apT[ym, x]
                and not T.is_see_through(ym, x)):
            T.im[y, x] = T.im[ym, x]
            repaired[y, x] = True
            n_mirror += 1
        else:
            still.append((y, x))
    # inpaint pass (horizontal, then vertical)
    still2 = []
    for (y, x) in still:
        lx = x - 1
        while lx > z0 - 80 and (T.td[y, lx] and not repaired[y, lx]):
            lx -= 1
        rx = x + 1
        while rx < min(z1 + 5, W - 1) and (T.td[y, rx] and not repaired[y, rx]):
            rx += 1
        okl = sil[y, lx] and not T.td[y, lx] or repaired[y, lx]
        okr = sil[y, rx] and not T.td[y, rx] or repaired[y, rx]
        if okl and okr:
            tt = (x - lx) / (rx - lx)
            T.im[y, x] = T.im[y, lx] * (1 - tt) + T.im[y, rx] * tt
        elif okl:
            T.im[y, x] = T.im[y, lx]
        elif okr:
            T.im[y, x] = T.im[y, rx]
        else:
            still2.append((y, x))
            continue
        repaired[y, x] = True
        n_inpaint += 1
    print(f"{name}: cross={n_cross} mirror={n_mirror} inpaint={n_inpaint} unrepaired={len(still2)}")
    # clear thread flags in the zone band (handled here)
    for x in range(z0, z1):
        ys = np.nonzero(T.td[:, x])[0]
        ys = ys[(ys > T.axis(x) - BAND) & (ys < T.axis(x) + BAND)]
        T.td[ys, x] = False
    # gentle blend of repaired area
    if repaired.any():
        rm = NE.dilate(repaired, 1)
        blur = np.asarray(Image.fromarray(T.im.clip(0, 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(0.9))).astype(np.float32)
        T.im[rm] = 0.45 * T.im[rm] + 0.55 * blur[rm]
    T.zone_sil = sil
    return repaired


def snap_contours(T):
    """Snap zone contours onto real background/metal edges of the repaired image."""
    z0 = T.xmax - ZW
    diff = np.abs(T.im - T.bgc[None, None, :]).max(axis=2)
    moved = 0
    for x in range(z0, min(T.xmax + 6, T.W)):
        t = T.topz[x]; b = T.botz[x]
        if np.isnan(t):
            continue
        ti = int(round(t))
        if diff[ti, x] > 40:
            n = 0
            while n < 2 and ti - 1 >= 0 and diff[ti - 1, x] > 40:
                ti -= 1; n += 1
        else:
            n = 0
            while n < 5 and ti + 1 < T.H and diff[ti, x] <= 40:
                ti += 1; n += 1
        bi = int(round(b))
        if diff[bi, x] > 40:
            n = 0
            while n < 2 and bi + 1 < T.H and diff[bi + 1, x] > 40:
                bi += 1; n += 1
        else:
            n = 0
            while n < 5 and bi - 1 >= 0 and diff[bi, x] <= 40:
                bi -= 1; n += 1
        if bi - ti >= 2:
            moved += (ti != int(round(t))) + (bi != int(round(b)))
            T.topz[x], T.botz[x] = ti, bi
    # light smoothing of the snapped contours
    k = np.ones(3) / 3
    for arr in (T.topz, T.botz):
        seg = arr[z0:T.xmax + 6]
        m = ~np.isnan(seg)
        if m.all() and len(seg) > 3:
            arr[z0 + 1:T.xmax + 5] = np.convolve(seg, k, mode="valid")
    print(f"{T.mode} snap: moved {moved} contour points")


def finish(T, top_r, bot_r, aperture, mode):
    H, W = T.H, T.W
    sil = NE.spans_to_mask(top_r, bot_r, H, W)
    metal = sil & ~aperture
    alpha = metal.astype(np.float32)
    am = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.0))
    alpha = np.asarray(am).astype(np.float32) / 255.0
    alpha[NE.erode(metal, 2)] = 1.0
    alpha[~NE.dilate(metal, 2)] = 0.0
    rgb = T.im.clip(0, 255)
    # bake hero blend-mode result so the footer (no blend mode) renders identically
    if mode == "light":
        rgb = rgb * (PAPER_L / 255.0)          # multiply over paper
    else:
        rgb = 255.0 - (255.0 - rgb) * ((255.0 - PAPER_D) / 255.0)   # screen over paper
    rgba = np.dstack([rgb.clip(0, 255).astype(np.uint8), (alpha * 255).astype(np.uint8)])
    ys2, xs2 = np.nonzero(alpha > 0.01)
    pad = 6
    y0c, y1c = max(ys2.min() - pad, 0), min(ys2.max() + pad, H)
    x0c, x1c = max(xs2.min() - pad, 0), min(xs2.max() + pad, W)
    out = rgba[y0c:y1c, x0c:x1c]
    img = Image.fromarray(out)
    img.save(f"{SP}/matchv2-cutout-{mode}.png")
    w2 = 1000
    h2 = int(round(out.shape[0] * w2 / out.shape[1]))
    small = img.resize((w2, h2), Image.LANCZOS)
    small.save(f"{WT}/assets/idyeah/footer-needle-{mode}.webp", quality=92, method=6, exact=True)
    print(f"{mode}: cutout {out.shape[1]}x{out.shape[0]} -> asset 1000x{h2}")
    return img


def main():
    L = Side("needle-light", "light")
    D = Side("needle-dark", "dark")
    sx = (D.xmax - D.xmin) / (L.xmax - L.xmin)
    vscale_LD = D.halfw / L.halfw
    print(f"L x[{L.xmin},{L.xmax}] hw={L.halfw:.1f}  D x[{D.xmin},{D.xmax}] hw={D.halfw:.1f} sx={sx:.4f}")

    lut_D2L, lut_L2D = build_luts(L, D, sx)
    d_top, d_bot = estimate_offsets(L, D, sx)
    d_mean = (d_top + d_bot) / 2.0

    def Lx2Dx(x):
        return D.xmin + (x - L.xmin) * sx

    def Dx2Lx(x):
        return L.xmin + (x - D.xmin) / sx

    # rebuilt outer contours in eye zone (cross values corrected for the
    # systematic map offset, expressed in each target's frame)
    L.topz, L.botz = rebuild_contours(L, D, Lx2Dx, vscale_LD, d_top, d_bot)
    D.topz, D.botz = rebuild_contours(D, L, Dx2Lx, 1.0 / vscale_LD,
                                      -d_top * vscale_LD, -d_bot * vscale_LD)

    # aperture geometry (shared physical hole), in light coords
    tops, bots, second, xrange = aperture_spans(L, D, sx, L.topz, L.botz, d_top, d_bot)

    # rasterize aperture for each image
    apL = np.zeros((L.H, L.W), bool)
    apD = np.zeros((D.H, D.W), bool)
    x0s, x1s = xrange
    for x in range(x0s, x1s + 1):
        if np.isnan(tops[x]):
            continue
        spans = [(tops[x], bots[x])]
        if x in second:
            spans.append(second[x])
        xd = Lx2Dx(x)
        xdi = int(round(xd))
        for (a, b) in spans:
            if b - a < 1:
                continue
            apL[int(round(a)):int(round(b)) + 1, x] = True
            if 0 <= xdi < D.W:
                ad = (a - L.axis(x)) * vscale_LD + D.axis(xd) - d_top * vscale_LD
                bd = (b - L.axis(x)) * vscale_LD + D.axis(xd) - d_bot * vscale_LD
                apD[int(round(ad)):int(round(bd)) + 1, xdi] = True
    # close 1-col gaps in apD from rounding
    apD = NE.dilate(apD, 1) & NE.erode(NE.dilate(apD, 1), 1)
    apL_s = np.asarray(Image.fromarray((apL * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.4))) > 120
    apD_s = np.asarray(Image.fromarray((apD * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.4))) > 120
    L.apmask, D.apmask = apL_s, apD_s
    print(f"aperture px: light {apL_s.sum()} dark {apD_s.sum()}")

    # eye-zone pixel repair (light first, then dark can source from repaired light)
    repair_zone(L, D, Lx2Dx, vscale_LD, lut_D2L, apL_s, -d_mean * vscale_LD, "light-zone")
    repair_zone(D, L, Dx2Lx, 1.0 / vscale_LD, lut_L2D, apD_s, d_mean, "dark-zone")

    # snap zone contours to actual edges of the repaired images, then splice
    for T in (L, D):
        snap_contours(T)
        z0 = T.xmax - ZW
        T.top[z0:T.xmax + 6] = T.topz[z0:T.xmax + 6]
        T.bot[z0:T.xmax + 6] = T.botz[z0:T.xmax + 6]

    # standard pipeline for the rest: thread repair, deknot, finish
    silL = NE.spans_to_mask(L.top, L.bot, L.H, L.W)
    metalL = silL & ~apL_s
    L.im = NE.repair_thread_pixels(L.im, L.td, metalL, L.bgc)
    a, b = NE.deknot(L.im, L.top, L.bot, L.xmin, L.xmax, L.bgc, L.H, L.W)
    print(f"light knot [{a},{b}]")
    finish(L, L.top, L.bot, apL_s, "light")

    silD = NE.spans_to_mask(D.top, D.bot, D.H, D.W)
    metalD = silD & ~apD_s
    D.im = NE.repair_thread_pixels(D.im, D.td, metalD, D.bgc)
    a2, b2 = NE.deknot(D.im, D.top, D.bot, D.xmin, D.xmax, D.bgc, D.H, D.W)
    print(f"dark knot [{a2},{b2}]")
    finish(D, D.top, D.bot, apD_s, "dark")


if __name__ == "__main__":
    main()
