import React from 'react'
import {BsGithub} from "react-icons/bs"
import {FaGlobe} from "react-icons/fa"

const ProjectCard = ({title,des, src,link}) => {
  return (
    <div className=' w-full xl:px-10 h-auto p-4 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
      <div className=' w-full h-[80%] overflow-hidden rounded-lg'>
         <img className=' w-full h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="src" />
      </div>
      <div className=' w-full mt-5 flex flex-col gap-6'>
        <div className=' flex justify-between items-center'>
        <h3 className='  uppercase text-designColor font-normal text-sm'>{title}</h3>
        <div className=' flex gap-2'>
          <span className=' text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer'>
            <BsGithub />
         
            </span>

            <span className=' text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-cursor-pointer'
          >
            <FaGlobe />
            </span>
        </div>
        </div>
        <div>
          <p className=' text-sm tracking-wide mt-3 hover:text-gray-300 duration-300'>{des}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard