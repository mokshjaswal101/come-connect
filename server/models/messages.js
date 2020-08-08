import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const messages = new Mongo.Collection("messages");

messages.schema = new Schema({

    conversationId : {
        type : String,
    },

    message : {
        type : String,
    },

    sender : {
        type : String,
    },

    receiver : {
        type : String,
    },

    sendTime : {
        type : String,
    }
    
})

messages.attachSchema(messages.schema);

export default messages;