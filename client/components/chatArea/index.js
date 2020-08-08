import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//components
import ChatHeader from "../chatHeader";
import ChatDisplay from "../chatDisplay";
import ChatFooter from "../chatFooter";

//import SASS
import "./chatArea.scss";
import ChatHeaderContainer from "../chatHeader";

class ChatArea extends Component {

    
    render() {
        return(
            <div className = "chatArea">
                <ChatHeaderContainer conversationId = {this.props.conversationId} />
                <ChatDisplay conversationId = {this.props.conversationId} />
                <ChatFooter conversationId = {this.props.conversationId} />
            </div>
        )
    }
}

export default ChatArea;