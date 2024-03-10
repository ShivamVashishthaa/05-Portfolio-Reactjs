import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './headerstyle.css'

function Header() {
  const [theme, setTheme] = useState(false)
  useEffect(() => {
    const check = document.querySelector("#checkbox");

    if (theme) document.body.classList.add('dark-mode')

    else document.body.classList.remove('dark-mode')

  }, [theme]
  )
  const themeChange = () => {

    if (theme) setTheme(false)

    else setTheme(true)

  }

  return (
    <header id='head'>
      <nav className=''>
        <div className="header-left purple poppins-bold text-2xl ms-10">
          <Link to="" >&lt;/&gt; Shivam's Portfolio</Link>
        </div>
        <div className="header-right me-10">
          <ul className='navList'>
            <li className='links' ><Link to="" >Home</Link></li>
            <li className='links' ><Link to="about" >About</Link></li>
            {/* <li className='links' ><Link to="" >Service</Link></li> */}
            {/* <li className='links' ><Link to="" >Projects</Link></li> */}
            {/* <li className='links' ><Link to="" >Contact Me</Link></li> */}
            {/* <li className='toggle-btn'> */}
            <input type="checkbox" name="" id="checkbox" onChange={themeChange} />
            <label htmlFor="checkbox" className='toggle-label'>
              {/* <span className='toggle-ball'></span> */}
              <svg stroke="" fill="gray" stroke-width="0" viewBox="0 0 16 16" class="hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>
            </label>

            {/* </li> */}
          </ul>
        </div>
      </nav>
      <hr />
      <div className='header-bottom ' >
        <button className='ms-10'><Link to="" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-purple-700 text-xl cursor-pointer dark:text-purple-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg></Link></button>
        <div className='flex poppins-bold purple'>
          <Link className='links' to="" >Home</Link>
          <Link className='links' to="about" >About</Link>
          {/* <Link className='links' to="" >Service</Link> */}
          {/* <Link className='links' to="" >Projects</Link> */}
          {/* <Link className='links' to="" >Contact</Link> */}
        </div>
        <input type='search' className='poppins-regular me-10 w-52 bg-gray-200 rounded-xl border-solid text-base px-4 h-6' placeholder='search' />
      </div>
    </header>
  )
}

export default Header
