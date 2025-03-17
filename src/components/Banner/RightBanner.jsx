import React from 'react'
import { logo } from '../../index'

const RightBanner = () => {
  return (
     <div className=' w-full flex justify-center items-center lgl:w-1/2   relative'>
       <img src={logo} className=' w-[280px] h-[280px] lgl:w-[350px] lgl:h-[350px] z-10 rounded-full ' alt="" />
     <div className=' absolute ml-10  w-[450px] h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
         
     </div>

     </div>
  )
}

export default RightBanner