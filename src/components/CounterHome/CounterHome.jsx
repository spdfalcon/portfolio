import React from 'react'

export default function CounterHome({title , count}) {
  return (
    <div>
      <div className='relative w-fit h-fit'>
        <div className='text-9xl text-gray-text4'>{count}</div>
        <div className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-[21px]'>{title}</div>
      </div>
    </div>
  )
}
