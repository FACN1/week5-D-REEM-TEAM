// receives traffic from router
// sends traffic on to the browser
var static = module.exports = {};
const fs = require('fs');
const path = require('path');
// require filesystem module

// takes file requests from router and serve files back to the browser.

// needs to be able to handle requests for html files, css files and javascript.

// Lookup types of content + informs handlers of content-type
