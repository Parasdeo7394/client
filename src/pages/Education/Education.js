import React from 'react';
import {MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
       <div className="education" id='education'>
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>EDUCATION DETAILS</h2>
          <hr />
          <VerticalTimeline>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  blue' }}
              date="2014 - 2018"
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}
            >
              <h3 className="vertical-timeline-element-title">Btech(Mech Engg)</h3>
              <h4 className="vertical-timeline-element-subtitle">MIT MUZAFFARPUR</h4>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  blue' }}
              date="2012 - 2014"
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}
            >
              <h3 className="vertical-timeline-element-title">BCECE </h3>
              <h4 className="vertical-timeline-element-subtitle">Rank-123</h4>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  blue' }}
              date="2010 - 2012"
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}
            >
              <h3 className="vertical-timeline-element-title">10+2</h3>
              <h4 className="vertical-timeline-element-subtitle">K.S COLLEGE ,LAHERAISARAI ,DARBHANGA</h4>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  blue' }}
              date="2010 "
              iconStyle={{ background: '#138781', color: '#fff' }}
              icon={<MdSchool/>}
            >
              <h3 className="vertical-timeline-element-title">10 th</h3>
              <h4 className="vertical-timeline-element-subtitle">B.D.Y HIGH SCHOOL POHADDI BELA</h4>
              
            </VerticalTimelineElement>
          </VerticalTimeline>
       </div>
    </>
  )
}

export default Education