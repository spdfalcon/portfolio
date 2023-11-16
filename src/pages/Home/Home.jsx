import React from 'react'
import StartHeader from '../../components/startHeader/StartHeader'
import Projects from '../../components/Projects/Projects'
import ViewAllProjects from '../../components/viewAllProjects/ViewAllProjects'
import TeamPic from '../../components/TeamPic/TeamPic'
import StartProject from '../../components/StartProject/StartProject'
import Fworks from '../../components/Fworks/Fworks'
import userScroll from '../../hooks/useScroll'
export default function Home() {
  userScroll()
  return (
    <div className=''>
      <StartHeader></StartHeader>
      <div className='container'>
      <Projects></Projects>
      <ViewAllProjects></ViewAllProjects>
      <Fworks></Fworks>
      </div>
      <TeamPic></TeamPic>
      <div className='container'>
        <StartProject></StartProject>
      </div>
    </div>
  )
}
