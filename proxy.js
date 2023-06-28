var http = require("http"),
    proxy = require("proxy");
const server = proxy.createProxy(http.createServer());
server.listen(5500, () => {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});