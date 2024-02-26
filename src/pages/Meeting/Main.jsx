import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import MeetingButton from '../../components/MettingButton'

const MeetingRoom = () => {
  return (
    <>
      <Header />
      <div className=" px-96 w-full">
        <div className=" flex w-full justify-end items-end mt-3">
          <Button text="방 만들기" width=" w-[150px]" />
        </div>
        <div className=" flex justify-center items-center">
          <MeetingButton />
        </div>
      </div>
    </>
  )
}

export default MeetingRoom
