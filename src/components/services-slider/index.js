import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Grid } from "swiper";
import service1 from "../../assets/icons/services/1.svg";
import service2 from "../../assets/icons/services/2.svg";
import service3 from "../../assets/icons/services/3.svg";
import service4 from "../../assets/icons/services/4.svg";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

export function ServicesSlider() {
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
  return (
    <div className="what-we-do-slider">
      <Swiper
        modules={[A11y, Autoplay, Grid]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{ draggable: true }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            grid: { rows: 4 },
            slidesPerView: 1,
          },
          416: {
            grid: { rows: 2 },
            slidesPerView: 2,
          },
          950: {
            grid: { rows: 1 },
            slidesPerView: 4,
          },
        }}
        grid={{ rows: 1 }}
        className="what-we-do-swiper"
      >
        {services.map((service, index) => {
          return (
            <SwiperSlide key={service.title} className="what-we-do-slide">
              <div className="what-we-do-slide-wrapper">
                <div className="what-we-do-slide-image">
                  <div
                    className={`what-we-do-slide-image-container what-we-do-slide-image-container-${index}`}
                  ></div>
                </div>
                <div className="what-we-do-slide-title">{service.title}</div>
                <div className="what-we-do-slide-explore">EXPLORE</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
