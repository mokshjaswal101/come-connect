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

    constructor(props) {
        super(props);

        this.state = {
            active : "",
        }
    }

    //Add a new Conversation
    addConversation() {
        //calling method to add conversation
        Meteor.call('addConversation',function(error, result) {
            //displaying result of method call
            document.querySelector('.chatItem').innerText = result;
        });
    };

    //change conversation styles and convo active state
    convoChange(convoId) {
        this.setState({
            active : convoId,
        });
    }


    //logout
    logout() {
        Meteor.logout();
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
                        
                        {
                            this.props.loading ? null : 
                            this.props.activeConversations.map((element) => {
                                if(element.userId1 == Meteor.userId()){
                                    return <div key={element.userId2} onClick={() => this.convoChange(element._id)} className = "chatItem">{element.name2}</div>
                                }
                                else {
                                    return <div key={element.userId1} onClick={() => this.convoChange(element._id)} className = "chatItem">{element.name1}</div>
                                }    
                            })
                        }

                        <div onClick = {() => this.addConversation()} className = "addChat"><FontAwesomeIcon className="addChatIcon" icon = {faPlus}></FontAwesomeIcon></div>

                    </div>

                    <div className="logoutContainer">
                        <div onClick = {() => this.logout()} className = "logout">
                            <FontAwesomeIcon className="logoutIcon" icon = {faSignOutAlt}></FontAwesomeIcon>
                        </div>
                    </div>
                    

                </div>

                <ChatArea conversationId = {this.state.active}/>

            </div>
        )
    }
}

const SidenavContainer = withTracker( () => {

    const activeConversations = Meteor.subscribe("userConversations");
    const loading = activeConversations.ready() ? false : true;
    
    return {
        loading,
        activeConversations :loading || conversations.find({ $or : [ { userId1 : Meteor.userId() }, {userId2 : Meteor.userId()}], status : true }).fetch(),
      };
  
  })(Sidenav);

export default SidenavContainer;