# sequence
The main execution flow consists of the following sequence:

Webhook->ProcessMessage->SendMessage

The sequence can be built and executed on local Whisk using the script [buildSequence.sh](buildSequence.sh). An alternative version based on IBM Cloud Functions is provided in [buildSequenceIBMCloud.sh](buildSequenceIBMCloud.sh)buildSequence.sh 