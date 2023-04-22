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
  const [captchaVerified, setCaptchaVerified] = useState(true);
  const captchaRef = useRef(null)

  console.log(url);
  const nameChangeHandler = event => {
      setUserName(event.target.value)
  }

  const passwordChangeHandler = event => {
      setPassword(event.target.value)
  };



  async function handleLogIn (event){
    event.preventDefault();
    const error = await validateLogin(username, password);
    setErrorMessage(error);
    if(!error){
      history.push('/HypeStoreFrontend/');
      window.location.reload(false);
    }
  };

  async function handleCaptchaChange () {

    const token = captchaRef.current.getValue();
    axios.post( url + '/captcha-verify', null, {
      params: {
        responseToken: token,
      },
    }).then((response) =>{
      if (response.status === 200) {
        return setCaptchaVerified(true);
      }
    })
  };

  async function validateLogin(username, password) {

    if (!username || !password) {
      return 'Please enter both username and password!';
    }

    if (!captchaVerified) {
      return 'Please verify that you are not a robot!';
    }

    try {
      const response = await axios.post(url + "/auth", { username, password });
      const token = response.data.token;
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

  function push(){
    history.push('/HypeStoreFrontend/register');
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

        <div className='form-input-btnlogin' onClick={handleLogIn} >  
          Log in
        </div>
        <span className='form-input-login'>
            You don´t have an account ? Register  
              <Link to={'/HypeStoreFrontend/register'}> here.</Link>
        </span>
      </div>
    </div>
  );
};

export default FormSignup;