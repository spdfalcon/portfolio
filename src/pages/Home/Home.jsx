import React from 'react'
import StartHeader from '../../components/startHeader/StartHeader'
import Projects from '../../components/Projects/Projects'
import ViewAllProjects from '../../components/viewAllProjects/ViewAllProjects'
import Frameworks from '../../components/frameworks/frameworks'

export default function Home() {
  return (
    <div className='container'>
      <StartHeader></StartHeader>
      <Projects></Projects>
      <ViewAllProjects></ViewAllProjects>
      <Frameworks></Frameworks>
    </div>
  )
}
