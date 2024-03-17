import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import MeetingButton from '../../components/MettingButton'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getAllMeeting} from '../../apis'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

const Main = () => {
  const navigate = useNavigate()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [status, setStatus] = useState()
  /* const [data, setData] = useState({
    meetings: [
      {
        id: 1,
        title: 'testMeeting',
        content: 'test content',
        firstDay: '2023-02-12',
        lastDay: '2023-02-23',
        place: null,
        timeZone: '09:00~17:00'
      },
      {
        id: 2,
        title: 'testMeeting',
        content: 'test content',
        firstDay: '2023-02-12',
        lastDay: '2023-02-23',
        place: null,
        timeZone: '09:00~17:00'
      }
    ]
  })*/

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const token = cookie['AUTH-KEY'];
  //       const response = await getAllMeeting(token);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error');
  //     }
  //   }
  // }, []);

  const {data, error} = useQuery({
    queryKey: ['getAllMeeting'],
    queryFn: () => getAllMeeting()
  })
  useEffect(() => {
    console.log(data, 'getAllMeetingData')
    setStatus(data)
  }, [data, error])

  return (
    <>
      <Header />
      <div className=" px-96 w-full">
        <div className=" flex w-full justify-end items-end mt-3">
          <Button
            text="방 만들기"
            width=" w-[150px]"
            onClick={() => {
              navigate('/rangePicker')
            }}
          />
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
    </>
  )
}

export default Main
