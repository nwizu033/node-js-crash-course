const http = require('http');
const fs =require('fs');
const server = http.createServer((req,res) => {
    // setting response header
   res.setHeader('content-Type', 'text/html');
    // after setting the header, we create cases for the files using switch

    // let's create a path first, where the files are located
    let path = './pages/';

    // let's now do the switching
    switch(req.url){
        case '/':
            path += 'index.html';
            break;

        case '/about':
            path += 'about.html';
            break;

        case '/contact':
            path += 'contact.html'
            break;

        default:
            path += '404.html'
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