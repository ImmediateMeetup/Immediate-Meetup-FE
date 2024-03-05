import React, {useState} from 'react'
import ReceiveTimeTable from '../../components/TimeTable/ReceiveTimeTable'
import Button from '../../components/Button'
import Header from '../../components/Header'

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
    <>
      <Header />
      <div className="mx-72 py-24">
        <div className="flex justify-around items-center">
          <div className=" py-4">
            <div className="w-[270px] h-[50px] border-2 rounded-[15px] border-rose-200 flex align-middle mb-12 ml-10">
              <div className="flex mt-2 ml-2">
                <div className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 ">
                  심유진
                </div>
              </div>
            </div>
<<<<<<< Updated upstream
            <ReceiveTimeTable />
            <button className="ml-10 text-center mt-20 text-white text-[22px] w-[250px] h-[70px] rounded-[15px] bg-[#ff6e6e] ">
              수정완료
            </button>
          </div>
          <div>
            <div className="text-[25px]"> 참가 인원 1 / 3</div>
            <div className="text-[400px]">🗺️</div>
          </div>
        </div>
        <div className="w-[full] mt-20">
          <div className="text-[20px] ml-2 mb-2">댓글</div>
          <div className="w-[full] h-[60px] border-2 rounded-[20px] border-rose-200 flex align-middle">
            <input
              type="text"
              className="flex-grow p-2 rounded-l-[20px] border-none"
              placeholder=" 댓글을 입력하세요 ..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-r-[20px] hover:bg-blue-600"
              onClick={addComment}
            >
              추가
            </button>
          </div>
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="mt-2 p-2 border rounded">
                {comment}
=======
            <div className="flex items-center mb-6 justify-center">
              <div className="flex mt-4">
                <ReceiveTimeTable />
                <div className="ml-40">
                  <div>약속장소는 다음과 같아요</div>
                  <div className="  font-['Pretendard']  text-2xl">{data.place}</div>
                  <button className=" my-2 text-xl bg-blue-500 text-white px-4 rounded-lg" onClick={addComment}>
                    현재위치 변경
                  </button>
                </div>
>>>>>>> Stashed changes
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
