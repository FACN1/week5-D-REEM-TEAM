// receives from server.js

// import handlers modules
var static = require('./routes/static');

//creates a router function (req,res)
function router(req, res){
  var url = req.url;
  if (url === "/search") {
    // search(req, res)
  }
  else {
    static.file(req, res);
  }
}
//redirect requests to relevant handler
module.exports = {
  router: router
}
