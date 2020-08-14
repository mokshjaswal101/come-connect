import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import conversations from "../../models/conversations";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./chatHeader.scss";

class ChatHeader extends Component {

    container = React.createRef();

    //toggle the remove conversation optoin
    dropdownToggle(){
        document.getElementById('dropdown').classList.toggle('show');
 
    }

    //Add event listener when component mounts
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    //Remove event listener when component unmounts
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    //Handle outside click
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          document.getElementById('dropdown').classList.remove('show');
        }
    };

    //Open End Conversation Modal
    endConversation() {
        document.getElementById('convoModalContainer').style.display = "block";
    }

    sidenavToggle() {
        document.getElementById('sidenav').classList.toggle('menuOpen');
    }

    render() {

        return(
            <div className = "chatHeader">
                <div className="sidebarToggleContainer">
                    <FontAwesomeIcon onClick={() => this.sidenavToggle()} className="sidebarToggle" id="sidebarToggle" icon={faBars}/> 
                </div>
                
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
                <div className="settings" ref ={this.container}>
                    <FontAwesomeIcon onClick={() => this.dropdownToggle()} className="settingsIcon" id="settingsIcon" icon={faCog}/>
                    <div className = "dropdown" id="dropdown" onClick = {() => this.endConversation()}>End Conversation</div>
                </div>
                
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