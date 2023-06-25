import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Sixthbar = () => {
  return (
    <div className="flex flex-col justify-center items-center border-b-8 border-[#232323] pt-16">
      <div className="font-bold text-5xl mb-7">Frequently Asked Questions</div>
      <div className="flex flex-col gap-3">
        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">What is Netflix?</div>
          <div className="text-5xl">+</div>
        </div>

        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">How much does Netflix cost?</div>
          <div className="text-5xl">+</div>
        </div>

        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">Where can i watch?</div>
          <div className="text-5xl">+</div>
        </div>

        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">How do i cancel?</div>
          <div className="text-5xl">+</div>
        </div>

        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">What can i watch on Netflix?</div>
          <div className="text-5xl">+</div>
        </div>

        <div className="bg-gray-700 w-[1050px] p-5 flex justify-between items-center">
          <div className="text-2xl">Is Netflix good for kids?</div>
          <div className="text-5xl">+</div>
        </div>
      </div>

      <div className="py-12 flex flex-col gap-6">
        <div className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="flex gap-2 items-center justify-center">
          <input
            placeholder="Email address"
            className="rounded-md text-lg bg-black border bg-opacity-10 p-3 pr-36"
          ></input>
          <div className="bg-red-700 py-3 px-7 rounded-md flex items-center justify-center">
            Get Started
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixthbar;
