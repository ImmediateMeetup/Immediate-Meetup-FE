import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/input/Input'

export default function Login() {
  return (
    <div>
      <div className="content-center mt-56">
        <div className="text-[30px] font-bold text-center text-black">우리지금 만나, 당장 만나</div>
        <div className="flex flex-col items-center mt-28">
          <Input type={'email'} placeHolder={'ID'} />
          <Input type={'password'} placeHolder={'Password'} />
        </div>

        <form className="p-5 flex flex-col items-center bg-white rounded-lg">
          <Button type="submit" text="로그인" />
        </form>
        <div className="text-center cursor-pointer mt-14">회원가입</div>
      </div>
    </div>
  )
}
