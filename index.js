// Import
const http = require('http');
const fs   = require('fs');

// Parameters
const hostname  = '127.0.0.1';
const port      = 3000;
const webFolder = 'docs';

http.createServer((request, response) => {

    console.log(request.method, request.url);
    
    if(request.url == '/') request.url = '/index.html';

    fs.readFile(webFolder + request.url, (error, content) => {
        if(error) console.log(error);
        response.end(content, 'utf-8');
    });

}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);