import React from 'react'
import Title from "../Layout/Title"
import {project, projectOne, projectTwo,projectThree,projectFour,projectFive,projectSix} from "../../index"
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects'
    className=' w-full py-20 border-b-[1px] border-b-black'
    >
    <div className=' flex justify-center items-center text-center'>
    <Title
     title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
     des="My Projects"
      /> 
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-14'>
       <ProjectCard 
       title="SHOPPING CART"
       des="Create a Shopping Crat website using Reactjs. It is an essential part of a retailers online store that stremlines shopping experince"
       src={project}
       
       />
       <ProjectCard 
       title="E-commerce Website"
       des="Execute E-commerce website using Reactjs. E-commerce involves the purchase and sales of good and service online just one part of e-busines"
       src={projectTwo}
       />
       <ProjectCard
       title="Chatting App"
       des="Develop a chat app using Reactjs. The app allows to user to create account, send and recieve message, and join chat rooms The app and now load"
       src={projectThree}
        />
       <ProjectCard 
       title="Social Media Clone"
       des="Develop a social media clone using Reactjs.social media app for IOs and Andriod that allows user to sher phtots and video with friend and family "
       src={projectFour}
       
       />
       <ProjectCard 
       title="To-Do-List"
        des="Develop a to-do-list app using Reactjs. designed to help users organize their tasks effortlessly and boost productivity  personal tasks and deplyoy the project"
        src={projectFive}
       />
       <ProjectCard 
       title="Currency-Convertor"
       des="Develop a currency convertor project using Reactjs.  This currency convertor to exchange the money usd using APIs.Lots of logica is create"
       src={projectSix}
       />
    </div>
    </section>
  )
}

export default Projects