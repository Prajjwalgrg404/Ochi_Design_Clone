import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-20 bg-[#004D43] rounded-2xl">
      <div className="Text border-t-2 border-b-2 border-zinc-500 whitespace-nowrap overflow-hidden flex">
        <motion.h1
          intitial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity, duration:5 }}
          className="text-[20vw] leading-none uppercase font-['Founders_Grotesk_X'] pr-10 font-bold pt-14 -mb-[3.5vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          intitial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity, duration:5 }}
          className="text-[20vw] leading-none uppercase font-['Founders_Grotesk_X'] pr-10 font-bold pt-14 -mb-[3.5vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          intitial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity, duration:5 }}
          className="text-[20vw] leading-none uppercase font-['Founders_Grotesk_X'] pr-10 font-bold pt-14 -mb-[3.5vw]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
