/*
  * File Structure Module 
*/
const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created.');
});

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello from node', err => {
  if(err) throw err;
  console.log('File created.');

  // Append to a file
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' this is added text.', err => {
    if (err) throw err;
    console.log('File edited.');
  });

});

// Read a file
fs.readFile(path.join(__dirname, '/test/hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

// Rename a file
fs.rename(path.join(__dirname, '/test/hello.txt'), path.join(__dirname, '/test/hello3.txt'), err => {
  if(err) throw err;
  console.log('File renamed.');
});
