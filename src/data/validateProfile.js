export  function validatePassword(password, password2){
    let valid = true;
    const error = {
        password: '',
        password2: '',
    }

    if(password < 4){
        error.password = 'Password needs to be 6 characters or more'
    }

    if(password !== password2){
        error.password2 = "passwords doesnt match"
        valid = false;
      }

    return {valid, error};
}

export  function validateEmail(email){
    let valid = true;
    const error = {
        email : '',
    }

    if(!email.includes('@')){
        error.email = 'wrong format'
        valid = false
  
    }
    return {valid, error};
}

export  function validatePnumber(pNumber){
    let valid = true;
    const error = {
        pNumber : '',
    }

    if(!/^(?:(?:\+|00)421|0)([1-9][0-9]{8})$/.test(pNumber)){
        error.pNumber = 'wrong format'
        valid = false;
    }
    return {valid, error};
}


export  function validateFacebook(facebook){
    let valid = true;
    const error = {
        facebook : '',
    }

    if(!/^(https?:\/\/)?(www\.)?facebook\.com\/(profile\.php\?id=\d+|[A-Za-z0-9_.-]+)\/?$/.test(facebook)){
        error.facebook = 'wrong format';
        valid = false;
    }
    return {valid, error};
}

export  function validateInstagram(instagram){
    let valid = true;
    const error = {
        instagram : '',
    }

    if(!/^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am)\/[a-zA-Z0-9_]+\/?$/.test(instagram)){
        error.instagram = 'wrong format';
        valid = false;
    }
    return {valid, error};
}