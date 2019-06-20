var http = require('http');
http.createServer(function (request, response) {
    const url = request.url;
    if(url === "/getscript"){
        response.end("show()")
    }
    else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('404 NOT FOUND');  
    }
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');