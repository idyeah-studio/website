"""Preview the static site locally, including Vercel-style clean HTML URLs."""
import argparse
import json
import re
from urllib.parse import urlsplit
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewHandler(SimpleHTTPRequestHandler):
    # LAN previews expose only the approved site pages and browser assets.
    lan_preview = False
    def send_head(self):
        request_path = urlsplit(self.path).path
        for route in self.routes:
            if route.get('status') == 308 and re.fullmatch(route['src'], request_path):
                self.send_response(308)
                self.send_header('Location', route['headers']['Location'])
                self.end_headers()
                return None
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
            pages = {'index', 'inside', 'services', 'mosaix-story', 'rialty-story',
                     'ionate-story', 'simcomm-story', 'stealth-story', 'vishal',
                     'products-study', 'alchemy', 'crit-ios', 'crit-figma', 'wabi',
                     'off-idyeah', 'off-001', 'off-002', 'off-003', 'off-004', 'off-005',
                     'off-006', 'proof', 'firecracker-story'}
            asset_types = {'.css', '.js', '.svg', '.webp', '.png', '.jpg', '.jpeg',
                           '.mp4', '.woff', '.woff2', '.ttf', '.otf', '.ico'}
            name = relative.as_posix()
            allowed = (name in {'index.html', 'terms.html', 'privacy.html', 'a-to-z.html', 'favicon.ico'}
                       or name in {url.lstrip('/') + '.html' for url in self.public_pages}
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
        request_path = urlsplit(path).path
        destination = next((r['dest'] for r in self.routes if r.get('src') == request_path and 'dest' in r and 'has' not in r), path)
        resolved = super().translate_path(destination)
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
    PreviewHandler.routes = json.loads((root / 'vercel.json').read_text())['routes']
    PreviewHandler.public_pages = json.loads((root / 'scripts/public-pages.json').read_text())
    handler = partial(PreviewHandler, directory=str(root))
    with ThreadingHTTPServer((args.host, args.port), handler) as server:
        print(f'IDYeah local preview: http://{args.host}:{args.port}/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
