import React from "react";
import gif from "../../assets/downloadgif.gif";

const Thirdbar = () => {
  return (
    <div className="border-b-8 border-[#232323] flex items-center justify-center w-full h-[590px]">
      <div className="w-[550px] h-[450px]">
        <img
          src={gif}
          alt="photovideo"
          className="w-full h-full"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="flex flex-col gap-6  w-[550px]">
        <div className="font-bold text-5xl">
          Download your shows to watch offline
        </div>
        <div className="text-2xl w-[590px]">
          Save your favorites easily and always have something to watch.
        </div>
      </div>
    </div>
  );
};

export default Thirdbar;
