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
                <img src={item.image} alt="images" />
                <p className="font-normal text-[24px] text-[#3586FF] Franklin text-center m-0 pt-[23px]">
                  {item.profession}
                </p>
                <p className="font-normal text-sm text-[#D4E5FF]  text-center m-0 pt-[9px]">
                  {item.name}
                </p>
                <p className="max-w-[202px] font-normal text-sm text-center text-[#D4E5FF] m-0 pt-[9px]">
                  {item.para}
                </p>
                <a
                  className="flex justify-center mt-2 mb-9"
                  href=""
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
