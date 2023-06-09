import axios from 'axios';
import React, { useRef } from 'react'
import './register.css';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords should have the same value!");
          }
        else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            try{
                await axios.post("/auth/register", user);
                navigate("/login")
            } catch(err){
                console.log(err)
            }
        }
    };

    const loginClick = () => {
        navigate("/login")
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
                    <input type="text" className="loginInput" required ref={username} placeholder='Username'/>
                    <input type="email" className="loginInput" required ref={email}  placeholder='Email'/>
                    <input type="password" className="loginInput" required ref={password} minLength="6" placeholder='Password'/>
                    <input type="text" className="loginInput" required ref={passwordAgain} placeholder='Confirm Password'/>
                    <button className="loginButton" type='submit'>Sign Up</button>
                    <button className="loginRegisterButton" onClick={loginClick}>
                        login into Account
                    </button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Register
