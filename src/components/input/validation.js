const EmailValidation = (email) => {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/
  if (pattern.test(email) === false) return false
  else return true
}

const PasswordValidation = (password) => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&!@#$%^&*()_+])[A-Za-z\d@$!%*#?&!@#$%^&*()_+]{8,}$/
  if (pattern.test(password) === false) return false
  else return true
}

const MatchPassword = (password, repassword) => {
  if (password === repassword) return true
  else return false
}

export {EmailValidation, PasswordValidation, MatchPassword}
