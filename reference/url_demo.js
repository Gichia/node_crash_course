/** 
 *  Url Module
**/
const url = require('url');

const myUrl = new URL('https://mywebsite.com/profile.php?id=2fts&status=active');

// Serialized Url
console.log(myUrl.href);

// Host/Domain
console.log(myUrl.host);

// Host/Domain (Without port)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);