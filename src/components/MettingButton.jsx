import React from 'react'

const MeetingButton = ({onClick}) => {
  return (
    <div className="h-32 border border-[#FF6E6E] rounded-xl w-full my-6" onClick={onClick}>
      <div className="flex justify-around flex-col px-10 py-2 h-full">
        <div className='font-["Pretendard"] font-bold text-3xl'>심유진님 외 1명</div>
        <div className='font-["Pretendard"] font-semibold text-2xl'>약속장소가 아직 정해지지 않았습니다</div>
      </div>
    </div>
  )
}

export default MeetingButton
