import React, {useEffect, useState} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'
import CurrentLocation from '../../components/Maps/CurrentLocation'
import {useCookies} from 'react-cookie'
import {getMeeting, getNearSubway} from '../../apis'
import {useParams} from 'react-router-dom'
import BasicMap from '../../components/Maps'
import {getMeetingDetail} from '../../apis'
import Menu from '../../components/TeamDetail/menu'
import Comment from '../../components/TeamDetail/comment'
import Member from '../../components/TeamDetail/member'

export default function TeamDetail() {
  let {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [data, setData] = useState({
    id: 1,
    title: '수정된 약속방 이름',
    content: '수정된 약속방 내용',
    firstDay: '수정된 시작 날',
    lastDay: '수정된 마지막 날',
    place: '서울특별시 서대문구 남가좌동',
    timeZone: '09:00~17:00',
    comments: [],
    participate: ['심유진', '최준호', '고태현', '홍정우', '한상윤']
  })
  const [nearSubway, setNearSubway] = useState({
    subwayId: '1285',
    subwayName: '임진강',
    route: '경의중앙선',
    longitude: 126.746765,
    latitude: 37.888421
  })

  useEffect(() => {
    async function getData() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getMeetingDetail(id, token)
        const addressResponse = await getNearSubway(id, token)
        setData(response.data)
        setNearSubway(addressResponse.data)
      } catch (error) {
        console.error('Error')
      }
    }
    getData()
  }, [])
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleSummit = async () => {}

  return (
    <div>
      <Header />
      <div className="mt-10 flex justify-center items-center h-screen flex-col">
        <Menu />
        <div className="w-[900px] py-5 px-6 rounded-lg shadow-lg bg-white overflow-y-auto">
          <div className="justify-center items-center py-4">
            <div className=" items-start justify-start flex-row">
              <div className=" h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle mb-10 mx-5 ">
                <Member participate={data.participate} />
              </div>
            </div>
            <div className="flex items-center mb-6 justify-center">
              <div className="flex mt-4">
                <ReceiveTimeTable />
                <div className="ml-40">
                  <div>약속장소는 다음과 같아요</div>
                  <div className="  font-['Pretendard']  text-2xl">{data.place}</div>
                  <BasicMap
                    lat={nearSubway.latitude}
                    lng={nearSubway.longitude}
                    route={nearSubway.route}
                    subwayName={nearSubway.subwayName}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col text-center justify-center my-12">
                <Button text="수정 완료" onClick={handleSummit} />
              </div>
            </div>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  )
}
