import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

const Skill = () => {
  return (
            
 <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition: {duration: 0.5}}}
  className=' w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
 <div className=' w-full lgl:w-1/2'>
      <div className=' py-10 font-titleFont flex flex-col gap-4 '>
           <p className=' text-sm text-designColor tracking-[4px] uppercase'>FEATURES</p>
           <h2 className=' text-2xl md:text-4xl font-bold'>Programming Skill</h2>
      </div>
     <div className=' mt-14 w-full flex flex-col gap-6'>
          <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>C</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[100%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>100%</span>
                   </motion.span>
               </span>
          </div>

          <div>
               <p className=' text-sm uppercase font-medium'>C++</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                   className=' w-[60%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>80%</span>
                   </motion.span>
               </span>
          </div>


          
          <div>
               <p className=' text-sm uppercase font-medium'>PYTHON</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}
                   className=' w-[40%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>40%</span>
                   </motion.span>
               </span>
          </div>

          
          <div>
               <p className=' text-sm uppercase font-medium'>JAVASCRIPT</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}
                   className=' w-[70%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>70%</span>
                   </motion.span>
               </span>
          </div>

          
          <div>
               <p className=' text-sm uppercase font-medium'>jAVA</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}
                   className=' w-[20%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>20%</span>
                   </motion.span>
               </span>
          </div>
           
      </div>
</div>
 
 
 
  <div className=' w-full lgl:w-1/2'>
      <div className=' py-12 font-titleFont flex flex-col gap-4 '>
          <p className='text-sm text-designColor tracking-[4px] uppercase' >FEATURES</p>
          <h2 className=' text-2xl md:text-4xl font-bold'>Development Skill</h2>
      </div>
      <div className=' mt-14 w-full flex flex-col gap-6'>
         <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>HTML</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[100%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>100%</span>
                   </motion.span>
               </span>
          </div>

          <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>CSS</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[90%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>90%</span>
                   </motion.span>
               </span>
          </div>


          <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>JAVASCRIPT</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[80%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>80%</span>
                   </motion.span>
               </span>
          </div>


          <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>GITHUB</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[60%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>60%</span>
                   </motion.span>
               </span>
          </div>

          <div className=' overflow-x-hidden'>
               <p className=' text-sm uppercase font-medium'>REACT JS</p>
               <span className=' w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                   <motion.span 
                   initial={{x: "-100%", opacity:0}}
                   animate={{x: 0, opacity:1}}
                   transition={{duration:0.5, delay:0.5}}

                        className=' w-[70%] relative h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md'>
                    <span className=' absolute -top-7 right-0'>70%</span>
                   </motion.span>
               </span>
          </div>

          
 
      </div>
 </div>
 
     
 </motion.div>
  )
}

export default Skill