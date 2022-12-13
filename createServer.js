const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=htf-80000'});

    res.write('<h1>Hello JY</h1>');

    res.end('<p>bye HS</p>');
});

server.listen(8080);

server.on('listening', () =>{console.log("8080 리스닝 중");});

server.on('error', (error) => {console.log(error);})

const server1 = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=htf-80000'});

    res.write('<h1>Hello JY</h1>');

    res.end('<p>bye HS</p>');
});

server1.listen(8080);

server1.on('listening', () =>{console.log("8080 리스닝 중");});

server1.on('error', (error) => {console.log(error);})