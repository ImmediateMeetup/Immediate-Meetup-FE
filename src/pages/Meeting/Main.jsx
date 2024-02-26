import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import MeetingButton from '../../components/MettingButton'
import TeamDetail from './TeamDetail'
import RangePicker from '../RangePicker'
import {useNavigate} from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()
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

        <div className=" flex justify-center items-center">
          <MeetingButton
            onClick={() => {
              navigate('/teamDetail')
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Main
