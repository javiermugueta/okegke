const FROMWHERE = process.env.FROMWHERE
var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World from " + FROMWHERE + "!");
});
var port = 80;
server.listen(port);
