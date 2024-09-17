import { motion, useAnimation } from "framer-motion";
import React from "react";

function FeaturedProjects() {
  const cards = [useAnimation(), useAnimation()];

  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlehoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-12 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-5xl font-regular font-["Neue_Montreal"]'>
          Featured Projects
        </h1>
      </div>
      <div className="px-10 font-semibold font-['Neue_Montreal']">
        <div className="cards w-full flex gap-5 mt-20">
          {/* First Card */}
          <motion.div
            onHoverStart={() => handlehover(0)}
            onHoverEnd={() => handlehoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            {/* Animated text */}
            <h1 className="absolute flex overflow-hidden w-full left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] text-[4vw] text-[#CDEA68] uppercase ">
              {"cardboard spaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            {/* Card image */}
            <div className="card w-full h-full overflow-hidden rounded-xl bg-green-200">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              />
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            onHoverStart={() => handlehover(1)}
            onHoverEnd={() => handlehoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex justify-center overflow-hidden w-full left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] text-6xl text-[#CDEA68] uppercase ">
              {"a2h & matthorn".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
