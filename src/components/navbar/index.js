import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/">
            <div className={`${scroll ? "logo logo-scroll" : "logo"}`}></div>
          </NavLink>
          <div
            className={`nav flex align-center hide-md ${
              scroll ? "nav-scroll" : ""
            }`}
          >
            <NavLink to="/">home</NavLink>
            <div className="nav-services">
              <div
                className={`${
                  scroll ? "nav-services-link-scroll" : "nav-services-link"
                }`}
              >
                services
              </div>
              <div className="nav-services-dropdown">
                <ul>
                  <li>
                    <NavLink to="/services/web-and-mobile-development">
                      web and mobile development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/digital-products-and-engineering">
                      digital products & engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services/outsourcing-extended-teams">
                      outsourcing / extended teams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services/web-and-e-commerce">
                      web and e-commerce
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/careers">careers</NavLink>
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
          <div className="separator" key="1"></div>
          <li key="nav-about-us">
            <NavLink to="/" onClick={toggleMenu}>
              <h2>home</h2>
            </NavLink>
          </li>
          <div className="separator" key="2"></div>
          <li key="nav-services">
            <NavLink to="/services" onClick={toggleMenu}>
              <h2>services</h2>
            </NavLink>
          </li>
          <div className="separator" key="3"></div>
          <li key="careers">
            <NavLink to="/careers" onClick={toggleMenu}>
              <h2>careers</h2>
            </NavLink>
          </li>
          <div className="separator" key="4"></div>
        </ul>
      </div>
    </nav>
  );
}
