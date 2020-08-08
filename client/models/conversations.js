import { Mongo } from "meteor/mongo";

const conversations = new Mongo.Collection("conversations");

export default conversations;