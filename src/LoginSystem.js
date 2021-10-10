import React from "react";
import './LoginSystem.css';
import logo from "./logo.png";

const LoginSystem = () =>{

    return(
        <div id="loginContainer">
            <div id="banner">
                <img id ="logo" src={logo}/>
                <h1 id="welcomeMessage">Welcome Back!</h1>
               
                <form method="POST">
                    <input className="inputLayout" autoComplete="off" type="text" placeholder="Username" required/>
                    <input className="inputLayout" autoComplete="off" type="password" placeholder="Password" required/>
                    <button className="buttonLayout" id="submit" type="submit">Login</button>
                    <button className="buttonLayout" id="forgotPassword" type="button">Forgot Password?</button>
                </form>
  
            </div>
            
        </div>

        )
}

export default LoginSystem;