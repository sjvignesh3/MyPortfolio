import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="Resource not found"/>
        <p><b>Skills : </b>{project.skills}</p>
        <GitHubIcon onClick={() => {window.open('https://www.youtube.com/watch?v=x7mwVn2z3Sk&t=1255s','_blank')}}/>
    </div>
  )
}

export default ProjectDisplay