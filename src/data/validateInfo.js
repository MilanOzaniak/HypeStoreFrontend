
export default function validateInfo(userName, email, pNumber, password, password2) {
  const error = {
    userName: '',
    email: '',
    pNumber: '',
    password: '',
    password2: '',
  };

  let valid = true

  //userName
    if (userName < 4){
      error.userName = 'User name needs to be 4 characters or more'
      valid = false;
    }



  //email
    if(!email.includes('@')){
      error.email = 'wrong format'
      valid = false

    }

  //phone number
     if(!/^(?:(?:\+|00)421|0)([1-9][0-9]{8})$/.test(pNumber)){
      error.pNumber = 'wrong format'
      valid = false;
    }

      //password  
      if (password.length < 6) {
        error.password = 'Password needs to be 6 characters or more'
        valid = false;
  
      }
  
      if(password !== password2){
        error.password2 = "passwords doesnt match"
        valid = false;
  
      }

    return {valid, error};
  }
