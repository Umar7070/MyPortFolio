// import React from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const SliderBtn = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="containerStyles flex  gap-4 mt-2">
        <button className="btnStyles" onClick={() => swiper.slidePrev()}>
          <FaAngleLeft className="iconsStyles bg-accent h-[20px] w-[20px]" />
        </button>
        <button className="btnStyles " onClick={() => swiper.slideNext()}>
          <FaAngleRight className="iconsStyles bg-accent h-[20px] w-[20px] " />
        </button>
      </div>
    </>
  );
};

export default SliderBtn;
