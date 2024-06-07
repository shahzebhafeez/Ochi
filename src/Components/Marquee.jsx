import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
    
  return (
    <div data-scroll data-scroll-speed="-0.05"className=' bg-[#004D43]  w-full py-[20vh] rounded-tr-[1rem] rounded-tl-[1rem] flex text-[22vw] gap-10 whitespace-nowrap overflow-hidden uppercase font-["FoundersGrotesk-Semibold"]'>
      <div className='border-t-[1px] border-b-[1px]  h-fit leading-none flex tracking-none '>
      <motion.div initial={{x:0}} animate={{x:"-100%"} } transition={{repeat:Infinity,duration:1.6,ease:"linear"}} className='pr-[2rem]'>we are ochi</motion.div>
      <motion.div initial={{x:0}} animate={{x:"-100%"} } transition={{repeat:Infinity,duration:1.6,ease:"linear"}} className='pr-[2rem]'>we are ochi</motion.div>
      </div>
    </div>
  );
}

export default Marquee;
