import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import {motion} from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 font-['FoundersGrotesk-Semibold'] ">
      <div className="OurText mt-[20vh]  ">
        {["We create", "eye opening", "presentations"].map((item, index) => {
          return (
            
            <>
            <div className="flex items-center">
            {
                index === 1 && (
                  <motion.div initial={{width:"0"}} animate={{width:"6vw"}} transition={{stiffness:30,duration:1}} className="w-[6vw] h-[11vh] ml-[3rem] rounded-lg bg-teal-600"></motion.div>
                )
              }
               <h1
              key={index}
              className={`$ wrapper  uppercase relative  ml-[3vw] leading-[6.9vw] tracking-tight text-[8rem] font-['FoundersGrotesk-Semibold']`}
            >
                
              {item}
            </h1>
            </div>
            
             
            </>
            
          );
        })}
      </div>
      <div className=" w-full h-[23vh] mt-[13vh] text-[1.3rem] border-t-2 flex items-center justify-between px-[2rem]">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
        <div className="uppercase flex items-center gap-[0.3rem]">
          <div className=" border-[1px] rounded-[1rem] text-[18px] px-[1rem]">
            start the project
          </div>
          <div className=" w-[24px] h-[24px]  border-[1px] rounded-[32px]">
            <IoIosArrowRoundUp />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
