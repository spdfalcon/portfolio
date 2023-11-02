import React from 'react'

export default function Framework({bg , img , title}) {
  return (
    <div className='flex justify-center items-center w-[160px]'>
      <div className={`py-10 px-10 ${bg} flex flex-col items-center justify-center gap-2 rounded-xl w-full h-full`}>
        <img className='' src={img}/>
        <span className=''>{title}</span>
      </div>
    </div>
  )
}
