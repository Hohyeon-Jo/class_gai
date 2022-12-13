const http = require('http');
const fs = require('fs').promises

const server = http.createServer( async (req,res) => {
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=htf-8'});
        res.end(data);
    } catch(err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset-utf-8'});
        res.end(err.message);
    }
    // res.write('<h1>Hello JY</h1>');

    // res.end('<p>bye HS</p>');
});

server.listen(8080);

server.on('listening', () =>{console.log("8080 리스닝 중");});

server.on('error', (error) => {console.log(error);})