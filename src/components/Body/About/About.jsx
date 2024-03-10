import React from 'react'
import './aboutStyle.css'
import Skills from './Skills'
import Introduction from './Introduction'
import ProfessionalExperience from './ProfessionalExperience'
import SelfMadeProjects from './SelfMadeProjects'

function About() {
    return (
        <div className=''>
            <Introduction/>
            <hr className="hr" />
            <ProfessionalExperience/>
            <hr className="hr" />
            <SelfMadeProjects/>
            <hr className="hr" />
            <Skills/>
        </div>
    )
}

export default About
