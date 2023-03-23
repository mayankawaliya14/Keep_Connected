import React, { useContext, useRef } from 'react'
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';

// import { CircularProgress } from '@mui/material';

const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
     // eslint-disable-next-line 
    const {user, isFecthing, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch);
    };
    console.log(user);
    
    const RegisterClick = () => {
        navigate("/register")
    }

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">KeepConnected</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on KeepConnected.
                </span>
            </div>
            <div className='loginRight'>
                <form className="loginBox" onSubmit={handleClick}>
                    <input type="email" className="loginInput" placeholder='Email' ref={email} required/>
                    <input type="password" className="loginInput" placeholder='Password' ref={password} required minLength="6"/>
                    <button className="loginButton" type='submit' disabled={isFecthing}>{isFecthing ? "Loading" :"Log In"}</button>
                    {/* <input type="submit" value="Log In" className="loginButton"/> */}
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton" onClick={RegisterClick}>
                    {isFecthing ? "Loading" :"Create a New Account"}
                    </button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
