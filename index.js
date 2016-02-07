var http = require('http'),
    url = require('url'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    config = require('./config.json');

var port = Number(config.proxyPort);

var domains = config.domains;
var paths = config.paths;

http.createServer(function(req, res) {
  var appPort = config.defaultAppPort;

  var hostname = req.headers.host.split(":")[0];
  var pathname = url.parse(req.url).pathname;

  if (domains[hostname]) {
    appPort = domains[hostname];
  }

  if (paths[pathname]) {
    appPort = paths[pathname];
  }

  proxy.web(req, res, { target: 'http://localhost:' + appPort });

}).listen(port, function() {
  console.log('Listening on port ' + port + '...');
});

