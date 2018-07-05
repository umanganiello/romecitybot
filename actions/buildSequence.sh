#!/bin/bash
# This script builds and deploys the three actions webhook, processmessage and sendmessage on local OW.

# Usage: ./buildsequence.sh userToken botToken createupdateflag runflag
# PARAMS:
# createupdateflag 0=create, 1=update actions
# runflag 0=build only, 1=build and execute sequence

# It then creates and executes the sequence.
#npm --prefix creates an empty etc directory that must be manually removed (https://github.com/npm/npm/issues/17322)

#webhook
npm --prefix ./webhook run build

if [ "$3" = "1" ];
    then
       wsk action -i update webhook ./webhook/webhook.zip --kind nodejs:default
    else
       wsk action -i create webhook ./webhook/webhook.zip --kind nodejs:default
fi

rm ./webhook/webhook.zip
rm -rf ./webhook/etc

#processmessage
npm --prefix ./processmessage run build

if [ "$3" = "1" ];
    then
       wsk action -i update processmessage ./processmessage/processmessage.zip --kind nodejs:default --param user_token $1 --param-file ./processmessage/params.json
    else
       wsk action -i create processmessage ./processmessage/processmessage.zip --kind nodejs:default --param user_token $1 --param-file ./processmessage/params.json
fi

rm ./processmessage/processmessage.zip
rm -rf ./processmessage/etc

#sendmessage
npm --prefix ./sendmessage run build

if [ "$3" = "1" ];
    then
       wsk action -i update sendmessage ./sendmessage/sendmessage.zip --kind nodejs:default --param botToken $2
    else
       wsk action -i create sendmessage ./sendmessage/sendmessage.zip --kind nodejs:default --param botToken $2
fi

rm ./sendmessage/sendmessage.zip
rm -rf ./sendmessage/etc

#sequence
if [ "$3" = "1" ];
    then
       wsk action -i update sequenceAction --sequence webhook,processmessage,sendmessage
    else
       wsk action -i create sequenceAction --sequence webhook,processmessage,sendmessage
fi

if [ "$4" = "1" ];
    then
        wsk action -i invoke --blocking sequenceAction --param-file sequence/params.json
fi