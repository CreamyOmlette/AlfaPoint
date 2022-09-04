import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import videoBg from "../../assets/img/video-front-page.mp4";
import poster from "../../assets/img/poster-front.png";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import { PopupButton } from "react-calendly";
import { useState } from "react";

export function HeroSlider() {
  const [swiper, setSwiper] = useState(null);
  const [slide, setSlide] = useState(0);
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
    <>
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
      <div className="slideR-wrapper">
        {swiper && (
          <div className="slider-navigation">
            <div
              onClick={() => {
                swiper.slideTo(0);
                setSlide(0);
              }}
              className={`slider-navigation-button ${
                slide === 0 ? "slider-navigation-button-active" : ""
              }`}
            >
              <span className="slider-navigation-text">
                01. TEAM AUGMENTATION
              </span>
            </div>
            <div
              onClick={() => {
                swiper.slideTo(1);
                setSlide(1);
              }}
              className={`slider-navigation-button ${
                slide === 1 ? "slider-navigation-button-active" : ""
              }`}
            >
              <span className="slider-navigation-text">
                02. WEB AND MOBILE DEVELOPMENT
              </span>
            </div>
            <div
              onClick={() => {
                swiper.slideTo(2);
                setSlide(2);
              }}
              className={`slider-navigation-button ${
                slide === 2 ? "slider-navigation-button-active" : ""
              }`}
            >
              <span className="slider-navigation-text">
                03. DIGITAL PRODUCTS AND ENGINEERING
              </span>
            </div>
          </div>
        )}
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ draggable: true }}
          onSwiper={(mySwiper) => setSwiper(mySwiper)}
          onSlideChange={(swiper) => setSlide(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div className="slide-bg get-to-know">
              <div className="hero">
                <div className="container padding-lg">
                  <div className="heading">
                    <h1>
                      Cost-efficient solutions in oustaffing IT operations
                    </h1>
                  </div>
                  <div className="undertext">
                    <p>
                      Extend your teams in a blink of an eye.
                      <br /> Full control, transparent payments and flexible
                      conditions.
                    </p>
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
          <SwiperSlide>
            <div className="slide-bg get-to-know">
              <div className="hero">
                <div className="container padding-lg">
                  <div className="heading">
                    <h1>Crafting digital products that are built to last</h1>
                  </div>
                  <div className="undertext">
                    <p>
                      Our team of experts delivers everything from idea to
                      design & engineering. <br /> We can turn any idea sketched
                      on the back of a napkin into a final, shipped product.
                    </p>
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
          <SwiperSlide>
            <div className="slide-bg get-to-know">
              <div className="hero">
                <div className="container padding-lg">
                  <div className="heading">
                    <h1>Build a reliable and scalable solution with us</h1>
                  </div>
                  <div className="undertext">
                    <p>
                      The building, connecting, and scaling of digital platforms
                      for enterprises is one of our core expertise.
                    </p>
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
    </>
  );
}
