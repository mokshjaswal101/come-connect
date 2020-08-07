import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//importing Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import SASS
import "./login.scss";

class Login extends Component {

    //Toggle the input form
    loginDisplay(){
        document.querySelector('.registerBtn').classList.remove('activeBtn');
        document.querySelector('.loginBtn').classList.add('activeBtn');
    }

    //Toggle The Resgister form
    registerDisplay() {
        document.querySelector('.loginBtn').classList.remove('activeBtn');
        document.querySelector('.registerBtn').classList.add('activeBtn');
    }

    render() {
        return(
            <div className = "login">
               <h1 className = "loginLogo">ComeConnect</h1>
               <div>
                   <h2 className="btn loginBtn activeBtn" onClick = {() => this.loginDisplay()}>Login</h2>
                   <h2 className="btn registerBtn" onClick = {() => this.registerDisplay()}>SignUp</h2>
               </div>
               <div className = "formContainer">
                    <form className ="loginForm show">
                        <input placeholder = "Name" id="loginName"></input>
                        <input placeholder = "password" type="password" id="loginPassword"></input>
                        <button className = "submit">Login</button>
                    </form>
                    <form className ="registerForm hide">
                        <input placeholder = "Name" id="registerName"></input>
                        <input placeholder = "password" type="password" id="registerPassword"></input>
                        <button className = "submit">Register</button>
                    </form>
               </div>
            </div>
        )
    }
}

export default Login;