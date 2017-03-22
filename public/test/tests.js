QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

//search.js

// Does it receive traffic from the router?
// Does it handle requests properly?
// Does it get back the right response from filterResponse
// Does make a request to the api?

// formatQuery
// Does it return a string?
QUnit.test("Testing FormatQuery Module", function(assert) {
  assert.equal(FormatQuery.formatQuery("mario"), "/search?q=mario", "returns an actual string");
  assert.equal(FormatQuery.formatQuery(1234).message, "Input is not a string", "Check if returns non string");
  assert.equal(FormatQuery.formatQuery("").message, "Input can't be empty", "Check if return empty string");
  assert.equal(FormatQuery.formatQuery().message, "Input can't be empty", "Check if returns nothing");
  // Does it remove upper case?

  assert.equal(FormatQuery.formatQuery("ReeM"), "/search?q=reem", "Check if input changes to lowercase");
  assert.equal(FormatQuery.formatQuery("   ").message, "Input must include letters", "check if returns trimmed string and not falsey");
  assert.equal(FormatQuery.formatQuery(" fff  "), "/search?q=%20fff%20%20", "check if returns trimmed string ");

});
// Does it replace spaces with '%20'?
// Does it trim white space on either end
// Does it remove special characters?
