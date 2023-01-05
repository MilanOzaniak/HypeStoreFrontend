import React from 'react';
import '../App.css';
import LoginForm from './LoginForm';

const FormSignup = () => {
  const { handleLogIn, nameChangeHandler, passwordChangeHandler, username, password } = LoginForm();

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