Listener.initLatestButton((error, response) => {
    if (error) {
        console.log("Error in makeRequest: ", error);
        return;
    }
    console.log("Response: ", response);
})
