import React from "react";
import BlueLine from "./common/BlueLine";
import Heading from "./common/Heading";
import { IMAGE_DATA } from "../utils/helper";

const Team = () => {
  return (
    <>
      <div className=" bg-[#1C2430] max-[500px]:pt-[22px] pt-[61px] pb-[36px]">
        <div className="max-w-[880px] px-4 mx-auto">
          <BlueLine lineClass="mx-auto" />
          <Heading HeadingText="Team" HeadingClass="text-center py-[56px] max-[500px]:py-[10px]" />
          <div className="flex flex-wrap ">
            {IMAGE_DATA.map((item, index) => (
              <div id={index} className="max-w-[202px] mx-auto px-3">
                <img className="pointer-events-none" src={item.image} alt="images" />
                <p className="font-normal text-[24px] text-[#3586FF] Franklin text-center m-0 mt-[23px]">
                  {item.profession}
                </p>
                <p className="font-normal text-sm text-[#D4E5FF]  text-center m-0 mt-[9px]">
                  {item.name}
                </p>
                <p className="max-w-[202px] font-normal text-sm text-center text-[#D4E5FF] m-0 mt-[9px]">
                  {item.para}
                </p>
                <a
                  className="flex justify-center mt-2 mb-9 max-w-max mx-auto cursor-pointer transition-all duration-300 hover:scale-125 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00FFE0] hover:animate-pulse"
                  href="https://x.com/NekoZumaNFT"
                  target="_blank"
                >
                  <item.icon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
