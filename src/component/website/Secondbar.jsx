import React from "react";
import tv from "../../assets/tv.png";
import videoplay from "../../assets/video.mp4";

const Secondbar = () => {
  return (
    <div className="border-b-8 border-[#232323] flex items-center justify-center w-full h-[590px]">
      <div className="flex flex-col gap-6">
        <div className="font-bold text-5xl">Enjoy on your TV</div>
        <div className="text-2xl w-[600px]">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </div>
      </div>
      <div className="relativew-[500px] h-[400px]">
        <div className="absolute">
          <img
            src={tv}
            alt="photovideo"
            className="w-[570px] h-[400px]"
            autoPlay
            loop
            muted
          />
        </div>

        <video className="w-[450px] h-96 ml-20" autoPlay loop muted>
          <source src={videoplay} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Secondbar;
