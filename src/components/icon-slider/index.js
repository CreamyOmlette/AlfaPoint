import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, A11y, Grid, Autoplay } from "swiper";
import "./style.scss";
import "swiper/scss";
import "swiper/css/free-mode";
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
        modules={[A11y, Navigation, Grid, Autoplay, FreeMode]}
        spaceBetween={5}
        slidesPerView={slidesPerView}
        grid={{ rows: 1 }}
        className="icon-slider"
        autoplay={{ delay: 100, disableOnInteraction: true }}
        speed={3000}
        loop={true}
        freeMode={true}
        breakpoints={{
          200: {
            grid: { rows: 1 },
          },
          800: {
            grid: { rows: 1 },
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
