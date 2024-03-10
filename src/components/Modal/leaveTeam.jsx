import React from 'react'

export default function leaveTeam() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="flex flex-col-reverse">
        <div className="p-5 flex flex-col bg-white rounded-lg mb-24 ml-3 mr-3 mt-3">
          <div className="flex items-center -mb-4">
            <div className="flex justify-between ">
              <div className="h-[50px] text-black text-l rounded-lg p-2 hover:bg-rose-300">방에서 나가시겠습니까?</div>
            </div>
          </div>
          <div className="flex items-center flex-row">
            <button className="w-[150px] mt-10 mr-3 text-white text-m bg-gray-300 rounded-lg p-2 hover:bg-rose-200">
              취소하기
            </button>
            <button className="w-[150px] mt-10 text-white text-m bg-rose-400 rounded-lg p-2 hover:bg-rose-300">
              나가기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
