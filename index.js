const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if(req.url === '/') {

  //   fs.readFile(path.join(__dirname, 'public/index.html'), (err, content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });

  // } 
  // else if(req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public/about.html'), (err, content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // } 
  // else if(req.url === '/api/users') {
  //   const users = [
  //     {
  //       id: 1,
  //       username: "petergich",
  //       email: "peter@test.com"
  //     },
  //     {
  //       id: 2,
  //       username: "kevin",
  //       email: "kevin@test.com"
  //     },
  //     {
  //       id: 3,
  //       username: "john",
  //       email: "john@test.com"
  //     }
  //   ];
  //   res.writeHead(200, {'Content-Type': 'application/json'} );
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  
  // Get extension
  let extName = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and switch content type
  switch(extName) {
    case '.js': 
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          if(err) throw err;
          res.writeHead(200, { 'Content-Type': 'text/html' } );
          res.end(content, 'utf8');
        });
      } 
      else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    }
    else {
      // Success
      res.writeHead(200, {'Content-Type': contentType} );
      res.end(content, 'utf8');
    }

  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});