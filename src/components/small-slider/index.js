import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "./style.scss";
import "swiper/css";

export function HeroSlider(props) {
  let slidesPerView = props.slidesPerView;
  let elements = props.elements;
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      navigation={{ draggable: true }}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
    >
      {elements.map((element) => {
        return (
          <SwiperSlide>
            <div className="slide-wrapper">
              <img src={element.image} alt=""></img>
              <div className="slide-title">{element.title}</div>
            </div>
            <div className="separator"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
