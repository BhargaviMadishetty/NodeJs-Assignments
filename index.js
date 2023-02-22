const http = require('http');
const fs = require('fs');

function createFile(filename, fileContent) {
    fs.writeFile(filename, fileContent, (err) => {
        console.log(err);
    })
}

filename = 'index.html';
fileContent = `<h1> Hello World </h1>
<p> This is Bhargavi... </p>`

createFile(filename, fileContent);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': "text/html" });
    res.end(fileContent)
})

server.listen(5000, () => {
    console.log('Server started');
})