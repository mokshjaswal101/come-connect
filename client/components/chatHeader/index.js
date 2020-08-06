import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./chatHeader.scss";

class ChatHeader extends Component {
    render() {
        return(
            <div className = "chatHeader">
                <h1 className = "heading">Friend</h1>
                <div className="settings"><FontAwesomeIcon className=" settingsIcon" icon={faCog}/></div>
            </div>
        )
    }
}

export default ChatHeader;