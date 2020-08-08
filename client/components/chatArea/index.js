import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//components
import ChatDisplayContainer from "../chatDisplay";
import ChatHeaderContainer from "../chatHeader";
import ChatFooter from "../chatFooter";

//import SASS
import "./chatArea.scss";

class ChatArea extends Component {

    
    render() {
        return(
            <div className = "chatArea">
                <ChatHeaderContainer conversationId = {this.props.conversationId} />
                <ChatDisplayContainer conversationId = {this.props.conversationId} />
                <ChatFooter conversationId = {this.props.conversationId} />
            </div>
        )
    }
}

export default ChatArea;