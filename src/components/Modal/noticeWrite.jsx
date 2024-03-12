import React, {useState} from 'react'

export default function Notice({onClose, noticeText, setNoticeText}) {
  const [colorButton, setColorButton] = useState('text-slate-400 bg-slate-100 border-slate-200')
  const [textareaValue, setTextareaValue] = useState('')

  const noticeTextChange = (e) => {
    setTextareaValue(e.target.value)

    if (e.target.value) {
      setColorButton('text-white bg-[#ff6e6e]')
    } else {
      setColorButton('text-slate-400 bg-slate-100 border-slate-200')
    }
  }

  const handleCancelClick = () => {
    onClose()
  }

  const CreateNotice = () => {
    setNoticeText(textareaValue)
    onClose()
  }

  return (
    <div>
      <div className="z-10 ffont-['Pretendard'] lex justify-center absolute backdrop-blur-sm bg-opacity-100">
        <div className="flex flex-col w-[900px] px-6 h-[900px] rounded-lg bg-white overflow-y-auto shadow-2xl">
          <div className="text-[25px] mt-10 flex justify-center"> 공지 작성하기 </div>
          <hr className="my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <textarea
            className="outline-none text-[25px] p-5 resize-none h-[200px] mt-10 mx-10 rounded-lg shadow-sm border-rose-50 border-4"
            onChange={noticeTextChange}
            value={textareaValue}
          ></textarea>
          <div className="flex justify-center">
            <button
              className="text-[25px] text-black flex text-center justify-center w-[350px] h-[65px] border-2 rounded-[10px]  bg-white my-10 border-slate-300 align-middle pt-3"
              onClick={handleCancelClick}
            >
              취소
            </button>
            <div className="w-[60px]"></div>
            <button
              onClick={CreateNotice}
              className={`text-[25px] flex text-center justify-center w-[350px] h-[65px] border-2 rounded-[10px] my-10 pt-3 ${colorButton}`}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
