import React from 'react'
import '../styles/Projects.css'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from '../helpers/ProjectList.js'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project,ind) => {
          return <ProjectItem id={ind} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects