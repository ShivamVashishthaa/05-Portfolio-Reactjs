import React from 'react'
import './ProfessionalExperienceStyle.css'

function ProfessionalExperience() {
  return (
    <section className='SecondSection'>
      <span className='text-gray'>what I have done so far</span>
      <h1 className='purple poppins-bold text-3xl'>Professional Experience:</h1>
      <hr className='mb-5' />
      <div className='exp-box'>
        <div className='exp1'>
          <h1 className='text-xl font-bold'>Java Developer | [Genpact], [Noida, Sector - 59] | [September, 2021] – [December,2023]</h1>
          • Implemented and maintained RESTful APIs for seamless integration with external systems, enhancing the overall functionality of the PBM system.
          <br />
          • Implemented robust and scalable backend solutions using Java and the Spring Framework, seamless integration with frontend components.
          <br />
          • Collaborated with front-end developers, QA engineers, and product managers to deliver features that meet client requirements and quality standards.
          <br />
          • Collaborated with senior developers to troubleshoot and resolve software defects, ensuring the delivery of highquality software products.
          <br />
          • Participated in agile development processes, including sprint planning, daily stand-ups, and retrospective meetings, contributing to an efficient and dynamic development environment.
          <br /><br />
          <h1 className='text-lg font-bold'>Projects:</h1>
          Pharmacy Benefit Manager (PBM) Order Management System
          <br />
          • Role: Java Backend Developer
          <br />
          • Description: Pharmacy Benefit Management (PBM) plays a significant role in the Healthcare industry. It is unique in the manner in which it administers the pharmacy product and focuses on real-time interaction between various entities
          <br />
          <br />
          <span className='text-lg'>KEY CONTRIBUTIONS:</span>
          <br />
          • Implemented secure and scalable RESTful APIs, facilitating seamless integration with external pharmacy systems.
          <br />
          • Implemented Conflict validation Module to verify the drug, NIP and Patient on the order screen.
          <br />
          • Maintain data of the conflict occur if the any of not verify entry entered on the order screen.
          TODO Application using Spring Boot
          <br />
          • Description: A full stack web application to create a Todo list with login authentication using JWT Token, Spring Security and Database as h2, MySQL.
          <br />
        </div>

      </div>
    </section>
  )
}

export default ProfessionalExperience
