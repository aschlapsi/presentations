var http;
http = require('http');
(http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  return res.end('Hello, world!\n');
})).listen(1337);
console.log('Server running at port 1337');