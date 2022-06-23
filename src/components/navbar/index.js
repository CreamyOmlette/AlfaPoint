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
        <div className="container-nav flex space-between center align-center flex-end-md">
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
          <Link to="/">
            <div className={`${scroll ? "logo logo-scroll" : "logo"}`}></div>
          </Link>
          <div
            className={`nav flex align-center hide-md ${
              scroll ? "nav-scroll" : ""
            }`}
          >
            <Link to="/">about us</Link>
            <Link to="/services">services</Link>
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
          <div className="separator"></div>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <h2>about us</h2>
            </Link>
          </li>
          <div className="separator"></div>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              <h2>services</h2>
            </Link>
          </li>
          <div className="separator"></div>
          <li>
            <Link onClick={toggleMenu}>
              <h2>careers</h2>
            </Link>
          </li>
          <div className="separator"></div>
        </ul>
      </div>
    </nav>
  );
}
