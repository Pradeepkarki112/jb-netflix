import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Seventhbar = () => {
  return (
    <div className="pl-44 pt-16 flex flex-col gap-9 pb-16">
      <div className="underline underline-offset-4 cursor-pointer">
        Questions? Contact us.
      </div>
      <div className="flex justify-start gap-96">
        <div className="flex flex-col gap-3">
          <div className="underline underline-offset-4 cursor-pointer">FAQ</div>
          <div className="underline underline-offset-4 cursor-pointer">
            Media Center
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Ways to Watch
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Cookie Preferences
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Speed Test
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="underline underline-offset-4 cursor-pointer">
            Help Center
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Investor Relations
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Terms of Use
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Corporate Information
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Legal Notices
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="underline underline-offset-4 cursor-pointer">
            Account
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Jobs
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Privacy
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Contact Us
          </div>
          <div className="underline underline-offset-4 cursor-pointer">
            Only on Netflix
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-around items-center border rounded-md w-32 p-1">
          <div>
            <BsGlobe />
          </div>
          <div>English</div>
          <div>
            <AiFillCaretDown />
          </div>
        </div>
        <div className="mt-7">Netflix Nepal</div>
      </div>
    </div>
  );
};

export default Seventhbar;
