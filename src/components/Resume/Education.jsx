import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
           
 <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className=' w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
 {/* Part One */}
 <div>
      <div className=' py-6 lgl:py-12 font-titleFont flex flex-col gap-4 '>
           <p className=' text-sm text-designColor tracking-[4px]'>2014-2024</p>
           <h2 className='text-2xl md:text-4xl font-bold'>Education Quality</h2>
      </div>
      <div className=' mt-6 lgl:mt-14 border-l-black border-opacity-30 flex flex-col gap-10 w-full h-[1000px] border-l-[6px] border-black'>
           <ResumeCard 
           title="BSc in Information Technology"
           subTitle="Patliputra University (2021-2024)"
           result="70%"
           des="Making memories that will last a lifetime.College day and unforgettable memories Forever grateful for these college memories."
           />
           <ResumeCard
           title="Intermediate"
           subTitle="Satyndra Narayan College (2020-2021)"
           result="67%"
           des=" Inter-college activities can motivate students to succeed.Inter-college activities can expose students to new ideas and perspectives"
            />
           <ResumeCard 
           title="Matriculation"
           subTitle="Surajdeo Memorial School (2019-2020)"
           result="66.5%"
           des="Matriculation school is golden day of our life such a memorable days for all student.It consists of two levels, level 2 junior secondary education"
           />
      </div>
  </div>
 
 {/* Part Two */}
  <div>
      <div className=' py-6 lgl:py-12 font-titleFont '>
          <p className='text-sm text-designColor tracking-[4px]' >2021-2024</p>
          <h2 className=' text-2xl md:text-4xl font-bold'>Job Experience</h2>
      </div>
      <div className=' mt-6 lgl:mt-16 border-l-black border-opacity-30 flex flex-col gap-10 w-full h-[1000px] border-l-[6px] border-black'>
           <ResumeCard 
           title="Python & Trainer"
           subTitle="Softpro India - (2022)"
           result="A++"
           des="Skills and Trainning on Python with Django Framework Glad to be the Co-Ordinator at the workshop. Accomplished the program with 'A++' grade "
           />

          <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="A++"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />

          <ResumeCard 
           title="Lorem ipsum"
           subTitle="Lorem ipsum dolor sit amet."
           result="A++"
           des="Lorem ipsum dolor sit amet consectetur adipscing elit.Tempora itaque accusams corporis dolor debitis natus sapiente, voluptates possimus minima totma!"
           />
 
      </div>
 </div>
 </motion.div>
  )
}

export default Education