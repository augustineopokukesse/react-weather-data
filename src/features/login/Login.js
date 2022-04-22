import React, { useState } from "react";
import './Login.scss';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import { login } from "./userSlice";
import { useHistory } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();
    const userData = useSelector(selectUser);
    console.log(userData);

    console.log(userData[1].email);
    let emailData = [];
    let pwData = [];

    for (let data=0; data < userData.length; data++) {
      emailData = [...emailData, userData[data].email];
      pwData = [...pwData, userData[data].password];
    }
    console.log(emailData);
    console.log(userData[1]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !email.includes("@") || !password) {
          return;
        }
        if (emailData.includes(email) && pwData.includes(password)) {
          return history.push('/weather');
        } 
        if(emailData.includes(email) && !pwData.includes(password)) {
          return alert("Wrong Password");
        }
        if(!emailData.includes(email) && pwData.includes(password)) {
          return alert("Wrong Email");
        }
        if (!emailData.includes(email) !== email && !pwData.includes(password)) {
          history.push('/weather');
          dispatch(login({
          email: email,
          password: password
          }));
        }
          // console.log(data)
        
        setEmail("");
        setPassword("");
        // console.log(userData);  
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