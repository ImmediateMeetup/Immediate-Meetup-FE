import React from 'react'

export default function Button({text, width = 'w-[386px]'}) {
  return (
    <div>
      <button className={`${width} text-white text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e] `}>
        {text}
      </button>
    </div>
  )
}
