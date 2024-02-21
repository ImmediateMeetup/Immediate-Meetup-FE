import React, {useState} from 'react'
import {PasswordValidation, EmailValidation, MatchPassword} from './validation'

<<<<<<< Updated upstream
const BasicInput = ({type, onChange, placeholder, valtype, width}) => {
=======
const checkMatchPassword = (password, repassword) => {
  if (!repassword) return true
  return password === repassword
}

const BasicInput = ({type, onChange, placeholder, valtype, width, confirmPassword}) => {
>>>>>>> Stashed changes
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    let validationFunction

    switch (valtype) {
      case 'email':
        validationFunction = EmailValidation
        setErrorMessage('이메일 형식이 올바르지 않습니다.')
        break
      case 'password':
        validationFunction = PasswordValidation
        setErrorMessage('비밀번호 형식이 올바르지 않습니다.')
        break
      case 'matchPassword':
        validationFunction = MatchPassword
        setErrorMessage('비밀번호가 일치하지 않습니다.')
        break
    }
    if (validationFunction && !validationFunction(inputValue, confirmPassword)) {
      setIsValid(false)
      console.log(errorMessage)
      console.log(e.target.value)
    } else {
      setIsValid(true)
      onChange(e)
      console.log(isValid)
    }
  }

  return (
    <div>
      <input
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`${width} h-[55px] rounded-md border border-stone-300 outline-none placeholder:text-stone-300 text-xl pl-5 mt-5`}
      />
      {!isValid && <div className=" text-red-600">{errorMessage}</div>}
    </div>
  )
}

export default BasicInput
