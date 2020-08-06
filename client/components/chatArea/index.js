import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//components
import ChatHeader from "../chatHeader";
import ChatDisplay from "../chatDisplay";
import ChatFooter from "../chatFooter";

//import SASS
import "./chatArea.scss";

class ChatArea extends Component {
    render() {
        return(
            <div className = "chatArea">
                <ChatHeader />
                <ChatDisplay />
                <ChatFooter />
            </div>
        )
    }
}

export default ChatArea;