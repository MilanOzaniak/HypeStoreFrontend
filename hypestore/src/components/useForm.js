
import { useState, useEffect } from 'react';
import axios from 'axios';
import validateInfo from '../data/validateInfo';

const useForm = () => {


  const[userName, setUserName] = useState('')
  const[email, setEmail] = useState('')
  const[pnumber, setPnumber] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const[user, setUser] = useState([])

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = e => {
    const user={userName, email, pnumber, password, password2}
    e.preventDefault();
    setErrors(validateInfo(userName, email, pnumber, password, password2));
    console.log(errors);
    console.log(user);
    axios.post("http://localhost:8080/register", user);
    console.log("preslo");
    setIsSubmitting(true)

  };



  return {handleSubmit, errors, user, nameChangeHandler, emailChangeHandler, pNumberChangeHandler, passwordChangeHandler, passwordChangeHandler2 };
};

export default useForm;