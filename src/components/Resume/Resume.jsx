import React, { useState } from 'react'
import Title from '../Layout/Title'
import Education from './Education'
import Skill from './Skill'
import Achievement from './Achievement'
import Experience from './Experience'


const Resume = () => {
     const [educationData, setEducationData]=useState(true);
     const [skillData, setSkillData]=useState(false);
     const [experienceData, setExperienceData]=useState(false);
     const [achievementData, setAchievementData]=useState(false);

  return (
    <section
    id='resume'
    className='w-full py-20 border-b-[1px] border-b-black'
    >
     <div className='flex justify-center items-center text-center'>
          <Title 
          title="FRESHERS"
          des="My Resume"
          />
     </div>
     <div>
          <ul className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4'>
               <li
               onClick={()=>
               setEducationData(true) &
               setSkillData(false) &
               setExperienceData(false) &
               setAchievementData(false)
          }
                className={`${educationData ?"border-designColor rounded-lg":" "}resumeLi`}>Education</li>
               <li 
               onClick={()=>
                    
                    setEducationData(false) &
                    setSkillData(true) &
                    setExperienceData(false) &
                    setAchievementData(false)
               }
                className={`${skillData ? " border-designColor rounded-lg":" "}resumeLi`}>Professional Skills</li>
               <li
               onClick={()=>
                    setEducationData(false) & 
                    setSkillData(false) &
                    setExperienceData(true) &
                    setAchievementData(false)
               }
                className={`${experienceData ? "border-designColor rounded-lg ":""}resumeLi`}>Experince</li>
               <li
               onClick={()=>
                    setEducationData(false) &
                    setSkillData(false) &
                    setExperienceData(false) &
                    setAchievementData(true)
               }
                className={`${achievementData ?" border-designColor rounded-lg":""}resumeLi`}>Achievements</li>
          </ul>
     </div>
     {
          educationData && <Education />
     }
     {
          skillData && <Skill />
     }
     {
          experienceData && <Experience />
     }

     {
         achievementData && <Achievement />   
     }

     {/* <Education /> */}
     {/* <Skill /> */}
     {/* <Achievement /> */}
     {/* <Experience /> */}
    </section>
  )
}

export default Resume