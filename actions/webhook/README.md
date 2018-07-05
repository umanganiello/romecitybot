# webhook
This OpenWhisk action acts as Webhook for incoming Telegram messages.

It interacts with Watson Assistant to understand the user's intent and returns the params needed to call the external API. Those params are passed to the following action in the sequence.

## Installing
Run ```npm install``` inside the action's directory.

Create an archive file with the content of the action's directory. If you're using Linux you can use the built-in script ```npm run build```

Install the action on OpenWhisk running:

```wsk action create webhook webhook.zip --kind nodejs:default```

## Unit testing
You can check if the installation has been successfully completed doing the following:
 * run ```npm test```

## Parameters
 * *chatId*
 * *text*