var assert = require('assert');
var processMessage = require('./processMessage.js');

describe('processMessage', function() {
    it('should get a correct response from the API', function() {
        var params = {
            "host": "muovi.roma.it",
            "port": 80,
            "authPath": "/ws/xml/autenticazione/1",
            "authMethodName": "autenticazione.Accedi",
            "language": "it",
            "user_token": "<user_token goes_here>",
            "calledMethodPath": "/ws/xml/paline/7",
            "calledMethodName": "paline.PalinaLinee",
            "inputValue": 77373
        };
        return processMessage.main(params).then(function(result) {
            //console.log(JSON.stringify(result));
            assert(result.msg);
        }).catch(function(err) {
            assert(false);
        });
    });
});