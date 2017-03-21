# week5-D-REEM-TEAM
News feed using Guardian API

### User Stories

### File Structure
- public/
    - index.html
    - css/
        - main.css
    - js/
        - main.js (calling all sub-modules)
        - listener.js
        - formatQuery.js
        - search.js
        - request.js
        - tests/
            - spec.html
            - tests.js
            - fixtures/

- src/
    - index.js
    - server.js
    - router.js
    - routes/
        - static.js
        - search.js
        - error.js
    - tests/
        - tests.js
        - fixtures/


### API URLs
- LATEST ARTICLES - http://content.guardianapis.com/search?order-by=newest&api-key=test
- https://content.guardianapis.com/world/2017/mar/20/new-roads-create-more-traffic-fail-local-economies-cpre?api-key=test&show-blocks=all

- ```js
getArticleContent -> 'https://content.guardianapis.com/' + id + '?api-key=test&show-blocks=all'
getSearchResults -> 'http://content.guardianapis.com/search?q=' + search-query + '&order-by=newest&api-key=test'
```
