import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import videoBg from "../../assets/img/video-front-page.mp4";
import poster from "../../assets/img/poster-front.png";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import { PopupButton } from "react-calendly";

export function HeroSlider() {
  // const scrollToContact = (e) => {
  //   e.preventDefault();
  //   const id = "contact-us";
  //   const yOffset = -60;
  //   const element = document.getElementById(id);
  //   const y =
  //     element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //   window.scrollTo({ top: y, behavior: "smooth" });
  // };
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
          <video
            autoPlay
            muted
            loop
            className="video-bg"
            controlsList="nodownload"
            preload="yes"
            poster={poster}
            disablePictureInPicture
            playsInline
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="slide-bg get-to-know">
            <div className="hero">
              <div className="container padding-lg">
                <div className="heading">
                  <h1>
                    We help companies <br /> in outstaffing their IT operations
                  </h1>
                </div>
                <div className="undertext">
                  <p>Enrich your team's skillset in a blink of an eye</p>
                </div>
                <PopupButton
                  url="https://calendly.com/d-lipceanu/30min"
                  rootElement={document.getElementById("root")}
                  text="BOOK A CALL"
                  className="know-us-btn"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
