import React from "react";
import Heading from "../components/common/Heading";
import Discription from "../components/common/Discription";
import storyImg from "../assets/images/png/story-bottom-img.png";

const Story = () => {
  return (
    <>
      <div className="bg-[#1C2430] pt-[48px]">
        <div className="max-w-[880px] px-4 mx-auto">
          <Heading HeadingText="Story" HeadingClass="text-center " />
          <Discription
            DescriptionClass="text-center pt-[23px]"
            DescriptionText="Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos."
          />
          <Discription
            DescriptionClass="text-center pt-[23px] !text-[14px] !tracking-[-1px]"
            DescriptionText="However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated."
          />
        </div>
        <img className="w-full mx-auto pt-[58px] max-h-[357px]" src={storyImg} alt="story-img" />
      </div>
    </>
  );
};

export default Story;
