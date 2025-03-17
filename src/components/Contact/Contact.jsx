import React, { useState } from 'react'
import Title from '../Layout/Title'
import ContactLeft from './ContactLeft'

const Contact = () => {

     const [username, setUserName]=useState("")
     const [phoneNumber, setPhoneNumber]=useState("")
     const [email, setEmail]=useState("")
     const [subject,setSubject]=useState("")
     const [message, setMessage]=useState("")
     const [errMsg, setErrMsg]=useState("")
     const [successMsg, setSuccessMsg]=useState("")


     // =======Email Validation Start here ======

     const emailValidation=()=>{
          return String(email)
          .toLocaleLowerCase()
          .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
     };

     // ========Email Validation Ends here ========



      const handleSend=(e)=>{
          e.preventDefault()
          if(username === ""){
               setErrMsg("Username is required!")
          }else if (phoneNumber === ""){
               setErrMsg("Phone number is required!")
          }else if(email === ""){
               setErrMsg("Please give your Email")
          }else if(!emailValidation(email)){
               setErrMsg("Give a Valid E!mail")
          }else if(subject === ""){
               setErrMsg("Please give  your Subject!")
          }else if(message === ""){
               setErrMsg("Subject is required!")
          }else{
               setSuccessMsg(`Thank you dear ${username}, Your Message has been sent Successfully!`);
               setErrMsg("");
               setUserName("");
               setPhoneNumber("");
               setEmail("");
               setSubject("");
               setMessage("");
               console.log(username, phoneNumber, email, subject,message);
          }
      }


  return (
     <section id='contact'
     className='w-full py-10 border-b-[1px] border-b-black'>
          <div className='flex justify-center items-center text-center'>
          <Title 
          title="CONTACT"
          des="Contact With Me"
          />
     </div>
     <div className=' w-full'>
          <div className=' w-full h-auto flex flex-col lgl:flex-row justify-between'>
               <ContactLeft />            

               <div className=' w-full lgl:w-[45%]  h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>

                    <form className=' w-full  flex flex-col gap-4 lgl:gap-6 lgl:py-2  py-5'>
                         {
                              errMsg && <p className=' py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                         }
                         {
                              successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                         }
                         <div className=' w-full flex flex-col lgl:flex-row gap-10'>
                        
                           <div className=' w-full lgl:w-1/2 flex flex-col gap-4'>
                             <p className=' text-sm text-gray-400 uppercase'>Your name</p>
                              <input onChange={(e)=>setUserName(e.target.value)} value={username} type="text" className="contactInput" />
                           </div>
                           <div className=' w-full lgl:w-1/2 flex flex-col gap-4'>
                             <p className=' text-sm text-gray-400 uppercase'>Phone number</p>
                              <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="contactInput" />
                           </div>
                         </div>
                         <div className=' flex flex-col gap-4'>
                              <p className=' text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className=' contactInput' />

                         </div>
                         <div className=' flex flex-col gap-4'>
                              <p className=' text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                              <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" className=' contactInput' />
                         </div>
                         <div className=' flex flex-col gap-4'>
                              <p className=' text-sm text-gray-400 uppercase tracking-wide'>Your message</p>
                              <textarea onChange={(e)=> setMessage(e.target.value)} value={message} className='contactTextArea' cols="30" rows="8"></textarea>
                         </div>
                         <div className=' w-full'>
                              <button onClick={handleSend} className=' w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
                         </div>
                         {
                              errMsg && <p className=' py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                         }
                          {
                              successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{successMsg}</p>
                         }
                    </form>

               </div>
          </div>

     </div>
</section>
  )
}

export default Contact