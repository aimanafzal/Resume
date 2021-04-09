const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 9000;




server.listen(port, function(){
    
    console.table(`backend listening on http://localhost:${port}`);
});

