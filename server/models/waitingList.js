import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const waitingList = new Mongo.Collection("waitingList");

waitingList.schema = new Schema({

    userId : {
        type : String,
    },

    name : {
        type : String,
    },

    status : {
        type : Boolean,
        defaultValue : true,
    },
    
    time : {
        type : Date,
        defaultValue : new Date(),
    }

})

waitingList.attachSchema(waitingList.schema);

export default waitingList;