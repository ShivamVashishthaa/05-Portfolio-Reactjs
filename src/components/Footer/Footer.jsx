import React from 'react'
import mail from './img/mail.png';
import linkedin from './img/linkedin.png';
import insta from './img/insta.png';
import fb from './img/facebook.png';
// import mail from './img/mail.png';
// import mail from './img/mail.png';

import './footerstyle.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (

        <footer className='footer'>
            <div className="footer-upper">
                <div className='footer-first'>
                    <div className="purple poppins-bold text-2xl ms-10">
                        <Link to="" >&lt;/&gt; Shivam's Portfolio</Link>
                    </div>
                </div>
                <div className='footer-second'>
                    <div className='links' ><Link to="" >Home</Link></div>
                    <div className='links' ><Link to="about" >About</Link></div>
                    {/* <div className='links' ><Link to="" >Service</Link></div> */}
                    {/* <div className='links' ><Link to="" >Projects</Link></div> */}
                    {/* <div className='links' ><Link to="" >Contact Me</Link></div> */}
                </div>
            </div>
            <hr className='hr' />
            <div className="footer-bottom">
                <div>
                    <span>© 2024 </span>
                    <span><Link to=''>Shivam's Portfolio</Link></span>
                    <span>. | All Rights Reserve</span>
                </div>
                <div className='icons'>
                    <div className='footer-icon'><Link to="https://github.com/ShivamVashishthaa"><img src={linkedin} alt="Git logo" /></Link></div>
                    {/* <div className='footer-icon'><Link to=""><img src={mail} alt="mail logo" /></Link></div> */}
                    <div className='footer-icon'><Link to="http://www.linkedin.com/in/shivamvashishtha1"><img src={insta} alt="Linkedin logo" /></Link></div>
                    {/* <div className='footer-icon'><Link to=""><img src={fb} alt="Facebook logo" /></Link></div> */}
                </div>
            </div>
        </footer>
        //        <footer class="bg-white dark:bg-gray-900 bottom-0 left-0 right-0 mt-10">
        //        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        //            <div class="md:flex md:justify-between">
        //                <div class="mb-6 md:mb-0">
        //                    <Link href="" class="flex items-center">
        //                        <img src="" class="h-8 me-3" alt="Logo" />
        //                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyNotes</span>
        //                    </Link>
        //                </div>
        //                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        //                    <div>
        //                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        //                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
        //                            <li class="mb-4">
        //                                <Link href="" class="hover:underline">Flowbite</Link>
        //                            </li>
        //                            <li>
        //                                <Link href="" class="hover:underline">Tailwind CSS</Link>
        //                            </li>
        //                        </ul>
        //                    </div>
        //                    <div>
        //                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
        //                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
        //                            <li class="mb-4">
        //                                <Link href="" class="hover:underline ">Github</Link>
        //                            </li>
        //                            <li>
        //                                <Link href="" class="hover:underline">Discord</Link>
        //                            </li>
        //                        </ul>
        //                    </div>
        //                    <div>
        //                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
        //                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
        //                            <li class="mb-4">
        //                                <Link href="#" class="hover:underline">Privacy Policy</Link>
        //                            </li>
        //                            <li>
        //                                <Link href="#" class="hover:underline">Terms &amp; Conditions</Link>
        //                            </li>
        //                        </ul>
        //                    </div>
        //                </div>
        //            </div>
        //            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //            <div class="sm:flex sm:items-center sm:justify-between">
        //                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="" class="hover:underline">MyNotes</Link>. All Rights Reserved.
        //                </span>
        //                <div class="flex mt-4 sm:justify-center sm:mt-0">
        //                    <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">

        //                        <span class="sr-only">Facebook page</span>
        //                    </Link>
        //                    <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

        //                        <span class="sr-only">Discord community</span>
        //                    </Link>
        //                    <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

        //                        <span class="sr-only">Twitter page</span>
        //                    </Link>
        //                    <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

        //                        <span class="sr-only">GitHub account</span>
        //                    </Link>
        //                    <Link href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

        //                        <span class="sr-only">Dribbble account</span>
        //                    </Link>
        //                </div>
        //            </div>
        //        </div>
        //    </footer>

    )
}

export default Footer
