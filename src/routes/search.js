// receives traffic from the router.
var request = require('request');

var search = module.exports = {};

var url = 'http://content.guardianapis.com/search?order-by=newest&api-key=test';

search.latest = function(req, res) {
  var url = "http://content.guardianapis.com/search?order-by=newest&api-key=test"

  request(url, function (error, response, body) {
    if (error) {
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("<h1>Internal Server Error :-| </h1>");
    }
    console.log(body);
  });

}


// handles requests from the user eventListener / (request.js)

// use request module to request data from guardian API

// filters traffic with the filterResponse.

// sends the data to the client side request module
