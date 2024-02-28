import React, {useState} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'
import CurrentLocation from '../../components/Maps/CurrentLocation'

export default function TeamDetail() {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [address, setAddress] = useState({lat: 0, lng: 0})
  const [stringAddress, setStringAddress] = useState('')
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
    <div className="flex justify-center items-center h-screen">
      <div className="w-[900px] py-12 px-6 rounded-lg shadow-lg bg-white overflow-y-auto" style={{maxHeight: '60vh'}}>
        <div className="justify-center py-4">
          <div className="w-[300px] h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle ml-20 mb-5 ">
            <div className="flex mt-2 ml-2">
              <div className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 ">
                심유진
              </div>
            </div>
          </div>
          <div className="flex items-center mb-6 justify-center">
            <div className="flex mt-4">
              <ReceiveTimeTable />
              <div className="ml-40">
                <div
                  className="text-l mr-5 text-white w-32 text-center rounded-2xl mt-2 bg-blue-600 "
                  onClick={handleModal}
                >
                  현재위치 추가
                </div>
                {openModal && (
                  <CurrentLocation
                    handleModal={handleModal}
                    setAddress={setAddress}
                    setStringAddress={setStringAddress}
                  />
                )}
                <div className="text-[24px]" onClick={() => console.log(address)}>
                  {stringAddress === '' ? '주소를 설정해주세요' : stringAddress}
                </div>
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
  )
}
