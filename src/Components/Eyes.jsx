import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className=" relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="line w-full h-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-8 h-8 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
