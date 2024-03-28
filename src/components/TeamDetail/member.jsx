import React, {useState} from 'react'
import InviteModal from './InviteModal'

export default function Member({participate, meetingId, cookie}) {
  const [showInviteModal, setShowInviteModal] = useState(false)

  const handleInviteClick = () => {
    setShowInviteModal(!showInviteModal)
  }

  const handleCloseModal = () => {
    setShowInviteModal(false)
  }

  return (
    <div className="flex mt-2 ml-2">
      {participate.map((participant, index) => (
        <div
          key={index}
          className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 "
        >
          {participant}
        </div>
      ))}
      <div
        className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-[15px] h-[30px] rounded-[12px] cursor-pointer"
        onClick={handleInviteClick}
      >
        +
      </div>
      {showInviteModal && <InviteModal onClose={handleCloseModal} meetingId={meetingId} />}
    </div>
  )
}
