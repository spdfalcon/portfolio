import React from 'react'

export default function StartHeader() {
  return (
    <div>
        <div className='px-[150px] py-20 bg-gradient-to-r from-gradient-headerB1 from-20% via-gradient-headerB2 via-80% to-gradient-headerB3 to-90% flex'>
            <div className='left p-16'>
                <h1 className='font-inter800 text-[43px]'>Welcome to my new Creative World!</h1>
                <p className='font-inter500 text-xl'>Kirit Goti is a designer focused on building brands and creating digital experiences — currently working at TechHive</p>
                <button>Let’s Get Started</button>
            </div>
            <div className='right'>
                <img src="./img/startheader/1.png" />
            </div>
        </div>
    </div>
  )
}
