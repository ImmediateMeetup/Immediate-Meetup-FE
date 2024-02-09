import React from 'react'

export default function Header() {
  return (
    <div className="h-32 bg-white border-0 border-b-4 flex justify-between content-center px-96 items-center ">
      <div className="text-[30px] font-bold text-left text-black">우리지금 만나, 당장 만나</div>
      <button className="text-[20px] color-black">로그인 / 회원가입</button>
    </div>
  )
}
