import React from 'react'

export default function Input({type, name, placeHolder, defaultValue, width = 'w-[386px]', changeEvnet}) {
  return (
    <div className="flex flex-col mb-5 ">
      <input
        type={type}
        id={name}
        placeholder={placeHolder}
        className={`${width} h-[55px] rounded-md border border-stone-300 outline-none placeholder:text-stone-300 text-xl pl-5`}
        spellCheck={false}
        defaultValue={defaultValue}
        onChange={changeEvnet}
      />
    </div>
  )
}
