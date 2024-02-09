import React, {useEffect, useRef, useState} from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Home() {
  const containerRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      let nextTranslateX = translateX + 8
      if (nextTranslateX > 2784) {
        nextTranslateX = 0
      }
      setTranslateX(nextTranslateX)
    }, 30)

    return () => clearInterval(interval)
  }, [translateX])

  return (
    <div>
      <Header />
      <div>
        <div className="z-10 absolute translate-y-72">
          <div
            className={`opacity-15 flex translate-y-60`}
            style={{transform: `translateX(-${translateX}px)`}}
            ref={containerRef}
          >
            <div className="text-[600px] ">📆</div>
            <div className=" text-[600px] ml-96 mr-96">⏰</div>
            <div className="text-[600px] mr-96">📆</div>
            <div className="text-[600px] mr-96">⏰</div>
            <div className="text-[600px] mr-96">📆</div>
          </div>
        </div>
        <div className="relative z-20 content-center text-center py-48">
          <div>
            <p className="text-[30px] text-black text-center">
              <span className=" font-black ">시간</span>
              <span>과</span>
              <span className="font-black"> 약속 장소</span>
              <span>를 한번에 정해요</span>
            </p>
            <p className="text-[100px] font-bold ">Immediate Meetup</p>
          </div>
          <div className="py-36">
            <Button text="시작하기" color="#ff6e6e" width="350px" />
          </div>
        </div>
      </div>
    </div>
  )
}
