import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import messages from "../../models/messages";

//import SASS
import "./chatDisplay.scss";

class ChatDisplay extends Component {

    //Scroll the messages to bottom
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }
    
    //scroll to bottom when the component mounts
    componentDidMount() {
    this.scrollToBottom();
    }
    
    //scroll to bottom whenever component updatess
    componentDidUpdate() {
    this.scrollToBottom();
    }

    render() {
        return(
            <div className = "chatDisplay" id="chatDisplay" ref={(node) => { this.node = node; }}>

                {
                    this.props.loading ? null :                     
                    this.props.convoMessages.map ((el,index,array) => {
                        if(el.sender == Meteor.userId()){
                            if(index!= 0 && array[index - 1 ].sender == Meteor.userId() ){
                                return( 
                                    <div key={el._id} className = "messageContainer">
                                        <div className = "message you marginSmall">
                                            {el.message}
                                        </div>
                                    </div>
                                )
                            } else {
                                return( 
                                    <div key={el._id} className = "messageContainer">
                                        <div className = "message you marginBig">
                                            {el.message}
                                        </div>
                                    </div>
                                )
                            }
                            
                        } else {
                            if(index!=0 && array[index - 1 ].sender != Meteor.userId()){
                                return( 
                                    <div key={el._id} className = "messageContainer">
                                        <div className = "message partner marginSmall">
                                            {el.message}
                                        </div>
                                    </div>
                                )
                            } else {
                                return( 
                                    <div key={el._id} className = "messageContainer">
                                        <div className = "message partner marginBig">
                                            {el.message}
                                        </div>
                                    </div>
                                )
                            } 
                        }
                    })
                   
                }
                 <div className="messageEnd" style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                    </div>
            </div>
        )
    }
}

const ChatDisplayContainer = withTracker( (props) => {

    const convoMessages = props.conversationId = "" ? null : Meteor.subscribe('getMessages',props.conversationId);
    const loading = convoMessages.ready() ? false : true;
    
    return {
        loading,
        convoMessages : loading || messages.find({conversationId : props.conversationId}).fetch(),
       
      };
  
  })(ChatDisplay);

export default ChatDisplayContainer;