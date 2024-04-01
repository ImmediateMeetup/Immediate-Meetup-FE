import React, {useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import {getMeetingMock, postReceiveRequestMock} from '../apis'
import ReceiveMeetingButton from './ReceiveMeetingButton'
import {getMeeting, postReceiveRequest} from '../apis'

/*
const ReceiveRequest = () => {
  const {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [status, setStatus] = useState()

  const {data, error} = useQuery({
    queryKey: ['getMeeting'],
    queryFn: getMeeting
  })

  useEffect(() => {
    console.log(data, 'getMeeting')
    setStatus(data)
  }, [data, error])

  const handleAccept = async (meetingId) => {
    try {
      const token = cookie['AUTH-KEY']
      await postReceiveRequest({meetingId, status: 'ACCEPTED'}, token)
    } catch (error) {
      console.error('Error accepting meeting:', error)
    }
  }
  */

const ReceiveRequest = () => {
  const {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [status, setStatus] = useState()

  const {data, error} = useQuery({
    queryKey: ['getMeetingMock'],
    queryFn: getMeetingMock
  })

  useEffect(() => {
    console.log(data, 'getMeetingMock')
    setStatus(data)
  }, [data, error])

  const handleAccept = async (id) => {
    try {
      const token = cookie['AUTH-KEY']
      await postReceiveRequestMock({id, status: 'ACCEPTED'}, token)
    } catch (error) {
      console.error('Error accepting meeting:', error)
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-wrap">
        {status?.data.map((data) => (
          <ReceiveMeetingButton key={data.id} content={data.content} onAccept={() => handleAccept(data.id)} />
        ))}
      </div>
    </div>
  )
}

export default ReceiveRequest
