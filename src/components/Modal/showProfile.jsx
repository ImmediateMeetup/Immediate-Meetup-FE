import React, {useState} from 'react'

export default function ShowProfile() {
  const [data, setData] = useState({
    email: 'test@example.com',
    name: '이름',
    image: 'https://github.com/Erichong7/Instagram_Project/assets/97429550/05958834-4e72-4e5c-9cad-652b5c6071cc',
    phoneNumber: null,
    address: '주소'
  })

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" shadow-lg flex flex-col items-center justify-center rounded-2xl p-8 bg-white">
        <div className="content-center mt-4">
          {data.image ? (
            <img src={data.image} alt="Profile" className="rounded-full h-40 w-40 object-cover mt-4" />
          ) : (
            <div className="h-40 w-40 bg-gray-300 rounded-full mt-4"></div>
          )}
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-xl">{data.name}</h2>
          <p className="text-gray-600">{data.email}</p>
        </div>
        <div className="mt-6 text-sm text-gray-600 border-t pt-4 w-full">
          <p className="flex items-center py-2">
            <div className="text-xl mr-2">☏</div>
            {data.phoneNumber}
          </p>
          <p className="flex items-center py-2">
            <div className="text-xl mr-2">♛</div>
            {data.address}
          </p>
        </div>
      </div>
    </div>
  )
}
