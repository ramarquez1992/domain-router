var http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    url = require('url');

var port = 8080;

var paths = {
  '/': '8081',
  '/foo': '8082',
  'default': '8081'
};

http.createServer(function(req, res) {
  var hostname = req.headers.host.split(":")[0];
  var pathname = url.parse(req.url).pathname;
  var port = paths['default'];

  if (paths[pathname]) {
    port = paths[pathname];
  }

  proxy.web(req, res, { target: 'http://localhost:' + port });

}).listen(port, function() {
  console.log('Proxy listening on port ' + port + '...');
});

