import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import { useState, useEffect } from "react";
import service1 from "../../assets/img/outsourcing.png";
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
      image: service1,
      title: "Web and mobile development",
      link: "test",
    },
    {
      image: service1,
      title: "Digital products & Engineering",
      link: "test",
    },
    {
      image: service1,
      title: "Web & eCommerce",
      link: "test",
    },
    {
      image: service1,
      title: "Digital products & Engineering1",
      link: "test",
    },
    {
      image: service1,
      title: "Web & eCommerce1",
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
        {services.map((service) => {
          return (
            <SwiperSlide key={service.title}>
              <div className="what-we-do-slide-wrapper">
                <div className="what-we-do-slide-image loading">
                  <img src={service.image} alt=""></img>
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
