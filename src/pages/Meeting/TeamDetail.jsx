import React, {useEffect, useState} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'
import CurrentLocation from '../../components/Maps/CurrentLocation'
import {useCookies} from 'react-cookie'
import {getMeeting, getNearSubway} from '../../apis'
import {useParams} from 'react-router-dom'
import BasicMap from '../../components/Maps'

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
  }, [])
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(!openModal)
    console.log(openModal)
  }

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="w-[900px] py-12 px-6 rounded-lg shadow-lg bg-white overflow-y-auto">
          <div className="justify-center items-center py-4">
            <div className=" items-start justify-start flex-row">
              <div className=" h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle ml-20 mb-5 ">
                <div className="flex mt-2 ml-2">
                  {data.participate.map(function (a, i) {
                    return (
                      <div
                        key={data.id}
                        className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 "
                      >
                        {data.participate[i]}
                      </div>
                    )
                  })}
                </div>
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
            <div className="gap-8">
              <div className="flex flex-col text-center justify-center">
                <Button text="수정 완료" className="my-3 w-full" />
              </div>
              <div>
                <div className="text-lg font-bold mb-4">댓글</div>
                <div className="flex mb-4">
                  <input
                    type="text"
                    className="flex-grow p-2 rounded-l-lg border"
                    placeholder="댓글을 입력하세요..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button className="bg-blue-500 text-white px-4 rounded-r-lg" onClick={addComment}>
                    추가
                  </button>
                </div>
                <div>
                  {comments.map((comment, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
                      {comment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
