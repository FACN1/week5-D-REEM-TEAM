Listener.initLatestButton((error, response) => {
    if (error) {
        console.log("Error in makeRequest: ", error);
        return;
    }
    Render.renderToDOM(response);
    // console.log("Response: ", response); DEBUG LOG
})
