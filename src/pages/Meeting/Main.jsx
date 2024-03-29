import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import MeetingButton from '../../components/MeetingButon'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getAllMeeting} from '../../apis'
import {getAllMeetingMock} from '../../apis'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import ReceiveMeetingButton from '../../components/ReceiveMeetingButton'

const Main = () => {
  const navigate = useNavigate()
  let {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [status, setStatus] = useState()
  const [showModal, setShowModal] = useState(false)

  const {data, error} = useQuery({
    queryKey: ['getAllMeetingMock'],
    queryFn: getAllMeetingMock
  })
  useEffect(() => {
    console.log(data, 'getAllMeetingMock')
    setStatus(data)
  }, [data, error])

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Header />
      <div className=" px-96 w-full">
        <div className=" flex w-full justify-start items-end mt-3">
          <label className="w-40 inline-flex items-center me-2 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            <span className="ms-3 text-l font-medium text-gray-900 dark:text-gray-300">받은 신청</span>
          </label>
          <button className="mx-2 text-3xl" onClick={toggleModal}>
            🔔
          </button>
          <div className="flex w-full justify-end">
            <Button
              text="방 만들기"
              width=" w-[150px]"
              onClick={() => {
                navigate('/rangePicker')
              }}
            />
          </div>
        </div>

        <div className=" flex justify-center items-center flex-wrap">
          {status?.data.map((a, i) => {
            return (
              <MeetingButton
                key={a.id}
                onClick={() => {
                  navigate(`/teamDetail/${a.id}`)
                }}
                title={a.title}
                content={a.content}
              />
            )
          })}
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div className="relative bg-white w-96 p-4 rounded-lg">
              <ReceiveMeetingButton />
              <button className="absolute top-0 right-0 m-2 p-2" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Main
