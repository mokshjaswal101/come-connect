import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./chatFooter.scss";

class ChatFooter extends Component {
    render() {
        return(
            <div className = "chatFooter">
                <input className = "messageInput" placeholder="Type your message here"></input>
                <div className = "messageSend">
                    <div className = "messageSendBackground">
                        <FontAwesomeIcon className = "messageSendIcon" icon={faPaperPlane}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatFooter;