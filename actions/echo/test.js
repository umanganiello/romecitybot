var assert = require('assert');
var echo = require('./echo.js');

describe('echo', function() {
    it('should succesfully call Telegram API', function() {
        var params = {message : {chat: {}}};
        params.botToken = "the Telegram Bot token goes here";
        params.message.chat.id = "the target Telegram chat id goes here";
        params.message.text = "This is a test.";

        return echo.main(params).then(function(result) {
            assert(result.msg);
        }).catch(function(err) {
            assert(false);
        });
    });
});