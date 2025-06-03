import React from "react";
import SliderImg1 from "../assets/images/png/slider-img-1.png";
import SliderImg2 from "../assets/images/png/slider-img-2.png";
import SliderImg3 from "../assets/images/png/slider-img-3.png";
import SliderImg4 from "../assets/images/png/slider-img-4.png";
import SliderImg5 from "../assets/images/png/slider-img-5.png";
import SliderImg6 from "../assets/images/png/slider-img-6.png";
import SliderImg7 from "../assets/images/png/slider-img-7.png";
import SliderImg8 from "../assets/images/png/slider-img-8.png";

const Slider = () => {
  const leftImages = [SliderImg1, SliderImg2, SliderImg3, SliderImg4];
  const rightImages = [SliderImg5, SliderImg6, SliderImg7, SliderImg8];

  const repeatedLeftImages = Array(50).fill(leftImages).flat();
  const repeatedRightImages = Array(50).fill(rightImages).flat();

  return (
    <div className="bg-[#1C2430] overflow-hidden">
      <div className="slide-track flex w-max animate-infiniteScroll">
        {repeatedLeftImages.map((img, i) => (
          <div key={i} className="slide w-[300px] flex-shrink-0">
            <img src={img} alt={img} className="w-full" />
          </div>
        ))}
      </div>
      <div className="slide-track flex w-max animate-reverseScroll">
        {repeatedRightImages.map((img, i) => (
          <div key={i} className="slide w-[300px] flex-shrink-0">
            <img src={img} alt={img} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
