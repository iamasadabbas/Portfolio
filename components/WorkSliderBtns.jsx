"use client"
import {  useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"

const WorkLSliderBtns = ({containerStyles, btnStles, iconStyles}) => {
  const swiper=useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStles} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles}/>
      </button><button className={btnStles} onClick={()=>swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles}/>
      </button>
    </div>
  )
}

export default WorkLSliderBtns
