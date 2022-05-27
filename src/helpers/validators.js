function isValidEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()))
    return true;
  else return false;
}

export default isValidEmail;
