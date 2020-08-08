import { Mongo } from "meteor/mongo";

const messages = new Mongo.Collection("messages");

export default messages;