import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {FaGithub,FaTwitter,FaLinkedin,FaReact} from "react-icons/fa";
import {SiTailwindcss, SiHtml5, SiCplusplus,SiJavascript, SiReact} from "react-icons/si";


const LeftBanner = () => {
     const[text]=useTypewriter({
          words:["Frontend Developer.", "Professional Coder.", "UI Designer."],
          loop:true,
          typeSpeed:20,
          deleteSpeed:10,
          delaySpeed:2000,
     });

  return (

     <div className=' w-full  lgl:w-1/2 flex flex-col  gap-20'>
     <div className=' flex flex-col gap-5'>
          <h4 className='  text-lg font-normal'>WELCOME TO MY WORLD</h4>
           <h1 className=' text-6xl font-bold text-white'>Hi, I'am {" "} <span className=' text-designColor capitalize'>Aditya raj</span></h1>
           <h2 className=' text-4xl font-bold text-white'>
               a <span>{text}</span>
               <Cursor
               cursorBlinking="false"
               cursorStyle=""
               cursorColor='#ff014f'
               />
           </h2>
           <p className=' text-base font-bodyFont tracking-wide leading-6'>Hey myself Aditya Raj. I am student in Information Technology from AN College. and Highly motivated and detail-oriented Frontend Developer with a strong foundation in web development technologies. Proficient in HTML,CSS and Javascript, with focus on responsive design cross-browser compatibility.</p>
     </div>
     <div className=' flex flex-col  lgl:flex-row gap-4 mb-14 lgl:gap-0 justify-between'>
        <div>
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
          <div>
          <div>
   <h2 className=' text-base uppercase font-titleFont mb-4'>Find me in</h2>
            <div className=' flex gap-4'>
               <span className='bannerIcon'>
                    <SiJavascript />
               </span>
               <span className='bannerIcon'>
                    <SiReact />
               </span>
               <span className='bannerIcon'>
                    <SiTailwindcss />
               </span>
               <span className='bannerIcon'>
                    < SiHtml5 />
               </span>
               <span className='bannerIcon'>
                    < SiCplusplus />
               </span>
            </div>
      </div>
          </div>

     </div>


</div>
  )
}

export default LeftBanner