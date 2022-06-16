import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";

export function HeroSlider() {
  return (
    <div className="slideR-wrapper">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ draggable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="slide-bg get-to-know">
            <div className="hero">
              <div className="question">What do we do?</div>{" "}
              <div className="heading">
                <h1>
                  We help companies <br /> in outstaffing their IT operations
                </h1>
              </div>
              <div className="undertext">
                Enrich your team's skillset in a blink of an eye
              </div>
              <div className="know-us-btn">GET TO KNOW US</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="lorem"></div>
    </div>
  );
}
