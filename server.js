const http = require('http');
const server = http.createServer((req,res) => {
    // setting response header
   res.setHeader('content-Type', 'text/html');
//    to send response
    res.write('<h1> I am a blockchain developer</h1>');
    // end the response
    res.end();
});

server.listen(3000,'localhost', () =>{
    console.log('listening for requests on port 3000');
});