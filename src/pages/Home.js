import React from 'react'
import  GithubIcon  from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My name is Vignesh </h2>
            <div className='prompt'><p> A Software developer with a passion to learn and create </p>
            <GithubIcon onClick={() => window.open('https://github.com/sjvignesh3','_blank')}/>
            <LinkedinIcon onClick={() => window.open('https://www.linkedin.com/in/vigneshwaran3/','_blank')}/>
            <EmailIcon onClick={() => window.open('mailto:sjvignesh333@gmail.com','_blank')}/>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>ReactJS, Redux, HTML, CSS, NPM, MaterialUI</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>NodeJS, Java Spring, PostgreSQL, AWS S3 </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>Java, JavaScript, C, Solidity, PHP</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home