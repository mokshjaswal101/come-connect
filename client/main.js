import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { withTracker } from "meteor/react-meteor-data";


//components
import Sidenav from "./components/sidenav";
import Login from "./views/login";
import SidenavContainer from './components/sidenav';

export default class App extends Component{

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