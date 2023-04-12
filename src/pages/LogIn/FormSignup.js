import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import ReCAPTCHA from 'react-google-recaptcha';


const FormSignup = () => {
  const history = useHistory();
  const captchaRef = React.createRef();
  const[username, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const url = process.env.REACT_APP_API_URL;
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(true);

  const nameChangeHandler = event => {
      setUserName(event.target.value)
      console.log(username)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };

  console.log(process.env.REACT_APP_SITE_KEY)
  console.log(process.env.REACT_APP_SECRET_KEY)

  const handleCaptchaChange = () => {
    const token = captchaRef.current.getValue();
    axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: '6LfLOXElAAAAAEYxcTErnVG5yW8gXy2htYQLZ2Zy',
        response: token,
      }
    }).then((response) => {
      setCaptchaVerified(response.data.success);
    });
    setCaptchaVerified(true);
  };


  async function handleLogIn (event){
    event.preventDefault();
    const error = await validateLogin(username, password);
    setErrorMessage(error);
    if(!error){
      history.push('/');
      window.location.reload(false);
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
          onChange={handleCaptchaChange}
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