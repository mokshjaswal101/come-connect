import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { withTracker } from "meteor/react-meteor-data";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//components
import Sidenav from "./components/sidenav";
import Login from "./views/login";
import SidenavContainer from './components/sidenav';

export default class App extends Component{

  containerInfo = React.createRef();

  closeInfoModal(){
    document.getElementById('infoModalContainer').style.display = 'none';
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
    if (this.containerInfo.current && !this.containerInfo.current.contains(event.target)) {
      document.getElementById('infoModalContainer').style.display = "none";
    }
};



  render(){

    if(!Meteor.userId()){
      return (
        <div className = "background">
          <Login />
        </div>
      )
    }
    
    else {
      return(
        <div className="background">
          <div className="main">
            <SidenavContainer />
          </div>

          <div className = "infoModalContainer" id="infoModalContainer">
            <div className = "infoModal" ref ={this.containerInfo}>
              <h2 className = "info" id="info">Waitlisted! You will be paired when a new person is available</h2>
              <div className = "close">
                <FontAwesomeIcon onClick={() => this.closeInfoModal()} className="closeIcon" icon = {faTimes}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

}

//Realtime Login Check
const AppContainer = withTracker( () => {

  const loginUser = Meteor.subscribe("loginUser");
  
  return {
		loginUser : Meteor.users.find({_id : Meteor.userId()}).fetch()
	};

})(App);

Meteor.startup(() => {
  render(<AppContainer/>, document.getElementById('container'));
});
