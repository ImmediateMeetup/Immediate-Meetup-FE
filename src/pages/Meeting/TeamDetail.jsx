import React, {useState, useEffect} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Menu from '../../components/TeamDetail/menu'
import Comment from '../../components/TeamDetail/comment'
import Member from '../../components/TeamDetail/member'
import {useCookies} from 'react-cookie'
import {useParams} from 'react-router-dom'
import BasicMap from '../../components/Maps'
import {getMeetingDetail, getNearSubway} from '../../apis'
import SearchMap from '../../components/Maps/SearchMap'

export default function TeamDetail() {
  let {id} = useParams()
  const [cookie] = useCookies(['AUTH-KEY'])
  const [data, setData] = useState(null)
  const [nearSubway, setNearSubway] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = () => {}

  useEffect(() => {
    async function getData() {
      try {
        const token = cookie['AUTH-KEY']
        const response = await getMeetingDetail(id, token)
        const addressResponse = await getNearSubway(id, token)
        setData(response.data)
        setNearSubway(addressResponse.data)
        setError(null)
      } catch (error) {
        alert('접속오류')
        console.error('Error fetching meeting data:', error)
        setError(error)
        setData({
          id: 1,
          title: '수정된 약속방 이름',
          content: '수정된 약속방 내용',
          firstDay: '수정된 시작 날',
          lastDay: '수정된 마지막 날',
          place: '수원시 팔달구 권광로 138',
          timeZone: '09:00~17:00',
          comments: ['gd', 'ㅎㅇ'],
          participate: ['심유진', '최준호', '고태현', '홍정우', '한상윤']
        })
        setNearSubway({
          subwayId: '1285',
          subwayName: '임진강',
          route: '경의중앙선',
          longitude: 126.746765,
          latitude: 37.888421
        })
      }
    }
    getData()
  }, [id, cookie])

  return (
    <div>
      <Header />
      <div className="mt-10 flex justify-center items-center h-screen flex-col">
        <Menu />
        <div className="w-[900px] py-5 px-6 rounded-lg shadow-lg bg-white overflow-y-auto">
          <div className="justify-center items-center py-4">
            <div className=" items-start justify-start flex-row">
              <div className=" h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle mb-10 mx-5 ">
                <Member participate={data?.participate || []} meetingId={id} />
              </div>
            </div>
            <div className="flex items-center mb-6 justify-center">
              <div className="flex mt-4">
                <ReceiveTimeTable />
                <div className="ml-40">
                  <div>약속장소는 다음과 같아요</div>
                  <div className="font-['Pretendard'] text-2xl">{data?.place || ''}</div>
                  <BasicMap
                    lat={nearSubway?.latitude || 0}
                    lng={nearSubway?.longitude || 0}
                    route={nearSubway?.route || ''}
                    subwayName={nearSubway?.subwayName || ''}
                  />
                  <div className="cursor-pointer text-blue-500" onClick={() => setIsModalOpen(true)}>
                    약속장소 변경하기
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col text-center justify-center my-12">
                <Button text="수정 완료" onClick={handleSubmit} />
              </div>
            </div>
            <Comment initialComments={data?.comments || []} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <SearchMap
          onClose={() => setIsModalOpen(false)}
          id={data?.id || 1}
          token={cookie}
          stringAddress={data?.place || ''}
        />
      )}
    </div>
  )
}
