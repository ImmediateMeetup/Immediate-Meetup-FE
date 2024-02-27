import React, {useState} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'
import CurrentLocation from '../../components/Maps/CurrentLocation'

export default function TeamDetail() {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div
      className="mx-72 border-2 py-12 px-6 rounded-lg shadow-lg bg-white overflow-y-auto"
      style={{maxHeight: '60vh'}}
    >
      <div className=" py-4">
        <div className="w-[300px] h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle ml-10">
          <div className="flex mt-2 ml-2">
            <div className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 ">
              심유진
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center ">
            <ReceiveTimeTable />
            <CurrentLocation />
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
          <button className=" text-right flex text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-black">
            나가기
          </button>
        </div>
      </div>
    </div>
  )
}
