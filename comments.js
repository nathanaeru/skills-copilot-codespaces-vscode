// Create web server
// Create a web server that listens on port 3000. When it receives a request, it should respond with the contents of a file called comments.json. This file should contain an array of comments. Each comment should have a body and a username. The server should respond with a JSON representation of the comments. If the comments.json file does not exist, the server should respond with a 404 error.

// To test your server, you can use the curl command. For example:
// curl http://localhost:3000

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});