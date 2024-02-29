import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getUserProfile} from '../apis'

export default function Header() {
  const [cookie] = useCookies(['AUTH-KEY'])
  const navigate = useNavigate()
  const [name, setName] = useState('')
  useEffect(() => {
    async function getName() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getUserProfile(token)
        setName(response.data.name)
      } catch (error) {
        console.error('Error')
      }
    }
  }, [])

  return (
    <div>
      <div className="w-full h-32 bg-white border-0 border-b-4 flex justify-between content-center px-96 items-center fixed z-50">
        <div className="text-[30px] font-bold text-left text-black" onClick={() => navigate('/')}>
          우리지금 만나, 당장 만나
        </div>
        {name === '' ? (
          <button
            className="text-[20px] color-black"
            onClick={() => {
              navigate('/login')
            }}
          >
            로그인 / 회원가입
          </button>
        ) : (
          <button
            className="text-[20px] color-black"
            onClick={() => {
              navigate('/mypage')
            }}
          >
            {name}님 환영합니다.
          </button>
        )}
      </div>
      <div className="pb-32"></div>
    </div>
  )
}
