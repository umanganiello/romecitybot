# sendmessage
This OpenWhisk action sends a message to a Telegram chat using the romecitybot.

## Installing
Run ```npm install``` inside the action's directory.

Create an archive file with the content of the action's directory. If you're using Linux you can use the built-in script ```npm run build```

Install the action on OpenWhisk running:

```wsk action create sendmessage sendmessage.zip --kind nodejs:default --param botToken <TelegramBotToken>```

## Unit testing
You can check if the installation has been successfully completed doing the following:
 * replace the placeholder with the *botToken* and *chatId* in [test.js](test.js)
 * run ```npm test```

## Running the action
You can invoke the action running: 

```wsk action invoke --blocking sendmessage --param chatId <chatId> --param chatText <chatText>```

## Parameters
 * *botToken* - Telegram Bot token used to send the message 
 * *chatId* - The id of the Telegram chat where to send the messages
 * *chatText* - The text that must be sent

 ### Example
 ```wsk action invoke --blocking sendmessage --param chatId "12345" --param chatText "This is a message."```