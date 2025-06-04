import React from "react";
import Nav from "./Nav";
import Heading from "../components/common/Heading";
import Discription from "../components/common/Discription";
import BlueLine from "../components/common/BlueLine";
import LeftLight from "../assets/images/svg/left-light.svg";
import rightLight from "../assets/images/svg/right-light.svg";
import CartoonCat from "../assets/images/png/cartoon-cat.png";

const Header = () => {
  return (
    <>
      <div className="min-h-[641px] bg-[#1C2430] relative overflow-hidden">
        <Nav />
        <div className="max-w-[880px] px-4 mx-auto">
          <div className="flex flex-wrap flex-row -mx-3">
            <div className="full">
              <div className="pt-[164px] max-lg:pt-[60px]">
                <BlueLine />
                <Heading HeadingText="NEKOZUMA" HeadingClass="pt-2" />
                <Discription
                  DescriptionClass="max-w-[502px] pt-2"
                  DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
                />
                <button className="relative cursor-pointer inline-block text-white text-base font-semibold py-[7.5px] px-[19.5px] rounded-[12px] mt-[43px] max-[500px]:mt-[16px] bg-[#245AAB] overflow-hidden transition-all duration-300 group hover:scale-105 hover:shadow-[0_0_15px_#00c8ff80]">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg z-0"></span>
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-[100%] transition-all duration-1000 z-10"></span>
                  <span className="relative z-20">Connect Wallet</span>
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                className="lg:absolute right-0 bottom-0 w-full max-w-[557px] pointer-events-none"
                src={CartoonCat}
                alt="cartoon-cat-img"
              />
            </div>
          </div>
        </div>
        <img
          src={LeftLight}
          className="max-w-[355px] absolute left-0 bottom-[-2%] hidden xl:block pointer-events-none"
          alt="left-light-svg"
        />
        <img
          className="hidden lg:block absolute max-w-[556px] right-0 bottom-[-6%] pointer-events-none"
          src={rightLight}
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
