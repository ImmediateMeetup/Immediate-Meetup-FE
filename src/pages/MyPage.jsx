import React, {useState} from 'react'
import BasicInput from '../components/input'
import Header from '../components/Header'

export default function MyPage() {
  const [data, setData] = useState({
    email: 'test@example.com',
    name: '이름',
    image: 'https://github.com/Erichong7/Instagram_Project/assets/97429550/05958834-4e72-4e5c-9cad-652b5c6071cc',
    phoneNumber: null,
    address: '주소'
  })

  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState(null)
  const [name, setName] = useState(data.name)
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
  const [address, setAddress] = useState(data.address)

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

  return (
    <div>
      <Header />
      <div className="content-center mt-12">
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
            프로필 사진 변경
          </label>

          <div className="flex flex-col mt-12">
            <BasicInput type="email" onChange={handleEmailChange} value={email} valtype="email" width={'w-[350px]'} />

            <BasicInput
              type="name"
              width={'w-[350px]'}
              showError={false}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <BasicInput
              type="phoneNumber"
              width={'w-[350px]'}
              showError={false}
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div> 현재위치 추가 </div>
          <button
            className="mt-20 text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
            onClick={handleData}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}
