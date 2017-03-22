// receives inut from main.js
// sends requests to server-side index.js / server.js

var Request = (function() {
    var makeRequest = (method, url, callback) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.statusCode === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(new Error('Status code:' + xhr.statusCode));
                }
            }
        }
        xhr.open(method, url);
        xhr.send();
    }


    return {
        makeRequest: makeRequest
    }
})();
