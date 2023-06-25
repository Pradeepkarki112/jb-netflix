import React from "react";
import kids from "../../assets/kids.png";

const Fifthbar = () => {
  return (
    <div className="border-b-8 border-[#232323] flex items-center justify-center w-full h-[590px]">
      <div className="w-[550px] h-[450px]">
        <img
          src={kids}
          alt="photovideo"
          className="w-full h-full"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="flex flex-col gap-6  w-[550px]">
        <div className="font-bold text-5xl">Create profiles for kids </div>
        <div className="text-2xl w-[590px]">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </div>
      </div>
    </div>
  );
};

export default Fifthbar;
