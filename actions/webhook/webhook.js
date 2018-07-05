/**
  *
  * This action acts as Webhook for incoming Telegram messages.
  * It interacts with Watson Assistant to understand the user's intent.
  * It returns the params needed to call the external API. Those params are passed to the following action in the sequence
  *
  * @param the JSON sent by Telegram via Webhook
  * @see https://core.telegram.org/bots/api#update
  */
function main(params) {
    var chatId = params.message.chat.id;    //From Telegram
    var text = params.message.text;         //From Telegram

    /*TODO: Interact with Watson Assistant in order to understand which API must be called and what are the input values.*/
    var callParams = {};
    callParams.calledMethodName = "paline.Previsioni";
    //callParams.calledMethodName = "paline.PalinaLinee";
    callParams.calledMethodPath = "/ws/xml/paline/7";
    callParams.inputValue = text;
    callParams.chatId = chatId;
    /**/

    return callParams;
}
module.exports.main = main; //Needed to package the action along with its dependencies for OW/IBM Cloud FaaS