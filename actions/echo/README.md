# echo
This action responds to a Telegram webhook request echoing the input text in the same chat

## Installing
Run ```npm install``` inside the action's directory.

Create an archive file with the content of the action's directory. If you're using Linux you can use the built-in script ```npm run build```

Install the action on OpenWhisk running:

```wsk action create echo echo.zip --kind nodejs:default --param botToken <TelegramBotToken>```

## Unit testing
You can check if the installation has been successfully completed doing the following:
 * replace the placeholders with the *botToken* and *chatId* in [test.js](test.js)
 * run ```npm test```

## Parameters
 * Configuration params - see [params.json](params.json)
 * *botToken* - Telegram Bot token used to send the message 