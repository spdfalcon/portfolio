import React from 'react'
import Framework from '../Framework/Framework'

export default function Frameworks() {
  return (
    <div className='py-12'>
      <div>
        <h2 className='text-4xl font-inter600'>Tools i use in my daily life as UI/UX Designer 🌤 </h2>
        <h4 className='text-lg text-gray-text2 mt-3'>Work with many big brands, brings for me great experience. </h4>
      </div>
      <div className='flex justify-between mt-16 flex-wrap  gap-5'>
      <Framework bg={'bg-figma-bg'} img={'./img/frameworks/figma.png'} title={'Figma'}></Framework>
      <Framework bg={'bg-adobe-bg'} img={'./img/frameworks/xd.png'} title={'Adobe XD'}></Framework>
      <Framework bg={'bg-illustrator-bg'} img={'./img/frameworks/illustrator.png'} title={'Illustrator'}></Framework>
      <Framework bg={'bg-photoshop-bg'} img={'./img/frameworks/photoshop.png'} title={'Photoshop'}></Framework>
      <Framework bg={'bg-notion-bg'} img={'./img/frameworks/vector.png'} title={'Notion'}></Framework>
      <Framework bg={'bg-asana-bg'} img={'./img/frameworks/asana.png'} title={'Asana'}></Framework>
      <Framework bg={'bg-marvel-bg'} img={'./img/frameworks/marvel.png'} title={'Marvel'}></Framework>
      </div>
    </div>
  )
}
