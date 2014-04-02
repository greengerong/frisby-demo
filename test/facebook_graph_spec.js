/**
 * frisby.js: Twitter Example
 * (C) 2012, Vance Lucas
 */
var api = require('./common/common')();

api.run("Should get usr form server", function(frisby){

      frisby
      .inspectRequest()
      .get(api.url("/user"))
      .expectStatus(200)
      .toss();

});
