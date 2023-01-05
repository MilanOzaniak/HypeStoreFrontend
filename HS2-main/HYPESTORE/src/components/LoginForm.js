import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const[username, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const nameChangeHandler = event => {
        setUserName(event.target.value)
        console.log(username)
    }

    const passwordChangeHandler = event => {
        setPassword(event.target.value)
    };

    const handleLogIn =async e =>{
        e.preventDefault();
        const user={username, password}
        
        await axios.post("http://localhost:8080/auth", user);


    
    };

      return(nameChangeHandler, passwordChangeHandler, handleLogIn)
}
export default LoginForm;