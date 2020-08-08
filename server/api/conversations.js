import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

//import collections
import conversations from "../models/conversations";
import waitingList from "../models/waitingList";

Meteor.publish("userConversations", function(){
    
    return conversations.find({
        $or : [
            {userId1 : Meteor.userId()},
            {userId2 : Meteor.userId()}
        ],
        status : true,
    });

});


Meteor.methods({

    // Method to add Conversation
	'addConversation'(){

        //finding number of active conversations
        let existingConvo = conversations.find({
            $or : [
                {userId1 : Meteor.userId()},
                {userId2 : Meteor.userId()}
            ], 
            status : true,
        }).fetch();

        if(existingConvo.length >= 5) {
            return "Maximum Number of conversations reached";
        }
        else {
            //Checking if partner available
            let waitlistCheck = waitingList.find({
                userId : { $ne : Meteor.userId() },
                status : true,
            }).fetch();

            if( waitlistCheck.length > 0 ) {
                
                let partnerId = waitlistCheck[0].userId;
                let partnerName = waitlistCheck[0].name;

                //removing partner from waiting list
                waitingList.update({
                    userId : partnerId,
                    status : true,
                },{
                    $set : {
                        status : false,
                    }
                })

                //Insert new conversation
                conversations.insert({
                    userId1 : Meteor.userId(),
                    userId2 : partnerId,
                    name1 : Meteor.user().username,
                    name2 : partnerName,
                    startDate : Date.now(),
                })

                return "New Conversation added";

            } else {
                //check if already present in waiting List
                let waitListAddCheck = waitingList.find({ userId : Meteor.userId(), status : true }).fetch();
                
                if(waitListAddCheck.length > 0) {
                    return "Already Waitlisted!";
                } else {

                    //Add to waitlist
                    waitingList.insert({
                        userId : Meteor.userId(),
                        name : Meteor.user().username,
                        time : Date.now()
                    })

                    return "Added to Waiting List"
                }

            }
        }
        
	},
})