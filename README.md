# week5-D-REEM-TEAM
News feed using Guardian API

[![Build Status](https://travis-ci.org/FACN1/week5-D-REEM-TEAM.svg?branch=master)](https://travis-ci.org/FACN1/week5-D-REEM-TEAM)

### Getting Started
**Use on Heroku**
  - [Heroku link here](https://ancient-cove-53883.herokuapp.com/)

**Installation Guide**
  - Clone this repo `git clone git@github.com:FACN1/week5-D-REEM-TEAM.git`
  - Install the server `npm install`
  - to run the server type `npm start`



### User Stories
- I want to be able to view the Guardian News Paper's most recent online articles at the click of a button.
- I want to be able to search for a certain article or category.
- I want the site to be easy to use and not difficult to navigate.
- I want a summary for the website and what it does.
- (Stretch goal) I want to be able to search Guardian online articles related to that subjects that I search for.

### Initial Planning

![Image of white board planning](./DSC_0872.png)

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
    - filterResponse.js
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

```js
getArticleContent -> 'https://content.guardianapis.com/' + id + '?api-key=test&show-blocks=all'
getSearchResults -> 'http://content.guardianapis.com/search?q=' + search-query + '&order-by=newest&api-key=test'
```


### Resources
- https://github.com/FACN1/week5-D-REEM-TEAM/commit/65ecaeca8c157f06e03ea2f42d743bb8043390d1
- https://developer.mozilla.org/en-US/docs/Node_server_without_framework
