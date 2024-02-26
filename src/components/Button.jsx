import React from 'react'

export default function Button({text, width = 'w-[350px]', onClick}) {
  return (
    <div>
      <button
        className={`${width} text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e]`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}
