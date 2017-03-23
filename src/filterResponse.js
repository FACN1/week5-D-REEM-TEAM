// takes traffic from search module


// returns traffic back to the search module

module.exports = function(response) {
    console.log(response);

    var filteredResponse = {};

    var results = response.response.results;
    filteredResponse.results = [];


    filteredResponse.results = results.map((result) => {
      var newResult = {};

      newResult.id = result.id;
      newResult.sectionName = result.sectionName;
      newResult.webPublicationDate = result.webPublicationDate;
      newResult.title = result.webTitle;
      newResult.webUrl = result.webUrl;


      return newResult;
    })

    return filteredResponse;
}
