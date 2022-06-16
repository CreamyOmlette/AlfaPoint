import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./style.scss";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const handleScroll = () => {
    const scrollval = window.pageYOffset > 1 ? true : false;
    setScroll(scrollval);
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className={`${scroll ? "navbar navbar-scroll" : "navbar"}`}>
        <div className="container-nav flex space-between center align-center">
          <div
            className={`burger show-md ${
              scroll || menuState ? "burger-scroll" : ""
            }`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className={`${scroll ? "logo logo-scroll" : "logo"}`}></div>
          <div
            className={`nav flex align-center hide-md ${
              scroll ? "nav-scroll" : ""
            }`}
          >
            <Link>about us</Link>
            <Link>services</Link>
            <Link>careers</Link>
            <Link
              className={`${scroll ? "contact contact-scroll" : "contact"}`}
            >
              contact us
            </Link>
          </div>
        </div>
      </div>
      <div className={`nav-menu show-md ${menuState ? "nav-menu-active" : ""}`}>
        <div
          className={`nav-menu-close ${scroll ? "nav-menu-close-scroll" : ""}`}
          onClick={toggleMenu}
        >
          <div id="top-line" className="line"></div>
          <div id="bottom-line" className="line"></div>
        </div>
        <div className={`contact-menu ${scroll ? "contact-menu-scroll" : ""}`}>
          <div className="contact-menu-btn">
            <Link>contact us</Link>
          </div>
        </div>
        <ul>
          <li>
            <Link>about us</Link>
          </li>
          <li>
            <Link>services</Link>
          </li>
          <li>
            <Link>careers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
