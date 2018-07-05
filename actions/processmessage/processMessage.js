/**
  *
  * This action contains the basic structure for a generic API async call.
  *
  */
function main(params) {
	var xmlrpc = require('xmlrpc');
    var client = xmlrpc.createClient({ host: params.host, port: params.port, path: params.authPath})

    return new Promise(function(resolve, reject) {
        client.methodCall(params.authMethodName, [params.user_token, ''], function (error, authToken) {
            if(error || !authToken){
                reject(error);
            }
            else{
                client = xmlrpc.createClient({ host: params.host, port: params.port, path: params.calledMethodPath});
                client.methodCall(params.calledMethodName, [authToken, params.inputValue, params.language], function (error, value) {
                    if(error || !value){
                        reject(error);
                    }
                    else{
                        //Extract the response for the user from the returned value
                        var response = {};
                        response.message = JSON.stringify(value.risposta); //Propagate the API response to the next action
                        response.chatId = params.chatId; //Propagate the original chat id to the next action
                        resolve(response);
                    }
                });
            }
        });
    });
}
module.exports.main = main; //Needed to package the action along with its dependencies for OW/IBM Cloud FaaS