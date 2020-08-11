import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//import SASS
import "./modals.scss";

class Modals extends Component {

    containerInfo = React.createRef();
    containerLogout = React.createRef();
    containerConvo = React.createRef();

    //Close Info modal on button click
    closeInfoModal(){
      document.getElementById('infoModalContainer').style.display = 'none';
    }

    //Close logout modal on button click
    closeLogoutModal(){
      document.getElementById('logoutModalContainer').style.display = 'none';
    }
    
    //Close end Cono modal on button click
    closeConvoModal(){
      document.getElementById('convoModalContainer').style.display = 'none';
    }

    //logout 
    logout() {
      Meteor.logout();
    } 

    endConversation(){
      if(this.props.convoId != ""){
        //Calling method to end conversation
        Meteor.call('endConversation',this.props.convoId);
        this.closeConvoModal();
        this.props.convoEnded('ended');
      } else {
          console.log('error');
      }
    }
     
  
    //Add event listener when component mounts
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
  
    //Remove event listener when component unmounts
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
  
    //Close modal on outside click
    handleClickOutside = event => {
      //for info modal
      if (this.containerInfo.current && !this.containerInfo.current.contains(event.target)) {
        document.getElementById('infoModalContainer').style.display = "none";
      }

      //for logout modal
      if (this.containerLogout.current && !this.containerLogout.current.contains(event.target)) {
        document.getElementById('logoutModalContainer').style.display = "none";
      }

      //for end conversation modal
      if (this.containerConvo.current && !this.containerConvo.current.contains(event.target)) {
        document.getElementById('convoModalContainer').style.display = "none";
      }
  };
  
    render() {
        return(

          <div className = "modalParent">

              {/* Info Modal */}
              <div className = "infoModalContainer" id="infoModalContainer">
                <div className = "infoModal"  ref ={this.containerInfo} >
                  <div className = "infoModalInner">
                    <h2 className = "info" id="info"></h2>
                    <div className = "close">
                      <FontAwesomeIcon onClick={() => this.closeInfoModal()} className="closeIcon" icon = {faTimes}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logout Modal */}
              <div className = "logoutModalContainer" id="logoutModalContainer" >
                <div className = "logoutModal" ref ={this.containerLogout} >
                  <div className = "logoutModalInner" >
                    <div className="logoutInfo">
                      <h2 className = "logoutHeading">Are You sure you want to logout ?</h2>
                      <div className="buttonContainer">
                        <button onClick = {() => this.logout()}>Yes</button>
                        <button onClick = {() => this.closeLogoutModal()}>No</button>
                      </div>
                    </div>
                    <div className = "close">
                        <FontAwesomeIcon onClick={() => this.closeLogoutModal()} className="closeIcon" icon = {faTimes}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Conversation Modal */}
              <div className = "convoModalContainer" id="convoModalContainer" >
                <div className = "convoModal" ref ={this.containerConvo} >
                  <div className = "convoModalInner" >
                    <div className="convoInfo">
                      <h2 className = "convoHeading">Are You sure you want to End Conversation? <br></br> You may not connect with this person again</h2>
                      <div className="buttonContainer">
                        <button onClick = {() => this.endConversation()}>Yes</button>
                        <button onClick = {() => this.closeConvoModal()}>No</button>
                      </div>
                    </div>
                    <div className = "close">
                        <FontAwesomeIcon onClick={() => this.closeConvoModal()} className="closeIcon" icon = {faTimes}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        )
    }
}


export default Modals;