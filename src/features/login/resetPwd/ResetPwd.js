import React, {useState} from "react";
import './resetPwd.scss';
import { Link } from "react-router-dom";

function ResetPwd() {
    const [email, setEmail] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [pwd2, setPwd2] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="main-signup">
          {/* <h1>Welcome! Please Sign </h1> */}
          
            <div className="top">
                <p>Back to
                    <Link id='Links-signin' to='/'>Sign In</Link>   
                </p> 
            </div>
            <div className="content-body">
                <div className="signup-section">
                    <h1>Reset Password</h1>
                    <form onSubmit={handleSubmit}>
                        {/* <div className="input-group">
                            <h5> First Name</h5>
                            <input type="text" name="Fname"  id="fname" value={firstname}
                            onChange={e => setFirstname(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <h5> Last Name</h5>
                            <input type="text" name="lname" id="lname" value={lastname}
                            onChange={e => setLastname(e.target.value)}/>
                        </div> */}
                        <div className="input-group">
                            <h5> Email</h5>
                            <input type="Email" name="email"  id="email1" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <h5> New Password</h5>
                            <input type="password" name="pwd" id="pwd1" value={pwd1}
                            onChange={e => setPwd1(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <h5> Confirm  New Password</h5>
                            <input type="password"  id="pwd2" value={pwd2}
                            onChange={e => setPwd2(e.target.value)}/>
                        </div>
                            <input type="submit" id='subtn' value="Submit" />
                    </form>
                </div>
            </div>
            
          
          

        </div>
    )
}

export default ResetPwd;