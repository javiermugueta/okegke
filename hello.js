const FROMWHERE = process.env.FROMWHERE
var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    counter = counter +1;
    response.end("{\"message\": \"Hello World from " + FROMWHERE + "!<br>It seems folks have been here up to " + counter +  " times \"}");
});
var port = 80;
server.listen(port);
