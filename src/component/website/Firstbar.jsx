import React from "react";
import backgroundImage from "../../assets/herophoto.png";
import logo from "../../assets/logo.png";
import { AiOutlineRight } from "react-icons/ai";

const Firstbar = () => {
  return (
    <div
      className="h-[700px] bg-cover bg-center border-b-8 border-gray-600"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 h-[700px]">
        <div>
          <div className="flex justify-between mx-44 pt-4">
            <div>
              <img src={logo} alt="logo" className="w-36 h-10" />
            </div>
            <button className="bg-red-700 px-4 rounded-md font-semibold">
              Sign In
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl gap-4 pt-52">
            <div className="font-bold text-5xl ">
              Unlimited movies, TV shows, and more
            </div>
            <div>Plans now start at USD2.99/month.</div>
            <div>
              Ready to watch? Enter your email to create or restart your
              membership.
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
      </div>
    </div>
  );
};

export default Firstbar;
