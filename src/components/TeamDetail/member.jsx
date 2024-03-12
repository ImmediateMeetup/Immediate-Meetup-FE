import React from 'react'

export default function member({participate}) {
  return (
    <div className="flex mt-2 ml-2">
      {participate.map((participant, index) => (
        <div
          key={index}
          className="mr-3 text-center flex flex-col-reverse justify-center align-middle text-white text-[15px] w-[80px] h-[30px] rounded-[12px] bg-rose-300 "
        >
          {participant}
        </div>
      ))}
    </div>
  )
}
