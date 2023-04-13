import React from 'react';
import { useState, useRef  } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import ReCAPTCHA from 'react-google-recaptcha';


const FormSignup = () => {
  const history = useHistory();
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const url = process.env.REACT_APP_API_URL;
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const captchaRef = useRef(null)

  console.log(captchaVerified);
  const nameChangeHandler = event => {
      setUserName(event.target.value)
      console.log(username)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };

  console.log(process.env.REACT_APP_SITE_KEY)
  console.log(process.env.REACT_APP_SECRET_KEY)


  async function handleLogIn (event){
    event.preventDefault();
    const error = await validateLogin(username, password);
    setErrorMessage(error);
    if(!error){
      history.push('/HypeStoreFrontend');
      window.location.reload(false);
    }
  };

  const handleCaptchaChange = () => {
    const token = captchaRef.current.getValue();
    setCaptchaVerified(true)
    const response = axios.post( url + '/captcha-verify', null, {
      params: {
        responseToken: token,
      },
    })
    if (response.status === 200) {
      return setCaptchaVerified(true);
    }
  };

  async function validateLogin(username, password) {

    if (!username || !password) {
      return 'Please enter both username and password';
    }

    if (!captchaVerified) {
      return 'Please verify that you are not a robot';
    }

    try {
      const response = await axios.post(url + "/auth", { username, password });
      const token = response.data.token;
      console.log(response.data);
      localStorage.setItem("token", token);
      localStorage.setItem("userName", username);

      if (response.status === 200) {
        return '';
      } else {
        return 'Invalid username or password';
      }
    } 
    catch (error) {
      return 'Wrong UserName or Password';
    }
  }



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
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <ReCAPTCHA className='captcha'
          sitekey='6LfLOXElAAAAALmed6NMaHwS3bNzsFX9R73F9M6r'
          onClick={handleCaptchaChange}
          ref={captchaRef}/>
        <div className='form-input-btn1' onClick={handleLogIn} >  
          Log in
        </div>
        <span className='form-input-login'>
            You don´t have an account ? Register  
              <a href='/Register'> here.</a>
        </span>
      </div>
    </div>
  );
};

export default FormSignup;