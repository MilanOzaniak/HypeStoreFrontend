import axios from 'axios';
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {


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
    e.preventDefault();
    setErrors(validate(userName, email, pnumber, password, password2))
    
    const user={userName, email, pnumber, password}
    console.log(errors);
    
    if(errors == {}){
      axios.post("http://localhost:8080/register", user);
      console.log("preslo");
    }
    else{
      console.log("nepreslo");
    }

    setIsSubmitting(true)
  };


  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return {handleSubmit, errors, user, nameChangeHandler, emailChangeHandler, pNumberChangeHandler, passwordChangeHandler, passwordChangeHandler2 };
};

export default useForm;