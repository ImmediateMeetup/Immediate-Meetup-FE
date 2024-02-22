import React, {useState} from 'react'
import {PasswordValidation, EmailValidation, MatchPassword} from './validation'

const BasicInput = ({type, onChange, placeholder, valtype, width = 'w-[386px]', showError = true, rePassword}) => {
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
        setErrorMessage('비밀번호 형식이 올바르지 않습니다.')
        break
      case 'matchPassword':
        validationFunction = (value) => MatchPassword(value, rePassword)
        setErrorMessage('비밀번호가 일치하지 않습니다.')
        break
      default:
        break
    }
    if (validationFunction && !validationFunction(inputValue)) {
      setIsValid(false)
    } else {
      setIsValid(true)
      onChange(e)
    }
  }

  return (
    <div className="flex flex-col mb-5">
      <input
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`${width} h-[55px] rounded-md border border-stone-300 outline-none placeholder:text-stone-300 text-xl pl-5 mt-5`}
      />
      {showError && !isValid && <div className="text-red-600">{errorMessage}</div>}
    </div>
  )
}

export default BasicInput
