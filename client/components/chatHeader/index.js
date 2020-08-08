import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import conversations from "../../models/conversations";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./chatHeader.scss";

class ChatHeader extends Component {
    render() {

        return(
            <div className = "chatHeader">
                <h1 className = "heading">
                    {
                        this.props.activeConversation.length == 0 ? null :
                        this.props.activeConversation.map ((element) => {
                            if(element.userId1 == Meteor.userId()){
                                return element.name2;
                            } else {
                                return element.name1;
                            }
                        })
                    }
                </h1>
                <div className="settings"><FontAwesomeIcon className=" settingsIcon" icon={faCog}/></div>
                
            </div>
        )
    }
}

const ChatHeaderContainer = withTracker( (props) => {
    return {
        activeConversation: conversations.find({_id : props.conversationId , status : true}).fetch(),
      };
  
  })(ChatHeader);

export default ChatHeaderContainer;