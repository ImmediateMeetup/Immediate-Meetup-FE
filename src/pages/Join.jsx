import React, {useState, useRef, useEffect} from 'react'
import BasicInput from '../components/input'
import {join} from '../apis'
import CurrentLocation from '../components/Maps/CurrentLocation'
import Header from '../components/Header'
import InviteEmail from '../components/Modal/InviteEmail'
import {emailCertification} from '../apis'

export default function Join() {
  const [data, setData] = useState({
    email: 'test@example.com',
    password: 'test@',
    checkedPassword: 'test@',
    name: '이름',
    address: {},
    phone_number: '전화번호'
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState(null)
  const [name, setName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [address, setAddress] = useState({
    latitude: 0,
    longitude: 0
  })
  const [stringAddress, setStringAddress] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef(null)
  const [openInviteModal, setOpenInviteModal] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false)
      }
    }

    if (openModal) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [openModal])

  const handleData = () => {
    const updatedData = {
      email: email || data.email,
      password: password || data.password,
      checkedPassword: confirmPassword || data.checkedPassword,
      name: name || data.name,
      address: address || data.address,
      phone_number: phone_number || data.phone_number
    }
    setData(updatedData)
    console.log(data)
    //join(data)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    setProfilePicture(file)
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  const handleInviteModal = async (email) => {
    emailCertification(email)
      .then(() => {
        setOpenInviteModal(!openInviteModal)
      })
      .catch(() => {
        alert('올바르지 않은 접근입니다.')
        setOpenInviteModal(!openInviteModal)
      })
  }

  return (
    <div>
      <Header />
      <div className="content-center mt-24">
        <div className="text-[30px] font-bold text-center text-black">우리지금 만나, 당장 만나</div>
        <form className="p-5 flex flex-col items-center bg-white rounded-lg">
          {profilePicture ? (
            <img
              src={URL.createObjectURL(profilePicture)}
              alt="Profile"
              className="rounded-full h-40 w-40 object-cover mt-4"
            />
          ) : (
            <div className="h-40 w-40 bg-gray-300 rounded-full mt-4"></div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="hidden"
            id="profilePictureInput"
          />
          <label htmlFor="profilePictureInput" className="text-blue-500 cursor-pointer mt-2">
            프로필 사진을 정해주세요
          </label>

          <div className="flex flex-col  mt-12">
            <BasicInput
              type="email"
              onChange={handleEmailChange}
              placeholder="이메일을 입력하세요"
              valtype="email"
              width={'w-[350px]'}
            />
            <button
              type="button"
              className={`items-start ${email === '' ? 'bg-[#ffa7a7]' : 'bg-[#ff6e6e]'} text-white w-20 rounded-2xl mt-2 h-10`}
              onClick={() => handleInviteModal(email)} // Changed here
            >
              인증 요청
            </button>
            <BasicInput
              type="password"
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력하세요"
              valtype="password"
              width={'w-[350px]'}
            />
            <BasicInput
              type="password"
              onChange={handleConfirmPasswordChange}
              placeholder="비밀번호 확인"
              valtype="matchPassword"
              width={'w-[350px]'}
              rePassword={password}
            />
            <BasicInput
              type="name"
              placeholder="닉네임을 입력해주세요"
              width={'w-[350px]'}
              showError={false}
              onChange={(e) => setName(e.target.value)}
            />
            <BasicInput
              type="phoneNumber"
              placeholder="전화번호"
              width={'w-[350px]'}
              showError={false}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className=" text-l text-white w-28 text-center rounded-2xl mt-2 bg-blue-600" onClick={handleModal}>
            현재위치 추가
          </div>
          {openModal && (
            <div ref={modalRef}>
              <CurrentLocation handleModal={handleModal} setAddress={setAddress} setStringAddress={setStringAddress} />
            </div>
          )}
          <div className="text-[22px]" onClick={() => console.log(address)}>
            {stringAddress === '' ? '주소를 설정해주세요' : stringAddress}
          </div>
          <div
            className=" cursor-pointer flex items-center justify-center mt-20 text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
            onClick={handleData}
          >
            회원가입
          </div>
        </form>
      </div>

      {openInviteModal && <InviteEmail closeModal={() => setOpenInviteModal(false)} email={email} />}
    </div>
  )
}
