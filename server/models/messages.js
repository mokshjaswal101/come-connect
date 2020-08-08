import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const messages = new Mongo.Collection("messages");

messages.schema = new Schema({

    conversation : {
        type : String,
    },

    sender : {
        type : String,
    },

    receiver : {
        type : String,
    }
    
})

messages.attachSchema(messages.schema);

export default messages;