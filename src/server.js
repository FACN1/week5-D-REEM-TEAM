server = module.exports = {};
// import http core module and router module
const http = require('http');
const router = require('./router');

// establish port
const port = process.env.PORT || 3000;

// create server and pass the router, pass out log to confirm the server works.

server.start = () => {
  var server = http.createServer(router.listener);

  server.listen(port, function(error){
    if(error){
      throw error;
    }
    console.log('server is running on port: ', port);
  })
}
