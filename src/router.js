// receives from server.js

// import handlers modules
const static = require('./routes/static');
const search = require('./routes/search');
//creates a router function (req,res)
function router(req, res){
  var url = req.url;
  if (url === "/latest") {
    search.latest(req, res)
  }
  else if (url === '/search') {
    res.writeHead(404)
    res.end();
  }
  else {
    static.file(req, res);
  }
}
//redirect requests to relevant handler
module.exports = {
  router: router
}
