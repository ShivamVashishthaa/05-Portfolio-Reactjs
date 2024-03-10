import React from 'react'
import htmllogo from './img/html.png';
import csslogo from './img/css.png';
import jslogo from './img/js.png';
import Reactlogo from './img/R.png';
import javalogo from './img/java.png';
import mySql from './img/mysql.png';
import spring from './img/spring.png';
import hibernate from './img/hibernate.png';
import './SkillsStyle.css';

function Skills() {
  return (
    <section className='ThirdSection'>
      <>
        {/* <div className='skills'>
        <h1 className='purple poppins-bold text-3xl'>Skills :</h1>
        <hr className='mb-5' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={htmllogo} alt="" /></span>
            <div id='html' className='text-xl'>HTML :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='html-description'>
            <span className='description'></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={csslogo} alt="" /></span>
            <div id='css' className='text-xl '>Css :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='css-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={jslogo} alt="" /></span>
            <div id='js' className='text-xl'>JavaScript :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='css-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={Reactlogo} alt="" /></span>
            <div id='Reactjs' className='text-xl'>Rectjs :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='Reactjs-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={javalogo} alt="" /></span>
            <div id='java' className='text-xl'>Java :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='java-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={spring} alt="" /></span>
            <div id='SB' className='text-xl'>SpringBoot :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='SB-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={hibernate} alt="" /></span>
            <div id='Hibernate' className='text-xl'>Hibernate :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='Hibernate-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />
        <div className='skill'>
          <div className='first'>
            <span ><img className='skillLogo' src={mySql} alt="" /></span>
            <div id='MySql' className='text-xl'>MySql :  &#40; 2021 - 2024 &#41;</div>
          </div>
          <div className="second" id='MySql-description'>
            <span className='description' ></span>
          </div>
        </div>
        <hr className='hr' />

      </div> */}
      </>
      <h1 className='purple poppins-bold text-3xl'>Skills :</h1>
      <hr className='mb-5' />
      <div className='skills'>
        <h1 className='purple poppins-bold text-xl'>For Front-end :</h1>
        <div className='skill'>
          <div className=" flex justify-center flex-col" id='html-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={htmllogo} alt="" /></div>
            <div id='html' className='text-xl'>HTML</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='css-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={csslogo} alt="" /></div>
            <div id='css' className='text-xl'>Css</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='js-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={jslogo} alt="" /></div>
            <div id='js' className='text-xl'>JavaScript</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='react-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={Reactlogo} alt="" /></div>
            <div id='react' className='text-xl'>React.js</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
        </div>
      </div>
      <hr className='hr' />
      <div className='skills'>
        <h1 className='purple poppins-bold text-xl'>For Back-end :</h1>
        <div className='skill'>
          <div className=" flex justify-center flex-col" id='javaSkill'>
            <div className='self-center mb-4'><img className='skillLogo' src={javalogo} alt="" /></div>
            <div id='java' className='text-xl'>Java</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='spring-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={spring} alt="" /></div>
            <div id='spring' className='text-xl'>SpringBoot</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='hibernate-description'>
            <div className='self-center mb-4'><img className='w-96 skillLogo' src={hibernate} alt="" /></div>
            <div id='hibernate' className='text-xl'>Hibernate</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
          <div className=" flex justify-center flex-col" id='sql-description'>
            <div className='self-center mb-4'><img className='skillLogo' src={mySql} alt="" /></div>
            <div id='mysql' className='text-xl'>MySql</div>
            <div>&#40; 2021 - 2024 &#41;</div>
          </div>
        </div>
      </div>
      <hr className='hr' />
    </section>

  )
}

export default Skills
