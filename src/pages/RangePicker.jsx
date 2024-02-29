import React, {useState} from 'react'
import Range from '../components/TimeTable/Range'
import {useMutation, useQueries, useQuery, useQueryClient} from '@tanstack/react-query'
import {createMeeting} from '../apis'
import {useNavigate} from 'react-router-dom'

export default function RangePicker() {
  const navigate = useNavigate()
  const [showTable, setShowTable] = useState(false)

  const createAppointment = () => {
    setShowTable(!showTable)
    if (showTable === true) {
      navigate('/main')
    }
  }
  return (
    <div className="flex flex-col mt-60 items-center ">
      <div className="w-[300px] h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle mb-10">
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
        className={' text-white text-[17px] w-[280px] h-[70px] rounded-[15px] bg-[#ff6e6e] mt-10 '}
      >
        약속만들기
      </button>
    </div>
  )
}
