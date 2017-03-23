// receives from index.html
// forwards search input on to formatQuery module.
// pass 'latest headlines' request on to request module.
var Listener = (function() {

  var latestButton = document.getElementById('latestButton');

  var initLatestButton = (callback) => {
      latestButton.addEventListener('click', function() {
        var url = "/latest";
        Request.makeRequest("GET", url, function(err, response) {
          if(err) {
              callback(err);
              return;
          }
          callback(null, response);
        });

      });
  }


// set listener for 'get latest news'.


// set listener for search input field.



    return {
        initLatestButton: initLatestButton
    }
})();
