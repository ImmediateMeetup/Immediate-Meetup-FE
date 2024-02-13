import React, {useState} from 'react'
import Range from '../components/Range'

export default function RangePicker() {
  const [showTable, setShowTable] = useState(false)

  const createAppointment = () => {
    setShowTable(!showTable)
  }

  return (
    <div className="flex flex-col items-center mt-48">
      <div>초대하기</div>
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
