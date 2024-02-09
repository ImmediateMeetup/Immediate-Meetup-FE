import React from 'react'

export default function Button({text, Color, width = 'w-[386px]'}) {
  return (
    <div>
      <button className={`${width} font-black text-[25px] w-[350px] h-[90px] rounded-[15px] bg-[#ff6e6e]`}>
        {text}
      </button>
    </div>
  )
}
