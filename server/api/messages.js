import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

//import collections
import messages from "../models/messages";
import conversations from "../models/conversations";

Meteor.publish('getMessages', function(convoId){

    console.log(messages.find({ conversationId : convoId}).fetch());
    return messages.find({ conversationId : convoId});

});

Meteor.methods({

    // Method to add Conversation
	'sendMessage'(message,conversationId){
        //checking the types of parameters
        check(message,String);
        check(conversationId, String);

        //getting Conversation details
        let convo = conversations.find({_id : conversationId, status : true}).fetch();
        let partner = "";
        if(convo[0].userId1 == Meteor.userId()){
            partner = convo[0].userId2;
        } else {
            partner = convo[0].userId1;
        }

        //Inserting message in collection
        messages.insert ({
            conversationId : conversationId,
            sender : Meteor.userId(),
            receiver : partner,
            sendTime : Date.now(),
            message : message
        })
               
	},
})