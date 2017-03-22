// receives from server.js

// import handlers modules
var static = require('./routes/static');

//creates a router function (req,res)
function router(req, res){
  var url = req.url;
  if (url === "/") {
    static(req, res)
  }
  else {
    static(req, res)
  }
  res.end();
}
//redirect requests to relevant handler
module.exports = {
  router: router
}
