import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//import collections
import messages from "../../models/messages";

//import SASS
import "./chatDisplay.scss";

class ChatDisplay extends Component {

    render() {
        return(
            <div className = "chatDisplay">

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