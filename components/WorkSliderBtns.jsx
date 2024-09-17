"use client";
import {useSwiper} from "swiper/react";
import { PiCaretLeftBold, PiCaertRightBold, PiCaretRight } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconesStyles}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles} >
        <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold className={iconesStyles} />
        </button>
        <button className={btnStyles} onClick={()=>swiper.slideNext()}>
            <PiCaretRight className={iconesStyles} />
        </button>
    </div>
  )
}

export default WorkSliderBtns