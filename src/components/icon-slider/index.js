import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "./style.scss";
import "swiper/css";

export function IconSlider() {
  const lg = 950;
  const mid = 600;
  const sm = 416;
  const [windowDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const detectSize = () => {
      detectHW({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (windowDimension.width <= sm) {
      setSlidesPerView(2);
    } else if (windowDimension.width <= mid) {
      setSlidesPerView(3);
    } else if (windowDimension.width <= lg) {
      setSlidesPerView(4);
    }
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
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
    <div className="slider-wrapper">
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
        {technologies.map((element) => {
          return (
            <SwiperSlide key={element}>
              <div className="slide-wrapper">
                <div className={`icon icon-angular`}></div>
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
