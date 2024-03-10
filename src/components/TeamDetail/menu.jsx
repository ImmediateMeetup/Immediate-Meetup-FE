import React, {useState} from 'react'
import NoticeWrite from '../Modal/noticeWrite'
import Notice from './notice'

export default function Menu() {
  const [showNoticeModal, setShowNoticeModal] = useState(false)

  const handleNoticeClick = () => {
    setShowNoticeModal(true)
  }

  const handleCloseModal = () => {
    setShowNoticeModal(false)
  }

  const [noticeText, setNoticeText] = useState('')
  return (
    <div>
      <div className="flex justify-end w-[900px] ">
        <button className="text-center justify-center w-[100px] h-[30px] border-2 rounded-[15px] border-slate-300 flex mb-2 mr-3">
          💨 방 나가기
        </button>
      </div>
      <div className="flex justify-end w-[900px] ">
        <button
          className="text-center justify-center w-[70px] h-[30px] border-2 rounded-[15px] border-rose-200 flex mb-10 mr-3"
          onClick={handleNoticeClick}
        >
          🔔 공지
        </button>
      </div>
      {noticeText && <Notice noticeText={noticeText} />}

      {showNoticeModal && (
        <NoticeWrite noticeText={noticeText} setNoticeText={setNoticeText} onClose={handleCloseModal} />
      )}
    </div>
  )
}
