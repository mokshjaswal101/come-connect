import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

//importing collections
import { Accounts } from "meteor/accounts-base";

//import SASS
import "./login.scss";

class Login extends Component {

    //Toggle the input form
    loginDisplay() {

        //changing heading styles
        document.querySelector('.registerBtn').classList.remove('activeBtn');
        document.querySelector('.loginBtn').classList.add('activeBtn');

        //changing Forms
        document.getElementById('registerForm').style.display = "none";
        document.getElementById('loginForm').style.display = "flex";
    };

    //Toggle The Resgister form
    registerDisplay() {

        //changing heading styles
        document.querySelector('.loginBtn').classList.remove('activeBtn');
        document.querySelector('.registerBtn').classList.add('activeBtn');

        //changing Forms
        document.getElementById('registerForm').style.display = "flex";
        document.getElementById('loginForm').style.display = "none";
    };

    createUser(event) {
        //prevent default reload of page
        event.preventDefault();

        //getting form values
        let name = event.target.registerName.value;
        let password = event.target.registerPassword.value;

        //Creating Client side user if password > 8 characters
        if(password.length < 8) {
            alert('password must be atleast 8 characters long');
        } else {
            Accounts.createUser({
                username : name,
                password : password
            });
            console.log('he');
        }

        //Clearing the input fields
        document.querySelector('#registerName').value ="";
        document.querySelector('#registerPassword').value ="";
    };

    loginUser(event) {
        //prevent default reload of page
        event.preventDefault();

        //getting form values
        let name = event.target.loginName.value;
        let password = event.target.loginPassword.value;

        //Logging in 
        Meteor.loginWithPassword(name,password);

        //Clearing the input fields
        document.querySelector('#loginName').value ="";
        document.querySelector('#loginPassword').value ="";
    };

    render() {
        return(
            <div className = "login">
               <h1 className = "loginLogo">ComeConnect</h1>
               <div>
                   <h2 className="btn loginBtn activeBtn" onClick = {() => this.loginDisplay()}>Login</h2>
                   <h2 className="btn registerBtn" onClick = {() => this.registerDisplay()}>SignUp</h2>
               </div>
               <div className = "formContainer">

                    <form onSubmit={() => this.loginUser(event)} className ="loginForm" id="loginForm">
                        <input placeholder = "Name" id="loginName"></input>
                        <input placeholder = "password" type="password" id="loginPassword"></input>
                        <button className = "submit">Login</button>
                    </form>

                    <form onSubmit={() => this.createUser(event)} className ="registerForm" id="registerForm">
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