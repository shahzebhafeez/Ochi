import React,{useEffect,useState} from "react";

function Eyes() {
    const [Rotate, setRotate] = useState(0);
    useEffect(() => {
     window.addEventListener("mousemove",(e)=>{
        let MoveX = e.clientX;
        let MoveY = e.clientY;

        let deltaX = MoveX - window.innerWidth/2;
        let deltaY = MoveY - window.innerHeight/2;

        var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);

        setRotate(angle - 180)


    }) 
    });
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className=' relative bg-cover w-full h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
      <div className=" h-fit w-fit relative top-[50vh] left-[35vw] flex gap-[2rem]">
        <div className="bg-zinc-100 rounded-full h-[30vh] w-[15vw]">
          <div className="bg-zinc-900 w-[10vw] h-[21vh] rounded-full relative top-[1.7rem] left-[1.9rem] flex items-center justify-center">
            <div className=" w-[6rem]  h-3 rotate-9 relative  " style={{transform:` rotate(${Rotate}deg)`}}>
                <div className="bg-white w-[20px] h-[20px]  rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100 rounded-full h-[30vh] w-[15vw]">
        <div className="bg-zinc-900 w-[10vw] h-[21vh] rounded-full relative top-[1.7rem] left-[1.9rem] flex items-center justify-center">
            <div className=" w-[6rem]  h-3 rotate-9 relative  "  style={{transform:` rotate(${Rotate}deg)`}}>
                <div className="bg-white w-[20px] h-[20px]  rounded-full " ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
