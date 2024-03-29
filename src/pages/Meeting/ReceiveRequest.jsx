import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import ReceiveMeetingButton from '../../components/ReceiveMeetingButton'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {getMeeting} from '../../apis'
import {getMeetingMock} from '../../apis'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'

const ReceiveRequest = () => {
  const navigate = useNavigate()
  let {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [aceepted, setAccepted] = useState()
  const [status, setStatus] = useState()

  /*  useEffect(() => {
    async function getData() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getMeeting(id, token)
        setData(response.data)
        setError(null)
      } catch (error) {
        alert('접속오류')
        console.error(error)
        setError(error)
        setAccepted({
          meetingId: 1,
          status: 'ACCEPTED'
        })
      }
    }
    getData()
  }, [id, cookie])*/

  /* useEffect(() => {
    async function getData() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getMeeting(id, token)
        setState(response.data)
        setError(null)
      } catch (error) {
        alert('접속오류')
        console.error('error', error)
        setError(error)
      }
    }
    getData()
  }, [id, cookie])*/

  const {data, error} = useQuery({
    queryKey: ['getMeetingMock'],
    queryFn: () => getMeetingMock()
  })
  useEffect(() => {
    console.log(data, 'getMeetingMock')
    setStatus(data)
  }, [data, error])

  return (
    <>
      <Header />
      <div className=" px-96 w-full">
        <div className=" flex justify-center items-center flex-wrap">
          {status?.data.map((a, i) => {
            return <ReceiveMeetingButton key={a.id} content={a.content} accept={accept} />
          })}
        </div>
      </div>
    </>
  )
}

export default ReceiveRequest
