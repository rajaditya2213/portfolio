import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'
const Achievement = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 0.5}}}
     className='w-full flex flex-col lgl:flex-row gap-20 lgl:gap-20'>
      <div>
      <div className=' py-12 font-titleFont '>
           <p className=' text-sm text-designColor tracking-[4px]'>FEATURES</p>
           <h2 className=' text-3xl lgl:text-4xl font-bold'>Company Experience</h2>
      </div>
      <div className=' mt-6 lgl:mt-14 border-l-black border-opacity-30 flex flex-col gap-10 w-full h-[1000px] border-l-[6px] border-black'>
           <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />
           <ResumeCard
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
            />
           <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />
      </div>
  </div>
 
 
 
  <div>
      <div className=' py-12 font-titleFont '>
          <p className='text-sm text-designColor tracking-[4px]' >FEATURES</p>
          <h2 className='text-3xl lgl:text-4xl font-bold'>Job Experience</h2>
      </div>
      <div className=' mt-6 lgl:mt-14 border-l-black border-opacity-30 flex flex-col gap-10 w-full h-[1000px] border-l-[6px] border-black'>
           <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           /> 
            <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />

          <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="SUCCESS"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />
 
      </div>
 </div>
 </motion.div>
  )
}

export default Achievement