// receives traffic from the router.
const request = require('request');
const filterResponse = require('../filterResponse');
var search = module.exports = {};


search.latest = function(req, res) {
  var url = "http://content.guardianapis.com/search?order-by=newest&api-key=test"

  request(url, function (error, response, body) {
    if (error) {
      res.writeHead(500, {"content-type" : "text/html"});
      res.end("<h1>Internal Server Error :-| </h1>");
    }
    // console.log(body);
    res.writeHead(200, {"content-type": "application/json"});
    res.write(JSON.stringify(filterResponse(JSON.parse(body))))
    res.end();
  });

}


// handles requests from the user eventListener / (request.js)

// use request module to request data from guardian API

// filters traffic with the filterResponse.

// sends the data to the client side request module
