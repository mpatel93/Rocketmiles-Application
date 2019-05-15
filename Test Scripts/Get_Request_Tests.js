//Test 1 - Successful request
pm.test("Status code is 200", function () { 
    pm.response.to.have.status(200); 
});

//Test 2 - Quick Response
tests["Response time is less than 500ms"] = responseTime < 500;

/** Test 3
Step 1 - Verify contentTypeHeader exists
Step 2 - If step 1 passed verify content is of type json **/
var contentTypeHeaderExists = responseHeaders.hasOwnProperty("Content-Type");
 
tests["contentTypeHeader exists"] = contentTypeHeaderExists;
 
if (contentTypeHeaderExists) {
    tests["Content is of type json"] = 
      responseHeaders["Content-Type"].has("application/json");
}

//Test 4 - Response contains a body
pm.test("Response must have a body", function () {
     pm.response.to.be.withBody;
});

//Test 5 - Check how many cards our deck has  
pm.test("Deck should contain 52 cards", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.remaining).to.eql(52);
});

//Test 6 - Deck must be shuffled  
pm.test("Deck should be shuffled", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.shuffled).to.eql(true);
});


