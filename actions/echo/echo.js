/**
 *
 * This action responds to a Telegram Webhook request echoing the input text in the same chat
 *
 * @param the JSON sent by Telegram via Webhook
 * @see https://core.telegram.org/bots/api#update
 *
 */
function main(params) {
    var unirest = require('unirest');
    var chatId = params.message.chat.id;    //From Telegram
    var text = params.message.text;         //From Telegram
    var botToken = params.botToken;         //Set when creating the action
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    return new Promise(function(resolve, reject) {
        unirest.post(url)
            .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send({"chat_id": chatId, "text": text})
            .end(function (response) {
                if(response && response.statusCode && response.statusCode == 200){
                    resolve({msg: "[ECHO] Response: \n" + JSON.stringify(response.body)});
                }
                else{
                    reject(response);
                }
            });
    });
}
module.exports.main = main; //Needed to package the action along with its dependencies for OW/IBM Cloud FaaS