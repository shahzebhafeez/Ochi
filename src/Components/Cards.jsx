import React from 'react';

function Cards() {
  return (
    <div className='w-full h-[70vh] bg-zinc-900 flex p-[5rem] gap-5'>
      <div className='bg-[#004D43] rounded-[1rem] flex relative justify-center items-center w-[47vw]'>
        
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute bottom-6 left-6 border-[1px] py-[6px] border-[#CDEA68] px-[10px] rounded-full text-[#CDEA68] uppercase'>Hello</button>
      </div>
      <div className='bg-[#004D43] flex relative justify-center items-center rounded-[1rem] w-[26vw]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute bottom-6 left-6 border-[1px] py-[6px] border-[#CDEA68] px-[10px] rounded-full text-[#CDEA68] uppercase'>Hello</button>
      </div>
      <div className='bg-[#004D43] flex relative justify-center items-center rounded-[1rem] w-[26vw]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute bottom-6 left-6 border-[1px] py-[6px] border-[#CDEA68] px-[10px] rounded-full text-[#CDEA68] uppercase'>Hello</button>
      </div>
    </div>
  );
}

export default Cards;
