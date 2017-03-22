// receives inut from main.js
// sends requests to server-side index.js / server.js

var Request = (function() {
    var makeRequest = (callback) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange((e) => {
            if (xhr.readyState === 4)
                if (xhr.statusCode === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(new Error('Status code:' + xhr.statusCode));
                }
            }
        })
    }

    makeRequest((error, data) => {
        if (error) {
            console.log(error.message);
            return;
        }

    });

    return {
        makeRequest: makeRequest
    }
})();
