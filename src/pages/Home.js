import React from 'react'
import GithubIcon  from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'
import { Skills } from '../helpers/Skills'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, this is Vignesh </h2>
            <div className='prompt'><p> A Software developer with a passion to learn and create </p>
            <GithubIcon onClick={() => window.open('https://github.com/sjvignesh3','_blank')}/>
            <LinkedinIcon onClick={() => window.open('https://www.linkedin.com/in/vigneshwaran3/','_blank')}/>
            <EmailIcon onClick={() => window.open('mailto:sjvignesh333@gmail.com','_blank')}/>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
        </div>
        <div className='progress'>
            {Skills.map((ele) => {
                return (
                    <div>
                        <h1>{ele.skill}</h1>
                        <div className='progress-bar'>
                            <div style={{width: ele.rate}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home