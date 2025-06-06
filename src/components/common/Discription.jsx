import React from "react";

const Discription = ({ DescriptionText, DescriptionClass }) => {
  return (
    <div>
      <p
        className={`font-normal m-0 text-base max-[500px]:text-[14px] text-[#D4E5FF] ${DescriptionClass}`}
      >
        {DescriptionText}
      </p>
    </div>
  );
};

export default Discription;
