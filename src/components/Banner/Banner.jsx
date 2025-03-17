import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
     <section id='home' className='w-full  pb-20  pt-10 flex  flex-col lgl:flex-row border-b-[1px] gap-10 lgl:gap-0 border-b-black font-titleFont'>
             <LeftBanner />
             <RightBanner />
     </section>
  )
}
export default Banner
