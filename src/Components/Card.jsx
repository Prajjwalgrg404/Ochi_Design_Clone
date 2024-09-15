import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-20">
      <div className="cardcontainer relative h-[50vh] w-1/2 ">
        <div className="card rounded-lg w-full h-full flex items-center justify-center bg-[#004d43] ">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
          <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-10 left-10">
            2019-2020
          </button>
        </div>
      </div>
      <div className="cardcontainer relative h-[50vh] flex gap-5 w-1/2">
        <div className="card rounded-lg w-1/2 h-full bg-[#192826]">
          <img
            className="w-full h-full object-none"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-8 left-8 uppercase">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-lg w-1/2 h-full bg-[#192826]">
          <img
            className="w-full h-full object-scale-down"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="px-3 border-2 border-[#a1b562] rounded-3xl absolute text-[#a1b562] bottom-8 left-8 uppercase">
            bussiness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
