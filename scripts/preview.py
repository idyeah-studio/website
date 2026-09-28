"""Preview the static site locally, including Vercel-style clean HTML URLs."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewHandler(SimpleHTTPRequestHandler):
    # LAN previews expose only the approved site pages and browser assets.
    lan_preview = False
    def send_head(self):
        if self.lan_preview:
            root = Path(self.directory).resolve()
            target = Path(self.translate_path(self.path)).resolve()
            if target.is_dir():
                target = target / 'index.html'
            try:
                relative = target.relative_to(root)
            except ValueError:
                self.send_error(404)
                return None
            pages = {'index', 'services', 'mosaix-story', 'rialty-story',
                     'ionate-story', 'simcomm-story', 'stealth-story', 'vishal',
                     'products-study', 'alchemy', 'crit-ios', 'crit-figma', 'wabi',
                     'off-idyeah', 'off-001', 'off-002', 'off-003', 'off-004', 'off-005'}
            asset_types = {'.css', '.js', '.svg', '.webp', '.png', '.jpg', '.jpeg',
                           '.mp4', '.woff', '.woff2', '.ttf', '.otf', '.ico'}
            name = relative.as_posix()
            allowed = (name in {'terms.html', 'privacy.html', 'a-to-z.html', 'favicon.ico'}
                       or (relative.parent.as_posix() == 'magazine' and target.stem in pages and target.suffix == '.html')
                       or (name.startswith(('magazine/assets/', 'assets/idyeah/')) and target.suffix.lower() in asset_types))
            if not allowed or any(part.startswith('.') for part in relative.parts) or not target.is_file():
                self.send_error(404)
                return None
        return super().send_head()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def translate_path(self, path):
        resolved = super().translate_path(path)
        if not Path(resolved).suffix and Path(resolved + '.html').is_file():
            return resolved + '.html'
        return resolved


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8772)
    parser.add_argument('--host', default='127.0.0.1')
    args = parser.parse_args()
    PreviewHandler.lan_preview = args.host not in ('127.0.0.1', 'localhost', '::1')
    root = Path(__file__).resolve().parent.parent
    handler = partial(PreviewHandler, directory=str(root))
    with ThreadingHTTPServer((args.host, args.port), handler) as server:
        print(f'IDYeah local preview: http://{args.host}:{args.port}/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
