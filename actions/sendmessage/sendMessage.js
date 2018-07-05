/**
  *
  * This action sends a message to a Telegram chat using the romecitybot.
  * @param chatId the id of the Telegram chat where to send the messages
 *  @param chatText the text that must be sent
  *
  */
function main(params) {
    var unirest = require('unirest');
    var url = 'https://api.telegram.org/bot' + params.botToken + '/sendMessage';

    return new Promise(function(resolve, reject) {
        unirest.post(url)
            .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
            .send({"chat_id": params.chatId, "text": params.message})
            .end(function (response) {
                if(response && response.statusCode && response.statusCode == 200){
                    resolve({msg: "[sendmessage OK] ChatId= " + params.chatId + ", message=" + params.message});
                }
                else{
                    reject("[sendmessage KO]: \n ERROR: \n " + response + "\n\n PARAMS: \n" + JSON.stringify(params));
                }
            });
    });
}
module.exports.main = main; //Needed to package the action along with its dependencies for OW/IBM Cloud FaaS