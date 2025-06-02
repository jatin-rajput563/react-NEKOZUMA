import React from "react";
import Heading from "../components/common/Heading";
import { Discord, Twitter } from "../utils/Icons";
import leftLight from "../assets/images/png/footer-left-light.png";
import rightLight from "../assets/images/png/footer-right-light.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#245AAB] py-[46px] relative">
        <div className="max-w-[880px] px-4 mx-auto">
          <Heading
            HeadingText="NEKOZUMA"
            HeadingClass="!text-white text-center !text-[21.64px]"
          />
          <div className="flex gap-6 justify-center items-center mt-6">
            <Discord />
            <Twitter />
          </div>
        </div>
        <img src={leftLight} className="absolute w-full max-w-[355px] sm:block hidden bottom-0" alt="" />
        <img src={rightLight} className="absolute w-full max-w-[564px] max-[940px]:w-[400px] sm:block hidden bottom-0 right-0" alt="" />
      </div>
    </>
  );
};

export default Footer;
