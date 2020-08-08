import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

//Accessing current login user
Meteor.publish("loginUser", function(){
    
    return Meteor.users.find({ _id : Meteor.userId() });

});