import React from 'react'
import BasicInput from '../input'

export default function InviteMember({closeModal}) {
  const backgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75"
      onClick={backgroundClick}
    >
      <div className="flex flex-col-reverse">
        <div className="p-5 flex flex-col bg-white rounded-lg mb-24 ml-3 mr-3 mt-3">
          <div className="flex items-center -mb-4">
            <BasicInput placeholder={'사용자를 검색해주세요'} type="code" valtype="code" />
            <div className="flex justify-between ">
              <button
                type="submit"
                className="ml-5 w-[130px] h-[50px] text-white text-m bg-rose-200 rounded-lg p-2 hover:bg-rose-300"
              >
                검색
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <button
              type="submit"
              className="w-[150px] mt-10 text-white text-m bg-rose-400 rounded-lg p-2 hover:bg-rose-300"
            >
              초대하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
