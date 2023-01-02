const http = require('http');
const fs =require('fs');
const server = http.createServer((req,res) => {
    // setting response header
   res.setHeader('content-Type', 'text/html');
//    to send a file as response, we have to read, then send.
    fs.readFile('./pages/index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
    
});

server.listen(3000,'localhost', () =>{
    console.log('listening for requests on port 3000');
});