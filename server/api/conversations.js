import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

//import collections
import conversations from "../models/conversations";
import waitingList from "../models/waitingList";

Meteor.publish("userConversations", function(){
    
    return conversations.find({
        $or : [
            {user1 : Meteor.userId()},
            {user2 : Meteor.userId()}
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
                {user1 : Meteor.userId()},
                {user2 : Meteor.userId()}
            ], 
            status : true,
        }).fetch();

        if(existingConvo.length >= 5) {
            return "Maximum Number of conversations reached";
        }
        else {
            //Checking if partner available
            let waitlistCheck = waitingList.find({
                user : { $ne : Meteor.userId() }
            }).fetch();

            if( waitlistCheck.length > 0 ) {
                
                let partnerId = waitlistCheck[0].user;

                //removing partner from waiting list
                waitingList.update({
                    _id : partnerId,
                },{
                    $set : {
                        status : false,
                    }
                })

                //Insert new conversation
                conversations.insert({
                    user1 : Meteor.userId(),
                    user2 : partnerId,
                    startDate : Date.now(),
                })

                return "New Conversation added";

            } else {
                //check if already present in waiting List
                let waitListAddCheck = waitingList.find({ user : Meteor.userId(), status : true }).fetch();
                
                console.log(waitListAddCheck);

                if(waitListAddCheck.length > 0) {
                    return "Already Waitlisted!";
                } else {

                    //Add to waitlist
                    waitingList.insert({
                        user : Meteor.userId(),
                        time : Date.now()
                    })

                    return "Added to Waiting List"
                }

            }
        }
        
	},
})