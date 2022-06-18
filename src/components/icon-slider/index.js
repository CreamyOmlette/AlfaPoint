import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "./style.scss";
import "swiper/css";

export function IconSlider() {
  const technologies = [
    "angular",
    "react",
    "python",
    "kubernetes",
    "aws",
    "java",
    "laravel",
    "symphony",
    "golang",
  ];
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={6}
      navigation={{ draggable: true }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {technologies.map((element) => {
        return (
          <SwiperSlide>
            <div className="slide-wrapper">
              <div className={`icon-${element}`}></div>
              <div className="slide-title">
                {element[0].toUpperCase() + element.slice(1)}
              </div>
            </div>
            <div className="separator"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
