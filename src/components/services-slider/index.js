import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import service1 from "../../assets/icons/services/1.svg";
import service2 from "../../assets/icons/services/2.svg";
import service3 from "../../assets/icons/services/3.svg";
import service4 from "../../assets/icons/services/4.svg";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";

export function ServicesSlider() {
  const [windowDimension, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesPerView, setSlidesPerView] = useState(4);
  const services = [
    {
      image: service1,
      title: "Outsourcing /Extended teams",
      link: "test",
    },
    {
      image: service2,
      title: "Web and mobile development",
      link: "test",
    },
    {
      image: service3,
      title: "Digital products & Engineering",
      link: "test",
    },
    {
      image: service4,
      title: "Web & eCommerce",
      link: "test",
    },
  ];
  const lg = 950;
  const mid = 600;
  const sm = 416;
  useEffect(() => {
    const detectSize = () => {
      detectHW({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (windowDimension.width <= sm) {
      setSlidesPerView(1);
    } else if (windowDimension.width <= mid) {
      setSlidesPerView(2);
    } else if (windowDimension.width <= lg) {
      setSlidesPerView(3);
    }
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <div className="what-we-do-slider">
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        navigation={{ draggable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {services.map((service, index) => {
          return (
            <SwiperSlide key={service.title}>
              <div className="what-we-do-slide-wrapper">
                <div className="what-we-do-slide-image">
                  <div
                    className={`what-we-do-slide-image-container what-we-do-slide-image-container-${index}`}
                  ></div>
                </div>
                <div className="what-we-do-slide-title">{service.title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
