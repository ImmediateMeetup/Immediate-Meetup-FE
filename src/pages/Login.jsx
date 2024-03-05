import React, {useState} from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/input/index'
import BasicInput from '../components/input/index'
import {useNavigate} from 'react-router-dom'
import {login} from '../apis'
import {useCookies} from 'react-cookie'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [cookie, setCookie] = useCookies(['AUTH-KEY'])
  const handleData = async () => {
    try {
      const updatedData = {
        email: email || data.email,
        password: password || data.password,
      }
      setData(updatedData)
      console.log(updatedData)
      const response = await login(data)
      const token = response.data.token
      setCookie('AUTH-KEY', token, {path: '/'})
      navigate('/meetingroom')
    } catch (error) {
      console.error('로그인실패', error)
      alert('로그인 실패입니다')
      navigate('/login')
    }
  }
  return (
    <div>
      <Header />
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
          <button
            type="submit"
            className=" text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
            onClick={handleData}
          >
            로그인
          </button>
        </form>
        <div
          onClick={() => {
            navigate('/')
          }}
          className="text-center cursor-pointer mt-14"
        >
          회원가입
        </div>
      </div>
    </div>
  )
}
