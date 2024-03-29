import React from 'react'

const ReceiveMeetingButton = ({onAccept, onReject, title, content}) => {
  return (
    <div className="h-32 border border-[#a88e8e] rounded-xl w-full my-6 cursor-pointer">
      <div className="flex justify-around flex-col px-10 mt-6 ">
        <div className='font-["Pretendard"] font-bold text-3xl'>{content}</div>

        <div className="flex justify-end ">
          <button onClick={onReject} className="bg-red-500 mr-4 text-white px-4 py-2 rounded-lg">
            거절
          </button>
          <button onClick={onAccept} className="bg-green-500 text-white px-4 py-2 rounded-lg">
            수락
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReceiveMeetingButton
