import React from 'react'
import {FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa"
import {logo} from "../../index"


const Footer = () => {
  return (

    <div className=' w-full h-full py-20 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 '>
      <div className=' w-full h-full flex flex-col gap-8 '>
        <img src={logo} alt="logo" className='w-16 rounded-full h-16' />
        <div className=' flex gap-4'>
          <a href="https://github.com/rajaditya2213">
          <span className='bannerIcon'><FaGithub /></span>
          </a>
               <a href="https://twitter.com/AdityaRaj110619">
                  <span className='bannerIcon'><FaTwitter /></span>
               </a>

               <a href="https://www.linkedin.com/in/aditya-raj-27472a264/" target="_blank">
                  <span className='bannerIcon'><FaLinkedin /></span>
               </a>
          </div>
      </div>
      <div className=' w-full h-full'>
        <h3 className=' text-xl uppercase text-designColor tracking-wider'>Qucik Link</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>About   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Portfolio   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Services   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
         
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Blog   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Contact   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
        </ul>
      </div>


      <div className=' w-full h-full '>
      <h3 className=' text-xl uppercase text-designColor tracking-wider'>Resources</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>System Status   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
         
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Term of Services   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
         
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Pricing   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Over Right<span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
        </ul>
      </div>
      <div className=' w-full h-full '>
      <h3 className=' text-xl uppercase text-designColor tracking-wider'>Developers</h3>
        <ul className=' flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Documention   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Authentication   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
         
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>API Reference   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
         
          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Support   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>

          <li><span  className=' w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>Open Source   <span className=' h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 absolute '></span></span></li>
        </ul>
      </div>
     </div>
  )
}
export default Footer
