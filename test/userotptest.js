var user = require('../lib/users');
var request = require('supertest');
describe('User OTP Tests', function() {
var server;
beforeEach(function () {
server = require('../server').server;
});
it('should respond with JSON data', function (done) {
request(server)
.get('/about/jv')	
.expect(200,{"user":[{"_id":"596417a48273a4740c000001","user":"jv","email":"jv@gmail.com","otp":"1234"}]},done);
});
});