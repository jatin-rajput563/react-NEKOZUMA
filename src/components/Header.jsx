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
              <div className="pt-[164px]">
                <BlueLine />
                <Heading HeadingText="NEKOZUMA" HeadingClass="pt-2" />
                <Discription
                  DescriptionClass="max-w-[502px] pt-2"
                  DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
                />
                <button className="text-white text-base font-normal py-[8px] px-[24px] bg-[#245AAB] rounded-[9px] mt-[43px]">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                className="lg:absolute right-0 bottom-0 w-full max-w-[557px]"
                src={CartoonCat}
                alt="cartoon-cat-img"
              />
            </div>
          </div>
        </div>
        <img
          src={LeftLight}
          className="w-full max-w-[355px] absolute left-0 bottom-[-2%] hidden xl:block"
          alt="left-light-svg"
        />
        <img
          className="hidden lg:block absolute w-full max-w-[556px] right-0 bottom-[-6%]"
          src={rightLight}
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
