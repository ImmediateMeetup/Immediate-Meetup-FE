import React, {useState} from 'react'
import {getMeetingDetail} from '../../apis'

export default function comment() {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([newComment, ...comments])
      setNewComment('')
    }
  }
  return (
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
  )
}
