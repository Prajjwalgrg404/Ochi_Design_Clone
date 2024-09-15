import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-12 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-5xl font-regular font-["Neue_Montreal"]'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute w-full left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] text-6xl text-[#CDEA68] uppercase ">
            {"cardboard spaceship".split(" ").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  overflow-hidden rounded-xl bg-green-200">
              <img
                className="w-full h-full  object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute w-full right-full translate-x-1/2 top-1/2 translate-y-1/2 leading-none z-[9] text-6xl text-[#CDEA68] uppercase ">
              {"ah2 & matthorn".split(" ").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
