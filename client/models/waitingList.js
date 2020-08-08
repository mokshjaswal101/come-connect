import { Mongo } from "meteor/mongo";

const waitingList = new Mongo.Collection("waitingList");

export default waitingList;