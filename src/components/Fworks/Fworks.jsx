import React from 'react'
import Fork from '../Fwork/Fwork'
import Fwork from '../Fwork/Fwork'

export default function Fworks() {
  return (
    <div className='py-12'>
      <div>
        <h2 className='text-2xl lg:text-4xl font-inter600'>Tools i use in my daily life as UI/UX Designer 🌤 </h2>
        <h4 className='text-sm lg:text-lg text-gray-text2 mt-3'>Work with many big brands, brings for me great experience. </h4>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 mt-16  gap-3'>
      <Fwork id={1} bg={'bg-figma-bg'} img={'./img/frameworks/figma.png'} title={'Figma'}></Fwork>
      <Fwork id={2} bg={'bg-adobe-bg'} img={'./img/frameworks/xd.png'} title={'Adobe XD'}></Fwork>
      <Fwork id={3} bg={'bg-illustrator-bg'} img={'./img/frameworks/illustrator.png'} title={'Illustrator'}></Fwork>
      <Fwork id={4} bg={'bg-photoshop-bg'} img={'./img/frameworks/photoshop.png'} title={'Photoshop'}></Fwork>
      <Fwork id={5} bg={'bg-notion-bg'} img={'./img/frameworks/vector.png'} title={'Notion'}></Fwork>
      <Fwork id={6} bg={'bg-asana-bg'} img={'./img/frameworks/asana.png'} title={'Asana'}></Fwork>
      <Fwork id={7} bg={'bg-marvel-bg'} img={'./img/frameworks/marvel.png'} title={'Marvel'}></Fwork>
      </div>
    </div>
  )
}
