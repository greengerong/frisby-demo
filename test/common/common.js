
var frisby = require('frisby'),
    host = "http://localhost:3000";

module.exports = function() {

    var api = {};

    api.url = function(url) {
        return host + url;
    };

    api.run = function(testCase, done) {
        frisby
        .create('should get token')
        .addHeader('Accept', 'application/json')
        .get(this.url("/token"))
        .expectStatus(200)
        .after(function(error, res, token) {
            var result = frisby
            .create(testCase)
            .addHeader('Accept', 'application/json')
            .addHeader('content-type', 'application/json')
            .addHeader("Cookie", res.headers["set-cookie"])
            .addHeader('token', token);

            done(result);
        })
        .toss();
    };

    return api;
}