import React from "react";

const Discription = ({ DescriptionText, DescriptionClass }) => {
  return (
    <div>
      <p
        className={`font-normal m-0 text-base leading-[100%] text-[#D4E5FF] ${DescriptionClass}`}
      >
        {DescriptionText}xdfcgbhjkml,
      </p>
    </div>
  );
};

export default Discription;
