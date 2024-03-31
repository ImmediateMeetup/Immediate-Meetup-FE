import React, {useEffect, useState} from 'react'
import Input from '../components/input/Input'
import Header from '../components/Header'
import {useCookies} from 'react-cookie'
import {getUserProfile} from '../apis'
import CurrentLocation from '../components/Maps/CurrentLocation'

export default function MyPage() {
  const [cookie] = useCookies(['AUTH-KEY'])
  const [data, setData] = useState({
    email: 'test@example.com',
    name: '이름',
    image: 'https://github.com/Erichong7/Instagram_Project/assets/97429550/05958834-4e72-4e5c-9cad-652b5c6071cc',
    phoneNumber: null,
    address: '주소'
  })

  useEffect(() => {
    async function getData() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getUserProfile(token)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }
    getData()
  }, [cookie])

  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState(null)
  const [name, setName] = useState(data.name)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
  const [address, setAddress] = useState(data.address)
  const [stringAddress, setStringAddress] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleData = () => {
    const updatedData = {
      email,
      password,
      checkedPassword: confirmPassword,
      name,
      address,
      phone_number: phoneNumber
    }
    setData(updatedData)
    console.log(updatedData)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    setProfilePicture(file)
  }

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <Header />
      <div className="content-center mt-12">
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
            프로필 사진 변경
          </label>

          <div className="flex flex-col mt-8">
            <div className="text-center text-[20px] mb-12">{email}</div>

            <Input
              type="name"
              width={'w-[350px]'}
              showError={false}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="phoneNumber"
              width={'w-[350px]'}
              showError={false}
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className=" text-l text-white w-28 text-center rounded-2xl mt-2 bg-blue-600" onClick={handleModal}>
            현재위치 수정
          </div>
          {openModal && (
            <div>
              <CurrentLocation handleModal={handleModal} setAddress={setAddress} setStringAddress={setStringAddress} />
            </div>
          )}
          <div className="text-[22px]" onClick={() => console.log(address)}>
            {stringAddress === '' ? '주소를 설정해주세요' : stringAddress}
          </div>

          <button
            className="mt-20 text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
            onClick={handleData}
          >
            수정하기
          </button>
        </form>
      </div>
    </div>
  )
}
