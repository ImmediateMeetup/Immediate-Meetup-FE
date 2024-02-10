import React, {useState} from 'react'
import {PasswordValidation, EmailValidation, MatchPassword} from './validation'

const BasicInput = ({type, onChange, placeholder, valtype}) => {
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    let validationFunction

    switch (valtype) {
      case 'email':
        validationFunction = EmailValidation
        setErrorMessage('이메일 형식이 올바르지 않습니다.')
        break
      case 'password':
        validationFunction = PasswordValidation
        setErrorMessage('비밀번호에는 알파벳,숫자,특수문자가 포함되어야하며 8글자 이상이어야합니다.')
        break
      case 'matchPassword':
        validationFunction = MatchPassword
        setErrorMessage('비밀번호가 일치하지 않습니다.')
        break
    }
    if (validationFunction && !validationFunction(inputValue)) {
      setIsValid(false)
      console.log(errorMessage)
    } else {
      setIsValid(true)
      onChange(e)
      console.log(isValid)
    }
  }

  return (
    <div>
      <input type={type} onChange={handleInputChange} placeholder={placeholder} />
      {!isValid && <div className=" text-red-600">{errorMessage}</div>}
    </div>
  )
}

export default BasicInput
