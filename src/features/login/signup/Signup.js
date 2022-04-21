import React from "react";
import './Signup.scss';
 import { Link } from "react-router-dom";

function Signup() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="main-signup">
          {/* <h1>Welcome! Please Sign </h1> */}
          
            <div className="top">
                <p>Already have an Account?
                    <Link id='Links-signin' to='/'>Sign In</Link>   
                </p> 
            </div>
            <div className="content-body">
                <div className="signup-section">
                    <h1>Create Account!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <h5> First Name</h5>
                            <input type="text" name="Fname"  id="fname" />
                        </div>
                        <div className="input-group">
                            <h5> Last Name</h5>
                            <input type="text" name="lname"  id="lname" />
                        </div>
                        <div className="input-group">
                            <h5> Email</h5>
                            <input type="Email" name="email"  id="email1" />
                        </div>
                        <div className="input-group">
                            <h5> Password</h5>
                            <input type="password"   name="pwd" id="pwd1" />
                        </div>
                        <div className="input-group">
                            <h5> Confirm Password</h5>
                            <input type="password"  id="pwd2" />
                        </div>
                            <input type="submit" id='subtn' value="Submit" />
                    </form>
                </div>
            </div>
            
          
          

        </div>
    )
}

export default Signup;