import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import MeetingButton from '../../components/MeetingButon'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getAllMeeting} from '../../apis'
import {useQuery} from '@tanstack/react-query'

const MeetingRoom = () => {
  const navigate = useNavigate()
  const [cookie] = useCookies(['AUTH-KEY'])

  const {data, error, isLoading} = useQuery(['getAllMeeting'], getAllMeeting, {
    retry: 1,
    enabled: cookie['AUTH-KEY'] !== undefined
  })

  return (
    <>
      <Header />
      <div className="px-96 w-full">
        <div className="flex w-full justify-end items-end mt-3">
          <Button
            text="방 만들기"
            width="w-[150px]"
            onClick={() => {
              navigate('/rangePicker')
            }}
          />
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {isLoading && <div>Loading...</div>}

          {error && <div>Error: {error.message}</div>}

          {data &&
            data.meetings.map((meeting) => (
              <MeetingButton
                key={meeting.id}
                onClick={() => {
                  navigate(`/teamDetail/${meeting.id}`)
                }}
                title={meeting.title}
                content={meeting.content}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default MeetingRoom
