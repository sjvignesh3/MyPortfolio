import React from 'react'
import  GithubIcon  from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <GithubIcon onClick={() => window.open('https://github.com/sjvignesh3','_blank')}/>
          <LinkedinIcon onClick={() => window.open('https://www.linkedin.com/in/vigneshwaran3/','_blank')}/>
          <EmailIcon onClick={() => window.open('mailto:sjvignesh333@gmail.com','_blank')}/>
        </div>
        <p> &copy; 2022 sjvignesh.com</p>
    </div>
  )
}

export default Footer