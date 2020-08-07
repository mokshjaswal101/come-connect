import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


//components
import Sidenav from "./components/sidenav";
import Login from "./views/login";

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
            <Sidenav />
          </div>
        </div>
      )
    }
  }

}

Meteor.startup(() => {
  render(<App/>, document.getElementById('container'));
});
