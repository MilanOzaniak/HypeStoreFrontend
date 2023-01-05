export default function validateInfo(_userName, _email, _pNumber, _password,_password2) {
  let errors = {};

  //userName
    if (!_userName) {
      errors.userName = 'Username required'
    }


  //password  
    if (!_password) {
      errors.password = 'Password required'

    } else if (_password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more'

    }

    if(_password !== _password2){
      errors.password2 = "passwords doesnt match"

    }

  //email
    if(!_email){
      errors.email = 'Email required'

    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_email)){
      errors.email = 'wrong format'

    }

  //phone number
    if(!_pNumber){
      errors.pNumber = 'Phone number required'

    }
    else if(_pNumber.length !== 10){
      errors.pNumber = 'please use correct phone number'

    }
    else if(!/^\d+$/.test(_pNumber)){
      errors.pNumber = 'wrong format'

    }

    return errors;
  }