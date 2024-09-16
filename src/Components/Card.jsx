import { motion } from "framer-motion";
import React, { useState } from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-2 items-center px-20">
      <motion.div
        whileHover={{ padding: "5px" }}
        className="cardcontainer relative h-[50vh] w-1/2 "
      >
        <div className="card rounded-lg w-full h-full flex items-center justify-center bg-[#004d43] ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
          <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-10 left-10">
            2019-2020
          </button>
        </div>
      </motion.div>
      <div className="flex gap-2">
        <motion.div whileHover={{ padding: "5px" }} className=" w-1/2 h-[50vh] cardcontainer relative ">
          <div className="card rounded-lg w-full h-full bg-[#192826]">
            <img
              className="w-full h-full object-none"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            />
            <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-8 left-8 uppercase">
              rating 5.0 on clutch
            </button>
          </div>
        </motion.div>
        <motion.div whileHover={{ padding: "5px" }} className="w-1/2 h-[50vh]">
          <div className="card relative rounded-lg w-full h-full bg-[#192826]">
            <img
              className="w-full h-full object-scale-down"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            />
            <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-8 left-8 uppercase">
              bussiness bootcamp alumni
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
