import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//components
import ChatArea from "../chatArea";

//import SASS
import "./sidenav.scss";

class Sidenav extends Component {
    render() {
        return(
            <div className = "cover">

                <div className = "sidenav">

                </div>
                <div className = "chat">

                </div>

                <ChatArea />

            </div>
        )
    }
}

export default Sidenav;