/**
  *
  * This action sends a message to a Telegram chat using the romecitybot.
  * @param chatId the id of the Telegram chat where to send the messages
 *  @param chatText the text that must be sent
  *
  */
function main(params) {
    var unirest = require('unirest');
    var chatId = params.chatId;
    var text = params.chatText;
    var botToken = params.botToken;         //Set when creating the action
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    return new Promise(function(resolve, reject) {
        unirest.post(url)
            .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send({"chat_id": chatId, "text": text})
            .end(function (response) {
                if(response && response.statusCode && response.statusCode == 200){
                    resolve({msg: "[sendmessage] Response: \n" + JSON.stringify(response.body)});
                }
                else{
                    reject(response);
                }
            });
    });
}
module.exports.main = main; //Needed to package the action along with its dependencies for OW/IBM Cloud FaaS