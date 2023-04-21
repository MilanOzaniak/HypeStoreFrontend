import React from 'react';
import { useState, useEffect } from 'react';
import './Register.css'
import axios from 'axios';
import validateInfo from '../../data/validateInfo';
import { Link, useHistory} from 'react-router-dom';

const FormSignup = () => {

  const history = useHistory();
  const[userName, setUserName] = useState('')
  const[email, setEmail] = useState('')
  const[pnumber, setPnumber] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const[user, setUser] = useState([])
  const url = process.env.REACT_APP_API_URL;
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    pNumber: '',
    password: '',
    password2: '',
  });

  const nameChangeHandler = event => {
    setUserName(event.target.value)
  };
  const emailChangeHandler = event => {
    setEmail(event.target.value)
  };

  const pNumberChangeHandler = event => {
    setPnumber(event.target.value)

  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  };

  const passwordChangeHandler2 = event => {
    setPassword2(event.target.value)
  };

  function handleSubmit() {
    const user={userName, email, pnumber, password, password2}
    const {valid, error} = validateInfo(userName, email, pnumber, password, password2)
    setErrors(error)
    if(valid){
      axios.post(url + "/register", user);
      history.push("/HypeStoreFrontend/login")
    }

  };
  return (
    <div className='form-contentR'>
      <form onSubmit={handleSubmit} className='formR' noValidate>
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

        <div className='form-input-btnregister' type='submit' onClick={handleSubmit}>
          Register
        </div>

        <span className='form-input-login'>
          Already have an account? Login <Link to='/HypeStoreFrontend/login'>here.</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;