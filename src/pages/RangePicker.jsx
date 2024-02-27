import React, {useState} from 'react'
import Range from '../components/TimeTable/Range'

export default function RangePicker() {
  const [showTable, setShowTable] = useState(false)

  const createAppointment = () => {
    setShowTable(!showTable)
  }
  //날짜 시간 보내주기로 변경
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[300px] h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle ml-10">
        <div className="flex mt-2 ml-2">
          <div className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 ">
            심유진
          </div>
        </div>
      </div>
      <Range showTable={showTable} setShowTable={setShowTable} />
      <button
        onClick={createAppointment}
        type="submit"
        className={' text-white text-[17px] w-[280px] h-[70px] rounded-[15px] bg-[#ff6e6e] '}
      >
        약속만들기
      </button>
    </div>
  )
}
