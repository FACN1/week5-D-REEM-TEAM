const test = require('tape');
const router = require('../router');
const mockData = require('./fixtures/mockData');
const shot = require('shot');

test('Test that tape is working', (t) => {
    t.ok(true);
    t.end();
});

test('Test router with possible routes', (t) => {
  t.plan(4);
    // Test router:
    // Make sure that it redirects to correct handler

    shot.inject(router.router, { method: 'get', url: '/' }, (res) => {
        t.equal(res.statusCode, 200, '/ should have statusCode 200 because the URL exists');
    });
    shot.inject(router.router, { method: 'get', url: '/search' }, (res) => {
        t.equal(res.statusCode, 200, '/search should have statusCode 200 because the URL exists');
    });
    shot.inject(router.router, { method: 'get', url: '/latest' }, (res) => {
        t.equal(res.statusCode, 200, '/latest should have statusCode 200 because the URL exists');
    });
    shot.inject(router.router, { method: 'get', url: '/2934o9siudf9asndu934' }, (res) => {
        t.equal(res.statusCode, 404, '/2934o9siudf9asndu934 should have statusCode 404 because the URL doesn\'t exist');
    });
});

// test('Test filterResponse with mock data', (t) => {
//
//     // var result = filterResponse(mockData.filterResponse.input);
//     // var expected = mockData.filterResponse.output;
//     // t.equal(result, expected, 'Should convert original object into custom object with our formatting')
//     // t.end();
// });

/* Modules to test:
 * - filterResponse.js
 * -
 */
