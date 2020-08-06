import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//components
import Sidenav from "./components/sidenav"

export default class App extends Component{

  render(){
    return(
      <div className="background">
        <div className="main">
          <Sidenav />
        </div>
      </div>
    )
    
  }

}

Meteor.startup(() => {
  render(<App/>, document.getElementById('container'));
});
