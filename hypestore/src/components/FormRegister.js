import React from 'react';
import validate from '../data/validateInfo';
import useForm from './useForm';
import '../App.css';

const FormSignup = ({ submitForm }) => {
  const { handleSubmit, userName, email, pnumber, password, password2, errors, nameChangeHandler, emailChangeHandler,pNumberChangeHandler, passwordChangeHandler, passwordChangeHandler2 } = useForm(
    submitForm,
    validate
  );



  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        REGISTER
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>User Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={userName}
            onChange={nameChangeHandler}
          />
          {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={emailChangeHandler}

          />
          
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='pNumber'
            name='pNumber'
            placeholder='Enter your phone number'
            value={pnumber}
            onChange={pNumberChangeHandler}

          />
          
          {errors.pNumber && <p>{errors.pNumber}</p>}
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
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={password2}
            onChange={passwordChangeHandler2}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className='form-input-btn' type='submit' onClick={handleSubmit}>
          Register
        </button>

        <span className='form-input-login'>
          Already have an account? Login <a href='/Signup'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;