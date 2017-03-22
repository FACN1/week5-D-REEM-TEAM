// receives raw quesry from listener module.
var FormatQuery = (function() {

  function formatQuery(queryString) {
    if (!queryString) {
      return new Error("Input can't be empty")
    }
    else if(typeof(queryString) !== "string") {
      return new Error("Input is not a string")
    } else if (!queryString.trim()) {
      return new Error("Input must include letters")
    }
    var queryArray = queryString.split("");
    queryArray.forEach(function(query, index){
      if (query === " ") {
        queryArray[index] = "%20";
      }

    });
    return "/search?q=" + queryArray.join("").toLowerCase();
  }


// remove caps.

// remove white space.

// add '/search?q=' before query string for search.

// forwards formatted querystring on to client request module.
    return {
       formatQuery: formatQuery
    }
})();
