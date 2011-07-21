http = require 'http'

(http.createServer (req, res) ->
  res.writeHead 200, 'Content-Type': 'text/plain'
  res.end 'Hello, world!\n').listen 1337

console.log 'Server running at port 1337'

