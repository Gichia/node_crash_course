/**
 * Http Module 
*/
const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello There..');
    res.end();
  })
  .listen(5000, () => {
    console.log('Server started on port 5000');
  });