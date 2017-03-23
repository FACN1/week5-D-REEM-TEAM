// receives traffic from router
// sends traffic on to the browser
var staticHandler = module.exports = {};
// require modules
const fs = require('fs');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname, '../../public');
// takes file requests from router and serve files back to the browser.

staticHandler.file = function(req, res) {
  // store the requested filePath
  var filePath = path.join(publicPath, req.url);

  // convert requests for '/' to index.html
  if (filePath.charAt(filePath.length-1) === '/') filePath = path.join(filePath, 'index.html');
  var extension = String(path.extname(filePath)).toLowerCase();

  // look up headers
  var header = {};

  var mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif'
  };
  // return appropriate content-type value
  header["content-type"] = mimeTypes[extension] || 'text/html'

  fs.readFile(filePath, function (error, file) {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Error 404: File not Found :(</h1>');
        res.end();
      } else {
        res.writeHead(500, {'content-type': 'text/html'});
        res.write('<h1>Error 500: Internal Server Error :o</h1>');
        res.end();
      }
      return;
    }
    res.writeHead(200, header);
    res.write(file, 'utf-8');
    res.end();
  });


}

// needs to be able to handle requests for html files, css files and javascript.

// Lookup types of content + informs handlers of content-type
