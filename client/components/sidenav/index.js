import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//components
import ChatArea from "../chatArea";

//import SASS
import "./sidenav.scss";

class Sidenav extends Component {
    render() {
        return(
            <div className = "cover">

                <div className = "sidenav">

                   <div className = "titleContainer">
                       <h1 className = "title">ComeConnect</h1>
                    </div>

                    <div className = "chatList">

                        <div className = "chatItem active">Moksh Jaswal</div>
                        <div className = "chatItem">King Jaswal</div>

                        <div className = "addChat"><FontAwesomeIcon className="addChatIcon" icon = {faPlus}></FontAwesomeIcon></div>

                    </div>

                    <div className="logoutContainer">
                        <div className = "logout">
                            <FontAwesomeIcon className="logoutIcon" icon = {faSignOutAlt}></FontAwesomeIcon>
                        </div>
                    </div>
                    

                </div>

                <ChatArea />

            </div>
        )
    }
}

export default Sidenav;