import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] px-12 text-black tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell produucts, explain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full border-t-[1px] mt-20 border-[#a1b562] flex justify-center">
        <div className="w-1/2 px-12">
          <h1 className="text-6xl text-black mt-5">Our approach</h1>
          <button className="py-5 px-8 mt-5 bg-black uppercase rounded-full text-white flex justify-center gap-10 items-center">
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-[2rem] px-5 py-5"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
