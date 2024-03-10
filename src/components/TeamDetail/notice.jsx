import React from 'react'

export default function Notice({noticeText}) {
  return (
    <>
      <div className="py-5 px-6 rounded-lg shadow-lg bg-rose-50 overflow-y-auto flex flex-row text-xl text-left w-[900px]">
        <div className="-scale-x-100 mx-2">📢</div>
        <div>{noticeText}</div>
      </div>
    </>
  )
}
