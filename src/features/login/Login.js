import React, { useState } from "react";
import './Login.scss';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import { useHistory } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !email.includes("@") || !password) {
            return;
        } 
        history.push('/weather');
        dispatch(login({
            email: email,
            password: password,
            loggedIn: true
        }));

        
    }
    return (
        <div className="main-login">
          <h1>Welcome! Please login</h1>
          <div className="login-container">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <label for="email1">Email</label>  
                <input placeholder="Enter your email" type="email" id="email1" value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                <label for="pwd1">Password</label>
                <input placeholder="Enter your password" type="password" id="pwd1" value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" id="submitButton">Submit</button>
              </form>    

              <div className="signup-link">
                <h4>Forgotten Password ? <Link className='link' to='/resetpwd'>Reset Now</Link></h4>
              </div>
            </div>
          </div>  
          {/* <Link to={'/weather'}>
            <button>
                Weather Page
            </button>
          </Link> */}
          

        </div>
    )
}

export default Login;