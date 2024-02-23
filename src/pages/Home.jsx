import React, {useEffect, useRef, useState} from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const containerRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)
  const [direction, setDirection] = useState('for')
  const navigate = useNavigate()

  const goToLogIn = () => {
    navigate('/LogIn')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let nextTranslateX
      if (direction === 'for') {
        nextTranslateX = translateX + 8
        if (nextTranslateX > 2784) {
          nextTranslateX = 2784
          setDirection('back')
        }
      } else {
        nextTranslateX = translateX - 8
        if (nextTranslateX < 0) {
          nextTranslateX = 0
          setDirection('for')
        }
      }
      setTranslateX(nextTranslateX)
    }, 30)

    return () => clearInterval(interval)
  }, [translateX, direction])

  return (
    <div>
      <Header />
      <div>
        <div className=" absolute translate-y-72">
          <div
            className={`opacity-15 flex translate-y-60`}
            style={{transform: `translateX(${-translateX}px)`}}
            ref={containerRef}
          >
            <div className="text-[700px] ">📆</div>
            <div className=" text-[700px] ml-96 mr-96">⏰</div>
            <div className="text-[700px] mr-96">📆</div>
            <div className="text-[700px] mr-96">⏰</div>
            <div className="text-[700px] mr-96">📆</div>
          </div>
        </div>
        <div className="relative content-center text-center py-48">
          <div>
            <p className="text-[30px] text-black text-center">
              <span className=" font-black ">시간</span>
              <span>과</span>
              <span className="font-black"> 약속 장소</span>
              <span>를 한번에 정해요</span>
            </p>
            <p className="text-[100px] font-bold">Immediate Meetup</p>
          </div>
          <div className="py-36">
            <button
              onClick={goToLogIn}
              type="submit"
              className=" text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] "
            >
              시작하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
