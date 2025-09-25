import React from "react";
import bg1 from "../../assets/bg-1.png";
import bg2 from "../../assets/bg-2.png";
const Main = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[20px] my-[50px] p-5">
          <div className=" bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] w-full h-64 box  ">
            <div className="flex justify-between">
              <div>
                <img className="md:block hidden" src={bg1} alt="" />
              </div>
              <div className="text-stone-200 h-[200px] flex flex-col items-center justify-center">
                <h1 className="font-bold md:text-[20px] ">In-Progress</h1>
                <p className="font-semibold md:text-3xl">0</p>
              </div>
              <div>
                <img className="md:block hidden" src={bg2} alt="" />
              </div>
            </div>
          </div>
          <div className=" bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)] w-full h-64  box">
            <div className="flex justify-between">
              <div>
                <img className="md:block hidden" src={bg1} alt="" />
              </div>
              <div className="text-stone-200 h-[200px] flex flex-col items-center justify-center">
                <h1 className="font-bold md:text-[35px] ">Resolved</h1>
                <p className="font-semibold md:text-3xl">0</p>
              </div>
              <div>
                <img className="md:block hidden" src={bg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
