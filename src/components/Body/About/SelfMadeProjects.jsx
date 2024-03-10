import React from 'react'
import { Link } from 'react-router-dom'

function SelfMadeProjects() {
  return (
    <div>
      <section className='SecondSection'>
        <span className='text-gray'>what I have done so far</span>
        <h1 className='purple poppins-bold text-3xl'>Self Made Projects:</h1>
        <hr className='mb-5' />
        <div className='exp-box'> 
          <div className="project3 ">
            <div>
              <h1 className='text-xl font-bold mb-2'><Link to="" >Contact Manager</Link></h1>
              <div className='text-sm italic underline text-gray-500'>Discription :</div>
              <div>This application store contact information of a particular user</div>
              <div>Project have a facility to login as an Admin or an User</div>
              <div>User can perform CRUD opertaion on the contacts</div>
              <br />
              <div className='text-sm italic underline text-gray-500'>Languages :</div>
              <div>Html, Css, thymeleaf, Java, SpringBoot, Hibernate, MySQL</div>
            </div>
          </div>
          <hr className='hr' />
          <div className="project2 ">
            <div>
              <h1 className='text-xl font-bold mb-2'><Link to="" >Todo Application</Link></h1>
              <div className='text-sm italic underline text-gray-500'>Discription :</div>
              <div>This Applicatioin store the todo information and perform CRUD operations on Todo</div>
              <br />
              <div className='text-sm italic underline text-gray-500'>Languages :</div>
              <div>Html, Css, JavaScript, Reactjs, Spring boot, Hibernate, Mysql</div>
            </div>
          </div>
          <hr className='hr' />
        </div>
      </section>
    </div>
  )
}

export default SelfMadeProjects