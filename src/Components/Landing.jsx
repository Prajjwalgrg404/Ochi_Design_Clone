import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-40 px-16">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="maskers">
            <div className="w-fit flex">
            {index === 1 && <div className=" mr-5 w-[8vw] h-[5.5vw] rounded-md relative -top-[1vw] bg-red-400"></div>}
              <h1
                className=" flex items-center font-['Founders_Grotesk_X'] text-[8vw] leading-[6.5vw] uppercase font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-600 font-['Neue_Montreal'] mt-[7vw] flex justify-between items-center px-14 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <h1 className="text-lg">{item}</h1>
        ))}
        <div className="flex justify-center items-center gap-1">
          <button className="py-1 px-5 border border-white hover:bg-zinc-600 capitalize rounded-full">
            START THE PROJECT
          </button>
          <div className="w-[2vw] h-[2vw] border border-white hover:bg-zinc-600 flex justify-center items-center rounded-full">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
