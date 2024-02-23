import React from 'react'
import Input from '../input/Input'

export default function InviteEmail() {
  return (
    <div className="flex justify-center">
      <form className="p-5 flex flex-col  bg-white rounded-lg">
        <div className="flex items-center -mb-4">
          <Input labelText={'인증코드'} placeHolder={'인증 코드를 확인해주세요.'} />
        </div>
        <div className="flex items-center flex-col">
          <div className="flex justify-between mb-12 ml-3 mr-3 mt-3">
            <div className="mr-12">인증코드를 받지 못하셨나요?</div>
            <button
              type="submit"
              className="w-[130px] h-10 text-white text-m bg-rose-200 rounded-lg p-2 hover:bg-rose-300"
            >
              인증코드 재발송
            </button>
          </div>
          <button
            type="submit"
            className="w-[150px] h-10 text-white text-m bg-rose-400 rounded-lg p-2 hover:bg-rose-300"
          >
            인증하기
          </button>
        </div>
      </form>
    </div>
  )
}
