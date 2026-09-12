#!/usr/bin/env python3
"""Rebuild the broken eye end of the footer needle cutouts.

Light: the aperture flood leaked and deleted the metal end cap -> broken open claw.
Rebuild everything right of x_R parametrically (silhouette + oval eye), shading
sampled from intact columns of the same asset.
Dark: outer silhouette is plausible; re-open the eye hole to a clean oval (junk
gray patch + wedge removed), keep real metal elsewhere.
Output: repaired full-res cutouts + 1000px webp assets into the worktree.
"""
import numpy as np
from PIL import Image, ImageFilter

S = "/private/tmp/claude-501/-Users-idyeah-studio-Documents-Business-idyeah-studio-Brand-Identity-Website-website/fbc67661-c341-4973-a277-51456ca0f7df/scratchpad"
WT = "/Users/idyeah.studio/Documents/Business/idyeah.studio/Brand Identity/Website/website/.claude/worktrees/agent-aa78b5b7f2aea8f26"


def smoothstep(t):
    t = np.clip(t, 0, 1)
    return t * t * (3 - 2 * t)


def sample_band(img, alpha, xr, y0r, y1r, n):
    """Sample n values along a band [y0r,y1r] of column xr (bilinear in y and x)."""
    H = img.shape[0]
    v = np.linspace(0.0, 1.0, n)
    out = np.zeros((n, 3), np.float32)
    x0 = int(np.floor(xr)); fx = xr - x0
    for xi, wx in ((x0, 1 - fx), (x0 + 1, fx)):
        xi = min(max(xi, 0), img.shape[1] - 1)
        ypos = y0r + v * (y1r - y0r)
        yi = np.clip(np.floor(ypos).astype(int), 0, H - 2)
        fy = (ypos - yi)[:, None]
        out += wx * (img[yi, xi].astype(np.float32) * (1 - fy) + img[yi + 1, xi].astype(np.float32) * fy)
    return out


def band_edges(alpha, x, kind, hole_guess):
    """Return (top, toph, both, bot) of column x from alpha: outer span + hole span."""
    col = alpha[:, x] > 127
    ys = np.nonzero(col)[0]
    top, bot = ys.min(), ys.max()
    runs = []
    s = ys[0]; prev = ys[0]
    for y in ys[1:]:
        if y > prev + 1:
            runs.append((s, prev)); s = y
        prev = y
    runs.append((s, prev))
    if len(runs) >= 2:
        # hole between first run end and last run start (largest gap)
        gaps = [(runs[i + 1][0] - runs[i][1], i) for i in range(len(runs) - 1)]
        g, i = max(gaps)
        return float(top), float(runs[i][1] + 1), float(runs[i + 1][0] - 1), float(bot)
    return float(top), None, None, float(bot)


def rebuild_light():
    im = Image.open(f"{S}/pneedle-cutout-light-full.png")
    a = np.asarray(im).copy()
    H, W = a.shape[:2]
    rgb = a[..., :3].astype(np.float32)
    al = a[..., 3].astype(np.float32)

    x_R = 1210          # rebuild from here
    cap0 = 1271         # hole right cap fully closed here / metal cap starts
    x_end = 1316        # outer tip of the needle end
    hole_cap0 = 1253    # hole starts rounding here

    # geometry
    def c_of(x):
        return 36.5 + 2.2 * smoothstep((x - 1194) / (1250.0 - 1194))

    def h_of(x):
        if x <= 1242:
            return 29.0 + 1.5 * smoothstep((x - 1210) / 32.0)
        if x <= cap0:
            return 30.5 - 2.5 * smoothstep((x - 1242) / (cap0 - 1242.0))
        u = (x - cap0) / float(x_end - cap0)
        u = min(u, 1.0)
        p = 2.5
        return 28.0 * max(1.0 - u ** p, 0.0) ** (1.0 / p)

    def hole_of(x):
        if x >= cap0:
            return None
        hh = 11.5
        if x > hole_cap0:
            u = (x - hole_cap0) / float(cap0 - hole_cap0)
            hh = 11.5 * max(1.0 - u ** 2.0, 0.0) ** 0.5
        if hh < 0.8:
            return None
        ch = c_of(x) + 1.2
        return ch - hh, ch + hh

    new_rgb = rgb.copy()
    new_mask = np.zeros((H, W), np.float32)
    new_mask[al > 127] = 1.0
    new_mask[:, x_R:] = 0.0

    # reference bands from intact columns
    for x in range(x_R, min(x_end + 2, W)):
        c = c_of(x); h = h_of(x)
        if h <= 0.5:
            continue
        top = c - h; bot = c + h
        hole = hole_of(x)
        if hole is not None:
            xr = 1160 + (x - x_R) * (40.0 / (cap0 - x_R))
            t0, th0, bh0, b0 = band_edges(a[..., 3], int(round(xr)), None, None)
            if th0 is None:      # fallback ref
                th0, bh0 = t0 + 17, b0 - 14
            th, bh = hole
            n1 = max(int(round(th - top)) + 1, 2)
            band = sample_band(rgb, al, xr, t0, th0 - 1, n1)
            ys = np.arange(int(np.floor(top)), int(np.floor(top)) + n1)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0
            n2 = max(int(round(bot - bh)) + 1, 2)
            band = sample_band(rgb, al, xr, bh0 + 1, b0, n2)
            ys = np.arange(int(np.ceil(bh)), int(np.ceil(bh)) + n2)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0
        else:
            xr = 1100 + (x - cap0) * (46.0 / (x_end - cap0)) if x >= cap0 else 1146
            col = a[..., 3][:, int(round(xr))] > 127
            ys0 = np.nonzero(col)[0]
            t0, b0 = ys0.min(), ys0.max()
            n = max(int(round(bot - top)) + 1, 2)
            band = sample_band(rgb, al, xr, t0, b0, n)
            ys = np.arange(int(np.floor(top)), int(np.floor(top)) + n)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0

    # gentle darkening toward the very tip of the cap (form shading)
    for x in range(cap0, min(x_end + 1, W)):
        u = (x - cap0) / float(x_end - cap0)
        f = 1.0 - 0.10 * smoothstep((u - 0.55) / 0.45)
        new_rgb[:, x] *= f

    # carve hole clean left of x_R where junk encroached (1180..x_R)
    for x in range(1180, x_R):
        hole = hole_of(x)
        if hole is None:
            continue
        th, bh = hole
        new_mask[int(np.ceil(th)) + 1: int(np.floor(bh)), x] = 0.0
        al[int(np.ceil(th)) + 1: int(np.floor(bh)), x] = 0.0

    return finish(a, rgb, al, new_rgb, new_mask, 1180, "light")


def rebuild_dark():
    im = Image.open(f"{S}/pneedle-cutout-dark-full.png")
    a = np.asarray(im).copy()
    H, W = a.shape[:2]
    rgb = a[..., :3].astype(np.float32)
    al = a[..., 3].astype(np.float32)

    x_R = 1200
    cap0 = 1262        # hole right end
    hole_cap0 = 1244

    # measured, smoothed outer silhouette from current alpha (shape is plausible)
    tops = np.full(W, np.nan)
    bots = np.full(W, np.nan)
    for x in range(W):
        ys = np.nonzero(al[:, x] > 127)[0]
        if len(ys):
            tops[x], bots[x] = ys.min(), ys.max()
    k = np.ones(9) / 9.0
    valid = ~np.isnan(tops)
    tsm = tops.copy(); bsm = bots.copy()
    idx = np.nonzero(valid)[0]
    tsm[idx] = np.convolve(np.pad(tops[idx], 4, mode="edge"), k, mode="valid")
    bsm[idx] = np.convolve(np.pad(bots[idx], 4, mode="edge"), k, mode="valid")

    def c_of(x):
        if np.isnan(tsm[x]):
            return None
        return (tsm[x] + bsm[x]) / 2.0

    def hole_of(x):
        if x < 1146 or x >= cap0:
            return None
        hh = 11.5
        if x > hole_cap0:
            u = (x - hole_cap0) / float(cap0 - hole_cap0)
            hh = 11.5 * max(1.0 - u ** 2.0, 0.0) ** 0.5
        if hh < 0.8:
            return None
        c = c_of(x)
        if c is None:
            return None
        ch = c + 1.5
        return ch - hh, ch + hh

    new_rgb = rgb.copy()
    new_mask = np.zeros((H, W), np.float32)
    new_mask[al > 127] = 1.0
    new_mask[:, x_R:] = 0.0

    x_last = int(np.nonzero(valid)[0].max())
    # parametric rounded cap for the outer end (old taper was a lopsided point)
    c_cap = c_of(cap0)
    h_cap = (bsm[cap0] - tsm[cap0]) / 2.0
    x_tip = min(x_last + 4, W - 2)

    def cap_h(x):
        u = (x - cap0) / float(x_tip - cap0)
        u = min(u, 1.0)
        p = 2.5
        return h_cap * max(1.0 - u ** p, 0.0) ** (1.0 / p)

    for x in range(x_R, x_tip + 1):
        if x < cap0 and np.isnan(tsm[x]):
            continue
        if x >= cap0:
            h = cap_h(x)
            if h <= 0.5:
                continue
            top, bot = c_cap - h, c_cap + h
        else:
            top, bot = tsm[x], bsm[x]
        hole = hole_of(x)
        if hole is not None:
            th, bh = hole
            xr = 1150 + (x - x_R) * (44.0 / (cap0 - x_R))
            t0, th0, bh0, b0 = band_edges((al > 127).astype(np.uint8) * 255, int(round(xr)), None, None)
            if th0 is None:
                th0, bh0 = t0 + 18, b0 - 15
            n1 = max(int(round(th - top)) + 1, 2)
            band = sample_band(rgb, al, xr, t0, th0 - 1, n1)
            ys = np.arange(int(np.floor(top)), int(np.floor(top)) + n1)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0
            n2 = max(int(round(bot - bh)) + 1, 2)
            band = sample_band(rgb, al, xr, bh0 + 1, b0, n2)
            ys = np.arange(int(np.ceil(bh)), int(np.ceil(bh)) + n2)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0
        else:
            # cap: bright chrome wrap = top rim band over bottom rim band
            xr = 1168 + ((x - cap0) * (24.0 / (x_tip - cap0)) if x >= cap0 else 0)
            t0, th0, bh0, b0 = band_edges((al > 127).astype(np.uint8) * 255, int(round(xr)), None, None)
            if th0 is None:
                th0, bh0 = t0 + 18, b0 - 15
            n = max(int(round(bot - top)) + 1, 2)
            n_up = max(int(round(n * 0.45)), 1)
            n_dn = max(n - n_up, 1)
            band_up = sample_band(rgb, al, xr, t0, th0 - 1, n_up)
            band_dn = sample_band(rgb, al, xr, bh0 + 1, b0, n_dn)
            band = np.vstack([band_up, band_dn])
            ys = np.arange(int(np.floor(top)), int(np.floor(top)) + n)
            ok = (ys >= 0) & (ys < H)
            new_rgb[ys[ok], x] = band[ok]
            new_mask[ys[ok], x] = 1.0

    # gentle darkening toward the very tip
    for x in range(cap0, x_tip + 1):
        u = (x - cap0) / float(x_tip - cap0)
        f = 1.0 - 0.08 * smoothstep((u - 0.55) / 0.45)
        new_rgb[:, x] *= f

    # carve hole clean left of x_R where junk encroached
    for x in range(1180, x_R):
        hole = hole_of(x)
        if hole is None:
            continue
        th, bh = hole
        new_mask[int(np.ceil(th)) + 1: int(np.floor(bh)), x] = 0.0
        al[int(np.ceil(th)) + 1: int(np.floor(bh)), x] = 0.0

    return finish(a, rgb, al, new_rgb, new_mask, 1180, "dark")


def finish(a, rgb, al, new_rgb, new_mask, x_R, mode):
    H, W = a.shape[:2]
    # feather the rebuilt mask edges only right of x_R
    m8 = (new_mask * 255).astype(np.uint8)
    mb = np.asarray(Image.fromarray(m8).filter(ImageFilter.GaussianBlur(1.1))).astype(np.float32) / 255.0
    hard_in = np.asarray(Image.fromarray(m8).filter(ImageFilter.MinFilter(5))) > 127
    hard_out = np.asarray(Image.fromarray(m8).filter(ImageFilter.MaxFilter(5))) <= 127
    mb[hard_in] = 1.0
    mb[hard_out] = 0.0
    new_al = al.copy()
    new_al[:, x_R:] = mb[:, x_R:] * 255.0
    # RGB seam blend around x_R over 8 px where metal in both
    for i, x in enumerate(range(x_R - 4, x_R + 4)):
        w = smoothstep((i + 1) / 8.0)
        both = (al[:, x] > 200) & (new_al[:, x] > 200)
        new_rgb[both, x] = (1 - w) * rgb[both, x] + w * new_rgb[both, x]
    out = np.dstack([np.clip(new_rgb, 0, 255).astype(np.uint8), np.clip(new_al, 0, 255).astype(np.uint8)])
    img = Image.fromarray(out)
    img.save(f"{S}/pfix-cutout-{mode}-repaired.png")
    # downscale to 1000 wide, save webp into worktree
    w2 = 1000
    h2 = int(round(H * w2 / W))
    small = img.resize((w2, h2), Image.LANCZOS)
    small.save(f"{WT}/assets/idyeah/footer-needle-{mode}.webp", quality=92, method=6, exact=True)
    print(mode, "cutout", img.size, "-> asset", small.size)
    return img


if __name__ == "__main__":
    rebuild_light()
    rebuild_dark()
