/** 
 * Path module
*/
const path = require('path');

// Returns base path name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path as an object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'test.html'));