import React from 'react'

const MeetingButton = ({onClick, title, content}) => {
  return (
    <div className="h-32 border border-[#FF6E6E] rounded-xl w-full my-6 cursor-pointer" onClick={onClick}>
      <div className="flex justify-around flex-col px-10 py-2 h-full">
        <div className='font-["Pretendard"] font-bold text-3xl'>{title}</div>
        <div className='font-["Pretendard"] font-semibold text-2xl'>{content}</div>
      </div>
    </div>
  )
}

export default MeetingButton
