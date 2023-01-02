const http = require('http');
const fs =require('fs');
const server = http.createServer((req,res) => {
    // setting response header
   res.setHeader('content-Type', 'text/html');
    // after setting the header, we create cases for the files using switch

    // let's create a path first, where the files are located
    let path = './pages/';


    // STATUS CODE RANGES
    // 100 range - informational responses
    // 200 range - success codes
    // 300 range - codes for redirects
    // 400 range - user or client error codes
    // 500 range - server error codes.

    // SOME POPULAR STATUS CODES
    // 200 - ok
    // 301 - resources moved (permanent redirect)
    // 404 - not found
    // 500 - internal server error

    // let's now do the switching and add the status codes to the cases
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/contact':
            path += 'contact.html'
            res.statusCode = 200;
            break;

        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    // after setting the cases, we then modify the sending code

    fs.readFile(path,(err,data) =>{
        if(err) {
            console.log(err);
            res.send();
        }else{
            res.write(data);
            res.end();
        }
    });

    
});

server.listen(3000,'localhost', () =>{
    console.log('listening for requests on port 3000');
});