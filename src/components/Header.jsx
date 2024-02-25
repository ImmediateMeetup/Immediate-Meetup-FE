import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-full h-32 bg-white border-0 border-b-4 flex justify-between content-center px-96 items-center fixed z-50">
        <div className="text-[30px] font-bold text-left text-black" onClick={() => navigate('/')}>
          우리지금 만나, 당장 만나
        </div>
        <button
          className="text-[20px] color-black"
          onClick={() => {
            navigate('/login')
          }}
        >
          로그인 / 회원가입
        </button>
      </div>
      <div className="pb-32"></div>
    </div>
  )
}
