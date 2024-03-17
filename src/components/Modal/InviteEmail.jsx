import React, {useState} from 'react'
import BasicInput from '../input'
import {emailCertification, emailConfirm} from '../../apis'
import {useNavigate} from 'react-router-dom'

export default function InviteEmail({closeModal, email}) {
  const navigate = useNavigate()

  const [verifyCode, setVerifyCode] = useState('')

  const handleVerifyCodeChange = (e) => {
    setVerifyCode(e.target.value)
    console.log(e.target.value)
  }

  const handleConfrimCode = async () => {
    try {
      await emailConfirm(email, verifyCode)
      closeModal()
    } catch (error) {
      alert('인증코드가 올바르지 않습니다.')
    }
  }

  const handleResendCode = async () => {
    try {
      await emailCertification(email)
      alert('인증코드를 다시 전송했습니다.')
    } catch (error) {
      alert('인증코드를 다시 전송하는 데 문제가 발생했습니다.')
    }
  }

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div className="p-5 flex flex-col bg-white rounded-lg">
        <div className="flex items-center -mb-4">
          <BasicInput
            onChange={handleVerifyCodeChange}
            placeholder={'인증코드를 확인해주세요'}
            type="code"
            valtype="code"
            showError={false}
          />
        </div>
        <div className="flex items-center flex-col">
          <div className="flex justify-between mb-12 ml-3 mr-3 mt-3">
            <div className="mr-12">인증코드를 받지 못하셨나요?</div>
            <button
              type="button"
              className="w-[130px] h-10 text-white text-m bg-rose-200 rounded-lg p-2 hover:bg-rose-300"
              onClick={handleResendCode}
            >
              인증코드 재발송
            </button>
          </div>
          <button
            type="button"
            className="w-[150px] h-10 text-white text-m bg-rose-400 rounded-lg p-2 hover:bg-rose-300"
            onClick={handleConfrimCode}
          >
            인증하기
          </button>
        </div>
      </div>
    </div>
  )
}
