const http = require('http');
const fs = require('fs');

const app = http.createServer(function(request, response){
    response.writeHead(200);
    response.end('asdfadsfasd');
});

app.listen(3000);