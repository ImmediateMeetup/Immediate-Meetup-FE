import React, {useState} from 'react'
import Range from '../components/TimeTable/Range'
import {useNavigate} from 'react-router-dom'
import InviteMember from '../components/Modal/InviteMember'

export default function RangePicker() {
  const navigate = useNavigate()
  const [showTable, setShowTable] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState(['심유진', '최준호', '한상윤', '홍정우', '고태현'])
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const removePerson = (person) => {
    setSelectedPeople(selectedPeople.filter((p) => p !== person))
  }

  const createAppointment = () => {
    setShowTable(!showTable)
    if (showTable === true) {
      navigate('/main')
    }
  }

  const openInviteModal = () => {
    setOpenModal(true)
  }

  const closeInviteModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <div className="flex flex-col mt-60 items-center">
        <div className="flex">
          <div className="overflow-auto flex w-[300px] h-[50px] border-2 rounded-[15px] border-rose-200 mb-10">
            {selectedPeople.map((person) => (
              <div key={person} className="flex mt-2 ml-2 align-middle">
                <div className="mr-1 text-center flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 ">
                  {person}
                  <button className="ml-1 mt-2 text-xs bg-transparent border-none" onClick={() => removePerson(person)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className="ml-3 mt-1 text-center flex flex-col-reverse space-x-reverse justify-center text-white text-[17px] w-[80px] h-[40px] rounded-[12px] bg-gray-300 cursor-pointer "
            onClick={openInviteModal}
          >
            추가
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
      {openModal && <InviteMember closeModal={closeInviteModal} />}
    </div>
  )
}
