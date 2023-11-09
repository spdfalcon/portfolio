import React from 'react'
import { Link } from 'react-router-dom'

export default function WorkProject({title , desc , img ,type1 , type2 , type3 , id}) {
  return (
    <div className='flex justify-center'>
      <Link to={`/work/${id}`} className='flex flex-col w-fit'>
        <div className='img up'>
            <img className='' src={img}/>
        </div>
        <div className='down mt-5 flex items-center justify-between'>
            <div className='left'>
                <h3 className='text-2xl font-inter800 text-[#344054]'>{title}</h3>
                <p className='text-[#667085] mt-2'>{desc}</p>
            </div>
            <div className='right text-[#667085] text-sm flex gap-1 items-center'>
                <span>{type1}</span>
                <span className='w-1 h-1 bg-[#d0d5dd] rounded-full'></span>
                <span>{type2}</span>
                <span className='w-1 h-1 bg-[#d0d5dd] rounded-full'></span>
                <span>{type3}</span>
            </div>
        </div>
      </Link>
    </div>
  )
}
