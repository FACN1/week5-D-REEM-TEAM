// receives response from client-side request module.
// renders response data to the DOM.
var Render = (function() {
    var renderToDOM = (response) => {
        var newsSection = document.getElementById('newsSection');

        var resultUl = document.createElement('ul');

        response.results.forEach((result, index) => {
            var resultLi = document.createElement('li');

            var articleTitle = document.createElement('h2');
            articleTitle.textContent = result.title;

            var articleDate = document.createElement('span');
            articleDate.textContent = result.webPublicationDate;

            var articleLink = document.createElement('a');
            articleLink.textContent = 'Read Article';
            articleLink.href = result.webUrl;

            var articleCategory = document.createElement('h4');
            articleCategory.textContent = result.sectionName;

            resultLi.appendChild(articleTitle);
            resultLi.appendChild(articleDate);
            resultLi.appendChild(articleLink);
            resultLi.appendChild(articleCategory);

            resultUl.appendChild(resultLi);
        });

        newsSection.replaceChild(resultUl, document.querySelector('#newsSection ul'));
    };



    return {
        renderToDOM: renderToDOM
    }
})();
