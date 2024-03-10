import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import mypic from './img/Mypic.jpg';
import './style.css'

function Home() {

  const el = useRef(null);
  console.log(el)
  
  const names = useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backDelay: 100,
      backSpeed: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }
    , []);

  return (
    <div>
      <section className='firstSection'>
        <div className="leftSection">
          <div>
            <h1 className='text-4xl font-bold mb-4'>Welcome to My Portfolio</h1>
            <div className='text-2xl'>I'm <span className='purple font-bold'>Shivam Vashishtha</span></div>
            <span className='purple font-bold text-2xl' ref={el}></span>
          </div>
          <div className='text-gray-500'>
            Developer with a comprehensive two-year background in end-to-end web application development. Proficient in both front-end technologies (HTML, CSS, JavaScript, React) and back-end frameworks (Java, Spring Boot). Experienced in creating seamless user experiences through responsive design and optimal data flow. Skilled in database management, RESTful API integration, and microservices architecture. A collaborative team member with a keen eye for detail, committed to delivering high-quality solutions that align with business objectives. Continuously expanding skills to adapt to evolving technologies. Excited to contribute to innovative projects that require a holistic approach to development.
          </div>
        </div>
        <div className="rightSection">
          <div>
            <img className='rounded-full' src={mypic} alt="ShivamImage" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
