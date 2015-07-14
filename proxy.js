var http = require('http'),                                                                                                                                                   
    httpProxy = require('http-proxy'),                                          
    proxy = httpProxy.createProxyServer({}),                                    
    url = require('url');                                                       
                                                                                
var port = 80;                                                                  
                                                                                
var paths = {                                                                   
  '/': '8081',                                                                  
  '/foo': '8082',                                                               
  'default': '8081'                                                             
};                                                                              
                                                                                
var domains = {                                                                 
  'marquez.space': '8081',                                                      
  'lookwhatialmoststeppedin.com': '8082',                                       
  'space.plumbing': '8083',                                       
  'default': '8081'                                                             
};                                                                              
                                                                                
http.createServer(function(req, res) {                                          
  var hostname = req.headers.host.split(":")[0];                                
  var pathname = url.parse(req.url).pathname;                                   
  var port = domains['default'];                                                
                                                                                
  //if (paths[pathname]) {                                                      
  //  port = paths[pathname];                                                   
  //}                                                                           
                                                                                
  if (domains[hostname]) {                                                      
    port = domains[hostname];                                                   
  }                                                                             
                                                                                
  proxy.web(req, res, { target: 'http://localhost:' + port });                  
                                                                                
}).listen(port, function() {                                                    
  console.log('Proxy listening on port ' + port + '...');                       
});                                                                             
                                                                                
          
