import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const conversations = new Mongo.Collection("conversations");

conversations.schema = new Schema({

    userId1 : {
        type : String,
    },

    userId2 : {
        type : String,
    },

    name1 : {
        type : String,
    },

    name2 : {
        type : String,
    },

    status : {
        type : Boolean,
        defaultValue : true,
    },

    startDate : {
        type : Date,
        defaultValue : new Date(),
    },

    endDate : {
        type : Date,
        defaultValue : new Date(),
    }
    
})

conversations.attachSchema(conversations.schema);

export default conversations;