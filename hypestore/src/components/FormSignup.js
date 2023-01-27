import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const FormSignup = () => {
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')

  const nameChangeHandler = event => {
      setUserName(event.target.value)
      console.log(username)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };

  const handleLogIn = e =>{
      e.preventDefault();
      const user={username, password}
      
      axios.post("http://localhost:8080/auth", user).then((response)=>{
        const token = response.data.token;
        localStorage.setItem("token", token);
      })
  
  };


  return (
    <div className='form-content'>
      <form onSubmit={handleLogIn} className='form' noValidate>
        <h1>
          LOGIN
        </h1>
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
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          You dont have an account? Register <a href='/Register'>here.</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;