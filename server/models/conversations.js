import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const conversations = new Mongo.Collection("conversations");

conversations.schema = new Schema({

    user1 : {
        type : String,
    },

    user2 : {
        type : String,
    },

    status : {
        type : Boolean,
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