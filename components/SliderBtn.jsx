import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const SliderBtn = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <>
      <div className={` flex justify-between  w-[98.4%] lg:w-[60%] md:w-[47.5%] my-2 ${containerStyles} ` } >
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
          <FaAngleLeft className='bg-accent' />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
          <FaAngleRight className='bg-accent'/>
        </button>
      </div>
    </>
  );
};

export default SliderBtn;
