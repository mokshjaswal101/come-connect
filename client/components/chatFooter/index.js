import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import conversations from "../../models/conversations";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./chatFooter.scss";

class ChatFooter extends Component {

    constructor(props) {
        super(props);
    }

    //Send messsage
    sendMessage(event){
        //prevent default reload
        event.preventDefault();

        //Calling method for sending message
        let message = event.target.messageInput.value; 

        if(message != "" && this.props.conversationId != ""){
            Meteor.call('sendMessage',message,this.props.conversationId);
            //clearing field after sending message
            document.getElementById('messageInput').value = "";
        } else {
            console.log("error");
        }
    }

    render() {
        return(
            <div className = "chatFooter">
                <form onSubmit = {() => this.sendMessage(event)} className = "messageForm">
                    <input className = "messageInput" placeholder="Type your message here" id="messageInput"></input>
                    <div className = "messageSend">
                        <button  className = "messageSendBackground">
                            <FontAwesomeIcon className = "messageSendIcon" icon={faPaperPlane}></FontAwesomeIcon>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ChatFooter;