import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import conversations from "../../models/conversations";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//importing components
import ChatArea from "../chatArea";

//import SASS
import "./sidenav.scss";

class Sidenav extends Component {

    //Add a new Conversation
    addConversation() {
        //calling method to add conversation
        Meteor.call('addConversation',function(error, result) {
            //displaying result of method call
            document.getElementById("info").innerText = result;
        });
    }

    render() {
        return(
            <div className = "cover">

                <div className = "sidenav">

                   <div className = "titleContainer">
                       <h1 className = "title">ComeConnect</h1>
                    </div>

                    <div className="info" id ="info"></div>

                    <div className = "chatList">

                        <div className = "chatItem active">Moksh Jaswal</div>

                        <div onClick = {() => this.addConversation()} className = "addChat"><FontAwesomeIcon className="addChatIcon" icon = {faPlus}></FontAwesomeIcon></div>

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

const SidenavContainer = withTracker( () => {

    const activeConversations = Meteor.subscribe("userConversations");
    const loading = activeConversations.ready() ? false : true;
    
    return {
        loading,
        activeConversations :loading || conversations.find({ $or : [ { user1 : Meteor.userId() }, {user2 : Meteor.userId()}] }).fetch(),
      };
  
  })(Sidenav);

export default SidenavContainer;