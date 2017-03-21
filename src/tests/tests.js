const test = require('tape');
const router = require('../router');

test('Test that tape is working', (t) => {
    t.ok(true);
    t.end();
});

test('Test router with possible routes', (t) => {
    // Test router:
    // Make sure that it redirects to correct handler

    Shot.inject(router, { method: 'get', url: '/' }, (res) => {
        t.equal(res.statusCode, 200, '/ should have statusCode 200 because the URL exists');
    });
    Shot.inject(router, { method: 'get', url: '/search' }, (res) => {
        t.equal(res.statusCode, 200, '/search should have statusCode 200 because the URL exists');
    });
    Shot.inject(router, { method: 'get', url: '/latest' }, (res) => {
        t.equal(res.statusCode, 200, '/latest should have statusCode 200 because the URL exists');
    });
    Shot.inject(router, { method: 'get', url: '/2934o9siudf9asndu934' }, (res) => {
        t.equal(res.statusCode, 404, '/2934o9siudf9asndu934 should have statusCode 404 because the URL doesn\'t exist');
    });
});


/* Modules to test:
 * - filterResponse.js
 * -
 */
