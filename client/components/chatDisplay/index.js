import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";



//import SASS
import "./chatDisplay.scss";

class ChatDisplay extends Component {
    render() {
        return(
            <div className = "chatDisplay">

                <div className = "messageContainer">
                    <div className = "message you">
                        My name is Moksh Hello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is Moksh
                    </div>
                </div>

                <div className = "messageContainer">
                    <div className = "message partner">
                        My name is Moksh Hello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is MokshHello, My name is Moksh
                    </div>
                </div>

            </div>
        )
    }
}

export default ChatDisplay;