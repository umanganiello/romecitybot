var assert = require('assert');
var processMessage = require('./sendMessage.js');

describe('sendMessage', function() {
    it('should get a correct response from the Telegram API', function() {
        var params = {
            "chatId": "the chat id goes here",
            "chatText": "This is a Test message from Mocha!",
            "botToken": "the bot token goes here"
        };
        return processMessage.main(params).then(function(result) {
            //console.log(JSON.stringify(result));
            assert(result.msg);
        }).catch(function(err) {
            assert(false);
        });
    });
});