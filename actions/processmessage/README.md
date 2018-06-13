# processmessage
This OpenWhisk action calls the public APIs provided by ATAC about realtime data on Rome public transport. It acts as a generic consumer for all the [provided APIs](https://romamobilita.it/it/azienda/open-data/api-real-time).

## Installing
Run ```npm install``` inside the action's directory.

Create an archive file with the content of the action's directory (excluding README.md and params.json). If you're using Linux you can use the built-in script ```npm run build```

Install the action on OpenWhisk running:

```wsk action create processmessage processmessage.zip --kind nodejs:default --param user_token <userDevToken> --param-file params.json```

## Running the action
* You can invoke the action running: 

```wsk action invoke --blocking processmessage --param calledMethodPath <methodPath> --param calledMethodName <methodName> --param inputValue <inputValue>```

## Parameters
 * Configuration params - see [params.json](params.json)
 * *user_token*
 * *calledMethodPath*
 * *calledMethodName*
 * *inputValue*
 
 See [Working with parameters](https://github.com/apache/incubator-openwhisk/blob/master/docs/parameters.md) for more info.
 ### Example
 ```wsk action invoke --blocking processmessage --param calledMethodPath "/ws/xml/paline/7" --param calledMethodName "paline.PalinaLinee" --param inputValue 77373```
 
 ## Authors
 
 * **Umberto Manganiello**
 
 See also the list of [contributors](https://github.com/umanganiello/romecitybot/graphs/contributors) who participated in this project.