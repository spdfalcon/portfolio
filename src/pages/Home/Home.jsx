import React from 'react'
import StartHeader from '../../components/startHeader/StartHeader'
import Projects from '../../components/Projects/Projects'
import ViewAllProjects from '../../components/viewAllProjects/ViewAllProjects'
import TeamPic from '../../components/TeamPic/TeamPic'
import StartProject from '../../components/StartProject/StartProject'
import Frameworks from '../../components/frameworks/frameworks'

export default function Home() {
  return (
    <div className=''>
      <StartHeader></StartHeader>
      <div className='container'>
      <Projects></Projects>
      <ViewAllProjects></ViewAllProjects>
      <Frameworks></Frameworks>
      </div>
      <TeamPic></TeamPic>
      <div className='container'>
        <StartProject></StartProject>
      </div>
    </div>
  )
}
