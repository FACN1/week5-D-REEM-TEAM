// receives from index.html
// forwards search input on to formatQuery module.
// pass 'latest headlines' request on to request module.
var Listener = (function() {

  var latestButton = document.getElementById('latestButton');

  latestButton.addEventListener('click', function(callback) {
    var url = "/latest";
    Request.makeRequest("GET", url, function(err, response) {
      if(err) {
          console.log(err.message);
          return;
      }
      console.log(response);
      Render.renderToDOM(response);
    });

    callback();
  });

// set listener for 'get latest news'.


// set listener for search input field.



    return {

    }
})();
