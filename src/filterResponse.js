// takes traffic from search module


// returns traffic back to the search module

module.exports = function(response) {
    console.log(response);

    var filteredResponse = {};

    var results = response.response.results;
    filteredResponse.results = [];

    results.forEach(function(result, i){
        filteredResponse.results[i] = {};
        filteredResponse.results[i].id = result.id;
        filteredResponse.results[i].sectionName = result.sectionName;
        filteredResponse.results[i].webPublicationDate = result.webPublicationDate;
        filteredResponse.results[i].title = result.webTitle;
        filteredResponse.results[i].webUrl = result.webUrl;

    })
    return filteredResponse;
}
