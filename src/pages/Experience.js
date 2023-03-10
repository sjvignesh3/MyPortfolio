import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#f74a00'>
            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='2006-2018'
            iconStyle={{background: '#000000', color: '#fff'}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>St. Patrick's Academy Matriculation Hr. Sec. School, Vedasandur, Dindigul</h3>
                <p>Pre High School</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='2018-2020'
            iconStyle={{background: '#000000', color: '#fff'}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>Sri Krishna Matriculation Hr. Sec. School, Ottanchatram, Dindigul</h3>
                <p>High School (Bio-Math)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            date='2020-Present'
            iconStyle={{background: '#f74a00', color: '#fff'}}
            icon={<SchoolIcon />}>
                <h3 className='vertical-timeline-element-title'>National Engineering College, Nallatinputhur, Kovilpatti</h3>
                <p>BE Computer Science & Engineering</p>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
  )
}

export default Experience