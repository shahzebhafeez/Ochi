import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
    const Movements = [useAnimation(),useAnimation()]
    function handleMouseEnter(index){
        Movements[index].start({
            y:"0",
            opacity:1

        })
    }
    function handleMouseLeave(index){
        Movements[index].start({
            y:"25rem",
            opacity:0
        })
    }
  return (
    <div className="w-full relative py-[6rem] flex items-center gap-3 justify-between px-[4rem]">
      <motion.div onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)} className="w-1/2  rounded-[1rem] overflow-hidden h-[90vh]">
        <motion.h1  className="absolute  text-[#CDEA68] text-7xl left-1/2 -translate-x-1/2 top-1/2">
            {"FYDE".split("").map((item,index)=>(
                <motion.span initial={{y:"25rem",opacity:0}} animate={Movements[0]} transition={{duration:0.2,delay:index*0.2,ease:"easeInOut"}} className="inline-block">{item}</motion.span>
            ))}
        </motion.h1>
        <div className='bg-cover h-[90vh] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'>
          
        </div>
      </motion.div>
      <motion.div onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)} className="w-1/2 bg-red-500 h-[90vh]">
      <motion.h1 className="absolute  text-[#CDEA68] text-7xl left-1/2 -translate-x-1/2 top-1/2">
        {"VIDE".split("").map((item,index)=>(
                <motion.span initial={{y:"25rem",opacity:0}} animate={Movements[1]} transition={{duration:0.2,delay:index*0.2,ease:"easeInOut"}} className="inline-block">{item}</motion.span>
            ))}
      </motion.h1>

        <div className="bg-cover h-[90vh] bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')]"></div>
         </motion.div>
    </div>
  );
}

export default Featured;
