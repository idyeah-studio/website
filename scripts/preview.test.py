"""Offline HTTP checks for the preview's fixed DIYA launch proxy."""
import importlib.util
import io
import json
from http.client import IncompleteRead, parse_headers
from pathlib import Path
import unittest
from unittest.mock import MagicMock, patch
from urllib.error import URLError


spec = importlib.util.spec_from_file_location('idyeah_preview', Path(__file__).with_name('preview.py'))
preview = importlib.util.module_from_spec(spec)
spec.loader.exec_module(preview)


class MemorySocket:
    def __init__(self, request):
        self.input = io.BytesIO(request)
        self.output = io.BytesIO()

    def makefile(self, *_args, **_kwargs):
        return self.input

    def sendall(self, data):
        self.output.write(data)


class QuietPreviewHandler(preview.PreviewHandler):
    routes = []
    public_pages = {}

    def log_message(self, *_args):
        pass


ROOT = Path(__file__).parent.parent


def request_handler(handler, method='GET', path='/api/diya-launch', headers=''):
    request = f'{method} {path} HTTP/1.0\r\n{headers}\r\n'.encode('ascii')
    socket = MemorySocket(request)
    handler(socket, ('127.0.0.1', 12345), None, directory=str(ROOT))
    raw_headers, _, body = socket.output.getvalue().partition(b'\r\n\r\n')
    lines = raw_headers.decode('ascii').split('\r\n')
    status = int(lines[0].split()[1])
    response_headers = parse_headers(io.BytesIO(raw_headers.split(b'\r\n', 1)[1] + b'\r\n\r\n'))
    return status, response_headers, body


class LaunchProxyTests(unittest.TestCase):
    def request(self, method='GET', path='/api/diya-launch', headers=''):
        return request_handler(QuietPreviewHandler, method, path, headers)

    def upstream(self, body):
        response = MagicMock()
        response.status = 200
        response.read.return_value = body
        context = MagicMock()
        context.__enter__.return_value = response
        return context, response

    def test_get_uses_fixed_endpoint_without_forwarding_headers_or_query(self):
        upstream, response = self.upstream(b'{"seconds":1007289,"extra":"ignored"}')
        with patch.object(preview, 'urlopen', return_value=upstream) as fetch:
            status, headers, body = self.request(
                path='/api/diya-launch?url=https://example.invalid/',
                headers='Cookie: browser-cookie\r\nAuthorization: Bearer browser-token\r\n')
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(body), {'seconds': 1007289})
        self.assertEqual(headers['Cache-Control'], 'no-store')
        self.assertEqual(headers['Content-Type'], 'application/json; charset=utf-8')
        self.assertEqual(int(headers['Content-Length']), len(body))
        request = fetch.call_args.args[0]
        self.assertEqual(request.full_url, preview.DIYA_LAUNCH_URL)
        self.assertEqual(request.get_method(), 'GET')
        self.assertFalse(request.has_header('Cookie'))
        self.assertFalse(request.has_header('Authorization'))
        self.assertEqual(fetch.call_args.kwargs, {'timeout': 5})
        response.read.assert_called_once_with(preview.DIYA_LAUNCH_MAX_BYTES + 1)

    def test_head_returns_json_headers_without_a_body(self):
        upstream, _ = self.upstream(b'{"seconds":0}')
        with patch.object(preview, 'urlopen', return_value=upstream):
            status, headers, body = self.request(method='HEAD')
        self.assertEqual(status, 200)
        self.assertEqual(headers['Cache-Control'], 'no-store')
        self.assertEqual(int(headers['Content-Length']), len(b'{"seconds":0}'))
        self.assertEqual(body, b'')

    def test_invalid_countdowns_return_uncached_502_json(self):
        for payload in ({'seconds': True}, {'seconds': -1}, {'seconds': 1.5},
                        {'seconds': '10'}, {'seconds': None}, {}, [], 'bad JSON'):
            with self.subTest(payload=payload):
                encoded = b'not JSON' if payload == 'bad JSON' else json.dumps(payload).encode()
                upstream, _ = self.upstream(encoded)
                with patch.object(preview, 'urlopen', return_value=upstream):
                    status, headers, body = self.request()
                self.assertEqual(status, 502)
                self.assertEqual(headers['Cache-Control'], 'no-store')
                self.assertEqual(json.loads(body), {'error': 'Launch countdown unavailable'})

    def test_oversized_response_is_rejected_after_bounded_read(self):
        upstream, response = self.upstream(b' ' * (preview.DIYA_LAUNCH_MAX_BYTES + 1))
        with patch.object(preview, 'urlopen', return_value=upstream):
            status, _, _ = self.request()
        self.assertEqual(status, 502)
        response.read.assert_called_once_with(preview.DIYA_LAUNCH_MAX_BYTES + 1)

    def test_upstream_failure_returns_502_without_internal_details(self):
        for failure in (URLError('offline details'), TimeoutError('timeout details'), IncompleteRead(b'partial')):
            with self.subTest(failure=type(failure).__name__):
                with patch.object(preview, 'urlopen', side_effect=failure):
                    status, headers, body = self.request()
                self.assertEqual(status, 502)
                self.assertEqual(headers['Cache-Control'], 'no-store')
                self.assertEqual(json.loads(body), {'error': 'Launch countdown unavailable'})

    def test_other_paths_and_methods_never_proxy(self):
        with patch.object(preview, 'urlopen') as fetch:
            self.assertEqual(self.request(path='/api/diya-launch-other')[0], 404)
            self.assertEqual(self.request(method='POST')[0], 501)
        fetch.assert_not_called()


class PublishedProductRoutesTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        class PublishedPreviewHandler(QuietPreviewHandler):
            lan_preview = True
            routes = json.loads((ROOT / 'vercel.json').read_text())['routes']
            public_pages = json.loads((ROOT / 'scripts/public-pages.json').read_text())
        cls.handler = PublishedPreviewHandler

    def test_all_six_clean_routes_serve_their_published_source(self):
        for route, source in (
            ('/products/crit-audit', '/magazine/crit-audit.html'),
            ('/products/diya', '/magazine/diya.html'),
            ('/products/crit-mobile', '/magazine/crit-ios.html'),
            ('/products/crit-figma', '/magazine/crit-figma.html'),
            ('/products/dated-figma', '/magazine/dated-figma.html'),
            ('/products/design-ai-alchemy', '/magazine/alchemy.html'),
        ):
            with self.subTest(route=route):
                status, headers, body = request_handler(self.handler, path=route)
                self.assertEqual(status, 200)
                self.assertEqual(headers['Content-Type'], 'text/html')
                self.assertEqual(headers['Cache-Control'], 'no-store')
                self.assertEqual(body, (ROOT / source.lstrip('/')).read_bytes())

    def test_legacy_product_entry_routes_redirect_to_the_new_first_product(self):
        for route in ('/products', '/products/', '/products/keya', '/products/keya/',
                      '/products/keya.html', '/magazine/products-study', '/magazine/products-study.html'):
            with self.subTest(route=route):
                status, headers, body = request_handler(self.handler, path=route)
                self.assertEqual(status, 308)
                self.assertEqual(headers['Location'], '/products/crit-audit')
                self.assertEqual(body, b'')

    def test_new_product_source_urls_redirect_to_clean_routes(self):
        for name in ('crit-audit', 'diya'):
            for suffix in ('', '.html'):
                with self.subTest(name=name, suffix=suffix):
                    status, headers, _ = request_handler(self.handler, path=f'/magazine/{name}{suffix}')
                    self.assertEqual(status, 308)
                    self.assertEqual(headers['Location'], f'/products/{name}')

    def test_promoted_counter_script_is_available_in_the_published_assets(self):
        asset = '/magazine/assets/product-pages/diya-countdown.js'
        status, headers, body = request_handler(self.handler, path=asset)
        self.assertEqual(status, 200)
        self.assertIn('javascript', headers['Content-Type'])
        self.assertEqual(body, (ROOT / asset.lstrip('/')).read_bytes())


if __name__ == '__main__':
    unittest.main()
