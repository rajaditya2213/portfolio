import  React from 'react'
import  {AiFillAppstore} from "react-icons/ai"
import  {FaMobile, FaGlobe} from "react-icons/fa"
import  {SiProgress, SiAntdesign} from "react-icons/si"
import  {PiWebcam} from "react-icons/pi"
import  Title from '../Layout/Title'
import  Card from './Card'

const Features = () => {
  return (
     <section id='features' className=' w-full  py-20    border-b-[1px] border-b-black'>
       <Title title="Features" des="What I Do" />
       <div className=' grid grid-cols-1  md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-20'>
        <Card 
        title="Web Development"
        des="Web development is the process of  the building , maintaining, and designing websites  web apllication for the internet"
        icon={<PiWebcam />}
        />
        <Card
        title="App Development"
        des="App development is the process of building computer program to meet specific needs, weather for business or individual"
        icon={<AiFillAppstore />}
         />
        <Card
        title="SEO Optimisation"
        des="It stand for 'Search Engine Optimization', which is the process of getting traffic from free organic,editorial in search engines"
        icon={<SiProgress />}
         />
        <Card 
        title="Mobile Development"
        des="Mobile development is the process of creating software for mobile devices, such as tablets, smartphone and digital assistans."
        icon={<FaMobile />}
        />
        <Card 
        title="UX Design"
        des="UX design is the process of building project that are easy and enjoyble  for users. Ux design involves all aspects of product development "
        icon={<SiAntdesign />}
        />
        <Card
        title="Hosting Websites"
        des="Web hosting is the process of storing and maintaining files, applications, and other resources for a website on a server"
        icon={<FaGlobe />}
         />
       </div>
     </section>
  )
}

export default Features