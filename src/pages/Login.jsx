import React, {useState} from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/input/index'
import BasicInput from '../components/input/index'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const goToJoin = () => {
    navigate('/join')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const handleData = () => {
    const updatedData = {
      email: email || data.email,
      password: password || data.password,
    }
    setData(updatedData)
    login(data)
    console.log(updatedData)
    
  }
  return (
    <div>
      <div className="content-center mt-56">
        <div className="text-[30px] font-bold text-center text-black">우리지금 만나, 당장 만나</div>
        <div className="flex flex-col items-center mt-28">
          <BasicInput type={'email'} placeHolder={'ID'} onChange={(e) => setEmail(e.target.value)} showError={false} />
          <BasicInput
            type={'password'}
            placeHolder={'Password'}
            onChange={(e) => setPassword(e.target.value)}
            showError={false}
          />
        </div>

        <form className="p-5 flex flex-col items-center bg-white rounded-lg">
          <button type="submit" className=" text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] " onClick={handleData}>
            로그인
          </button>
        </form>
        <div onClick={goToJoin} className="text-center cursor-pointer mt-14">

          회원가입
        </div>
      </div>
    </div>
  )
}
