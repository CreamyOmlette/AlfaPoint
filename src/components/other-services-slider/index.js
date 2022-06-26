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
import { useParams, useHistory } from "react-router-dom";

export function OtherServicesSlider() {
  const { id } = useParams();
  const history = useHistory();
  const services = [
    {
      id: 0,
      image: service1,
      title: "Outsourcing /Extended teams",
      link: "test",
      path: "outsourcing-extended-teams",
    },
    {
      id: 1,
      image: service2,
      title: "Web and mobile development",
      link: "test",
      path: "web-and-mobile-development",
    },
    {
      id: 2,
      image: service3,
      title: "Digital products & Engineering",
      link: "test",
      path: "digital-products-and-engineering",
    },
    {
      id: 3,
      image: service4,
      title: "Web & eCommerce",
      link: "test",
      path: "web-and-e-commerce",
    },
  ];
  const featuredServices = services.filter((s) => s.path !== id);

  return (
    <Swiper
      modules={[A11y, Autoplay, Grid]}
      spaceBetween={25}
      slidesPerView={3}
      navigation={{ draggable: true }}
      autoplay={{
        delay: 100000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        200: {
          grid: { rows: 3 },
          slidesPerView: 1,
        },
        600: {
          grid: { rows: 2 },
          slidesPerView: 2,
        },
        950: {
          grid: { rows: 1 },
          slidesPerView: 3,
        },
      }}
      grid={{ rows: 1 }}
      className="services-slider"
    >
      {featuredServices.map((service, index) => {
        return (
          <SwiperSlide
            key={service.title}
            className="services-slide"
            onClick={() => history.replace(`${service.path}`)}
          >
            <div
              className={`services-slide-icon services-slide-icon-${service.id}`}
            ></div>
            <div className="services-slide-content">
              <div className="services-slide-content-container">
                <h3>{service.title}</h3>
                <small>EXPLORE</small>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
