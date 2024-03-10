import React from 'react'
import './IntroductionStyle.css'
import myimage from './img/myimage.jpg'
function Introduction() {
  return (
    <div className='intro'>
      <div className='intro-right'>
        <img className='intro-img rounded-lg' src={myimage} alt="image" />
        <h1></h1>
        <div> <h1 className='text-2xl mb-5 font-bold'>Hello!</h1> 
        <span className='text-xl'>I'm <span className='purple font-bold'>Shivam Vashishtha</span></span>, a passionate and results-driven Java Developer with two years of hands-on experience in creating robust and scalable software solutions. My journey in the world of programming has been fueled by a deep-seated love for building efficient and innovative applications using Java and related technologies.
          <br />
          <br />
          🚀 In my professional journey, I have actively contributed to various projects, from conception to delivery, demonstrating my proficiency in Java development, as well as a solid understanding of software engineering principles. My expertise extends to leveraging popular frameworks such as Spring and Hibernate to streamline development processes and enhance application performance.
          <br />
          <br />
          💡 With a strong foundation in data structures, algorithms, and object-oriented design, I am adept at translating complex business requirements into elegant and maintainable code. Throughout my career, I've been committed to staying abreast of industry trends and adopting best practices to deliver high-quality solutions.
          <br />
          <br />
          🛠️ I have a proven track record of collaborating with cross-functional teams, where I have not only contributed to the technical aspects of projects but also actively participated in discussions to find effective solutions to complex problems. My analytical mindset, coupled with a keen eye for detail, allows me to troubleshoot issues efficiently and optimize code for improved efficiency.
          <br />
          <br />
          🌐 On the technical side, I am well-versed in Java SE and Java EE, and I have experience working with databases, RESTful APIs, and version control systems. I am continually expanding my skill set, always eager to explore new technologies and frameworks that can enhance my development capabilities.
          <br />
          <br />
          📈 I am excited about the opportunity to bring my skills, enthusiasm, and dedication to a dynamic team where I can contribute to the success of innovative projects. If you are seeking a Java Developer with a passion for clean code, problem-solving, and continuous learning, I would love to connect.
          <br />
          <br />
          📧 Feel free to reach out to me at shivam283097@gmail.com to discuss how we can collaborate on exciting projects or explore potential opportunities. Let's build something amazing together!</div>
      </div>
    </div>
  )
}

export default Introduction
