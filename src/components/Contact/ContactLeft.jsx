import React from 'react'
import {FaGithub, FaTwitter, FaLinkedin, FaLinode} from "react-icons/fa"
import { contactImg } from '../../index'


const ContactLeft = () => {
  return (
     <div className='  lgl:w-[35%] w-full h-full bg-gradient-to-r rounded-lg shadow-shadowOne from-[#1e2024] to-[#23272b] p-4 lgl:p-8 flex flex-col gap-4 justify-center'>
     <img className=' w-full h-64 object-cover rounded-lg mb-2 ' src={contactImg} alt="contactImg" />
     <div className=' flex flex-col gap-4'>
          <h3 className=' text-3xl font-bold text-white'>Aditya Raj</h3>
          <p className=' text-lg font-normal text-gray-400'>FRONT-END DEVELOPER</p>
          <p className=' text-base text-gray-400 tracking-wide'>Hey, I m Frontend developer builds the front-end portion of websites and web applications.</p>
          <p className=' text-base text-gray-400 flex items-center gap-2'>Phone: <span className=' text-lightText'>+918210227170</span></p>
          <p className='text-base text-gray-400 flex items-center gap-2'>Email: {" "} <span className='text-lightText'>adityaraj2201arya@gmail.com</span></p>
     </div>
     <div className=' flex flex-col gap-4'>
          <h2 className=' text-base uppercase font-titleFont mb-4'>Find me in</h2>
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
</div>
  )
}

export default ContactLeft
