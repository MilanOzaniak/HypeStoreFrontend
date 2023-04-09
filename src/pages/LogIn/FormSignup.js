import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import ReCAPTCHA from 'react-google-recaptcha';


const FormSignup = () => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const url = localStorage.getItem("url");

  const nameChangeHandler = event => {
      setUserName(event.target.value)
      console.log(username)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };

  function handleLogIn (){
      const user={username, password};

      
      axios.post(url + "/auth", user).then((response)=>{
        const token = response.data.token;
        console.log(response.data);
        localStorage.setItem("token", token);
        localStorage.setItem("userName", username);
      }).then(() =>{
        window.location.reload(false);
      })
      
  
  };
  const onChange =() => {};



  return (
    <div className='form-content'>
      <div className='formL'>
        <h2>LOGIN</h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange={nameChangeHandler}
          />

        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <ReCAPTCHA className='captcha' sitekey='Your client site key' onChange={onChange}/>
        <Link to='/' className='form-input-btn1' onClick={handleLogIn} >  
          Log in
        </Link>
        <span className='form-input-login'>
            You don´t have an account ? Register  
              <a href='/Register'> here.</a>
        </span>
      </div>
    </div>
  );
};

export default FormSignup;