import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Grid, Pagination, Brea } from "swiper";
import { useSwiper } from "swiper/react";
import "./style.scss";
import "swiper/scss";
import "swiper/scss/grid";

export function IconSlider() {
  const lg = 950;
  const mid = 600;
  const sm = 416;
  const [row, setRow] = useState(1);
  const [windowDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesPerView, setSlidesPerView] = useState(8);
  useEffect(() => {
    const detectSize = () => {
      detectHW({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (windowDimension.width <= sm) {
      setSlidesPerView(3);
      setRow(2);
    } else if (windowDimension.width <= mid) {
      setSlidesPerView(4);
      setRow(2);
    } else if (windowDimension.width <= lg) {
      setSlidesPerView(6);
      setRow(1);
    }
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension, row]);
  const technologies = [
    "angular",
    "react",
    "kubernetes",
    "aws",
    "java",
    "laravel",
    "symfony",
    "golang",
    "php",
    "bitbucket",
    "vue",
    "digitalOcean",
  ];
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[A11y, Navigation, Grid]}
        spaceBetween={5}
        slidesPerView={slidesPerView}
        navigation={{ draggable: true }}
        grid={{ rows: 1 }}
        className="icon-slider"
        breakpoints={{
          200: {
            grid: { rows: 2 },
          },
          800: {
            grid: { rows: 2 },
          },
          950: {
            grid: { rows: 1 },
          },
        }}
      >
        {technologies.map((element) => {
          return (
            <SwiperSlide key={element} className="icon-slide">
              <div className="slide-wrapper">
                <div className={`icon icon-${element}`}></div>
                <div className="slide-title">
                  {element[0].toUpperCase() + element.slice(1)}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
