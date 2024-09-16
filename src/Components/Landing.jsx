import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-40 px-16">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="maskers">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
                  className="mr-2 w-[8vw] h-[5.5vw] overflow-hidden rounded-xl relative -top-[1vw] bg-red-400"
                >
                  <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NaVe-XlX_Z55HxwQCxX1s9vvEjhqPR3XNTS2UgWT4wrWAO18qRksXaP-ljGdb_s5Suc&usqp=CAU"/>
                </motion.div>
              )}
              <h1 className=" flex items-center font-['Founders_Grotesk_X'] text-[8vw] leading-[6.5vw] uppercase font-semibold">
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
