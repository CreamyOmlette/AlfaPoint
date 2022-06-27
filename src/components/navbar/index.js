import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./style.scss";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [menuDropdownState, setMenuDropdownState] = useState(false);

  const handleScroll = () => {
    const scrollval = window.pageYOffset > 1 ? true : false;
    setScroll(scrollval);
  };

  const toggleMenu = () => {
    setMenuState(!menuState);
    setMenuDropdownState(false);
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownState(!menuDropdownState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "visible";
  }, [menuState]);
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
                className={`questerial ${
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
                    <NavLink to="/services/outsourcing-extended-teams">
                      outsourcing / extended teams
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/web-and-e-commerce">
                      web and e-commerce
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/careers">careers</NavLink>
            <Link
              to="/"
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
            <Link to="/">contact us</Link>
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
            <div
              to="/services"
              className="nav-menu-services"
              onClick={toggleMenuDropdown}
            >
              <h2 className="questerial">services</h2>
              <div className="nav-menu-services-arrow-down">
                <div
                  className={`nav-menu-services-arrow-down-container ${
                    menuDropdownState
                      ? "nav-menu-services-arrow-down-container-active"
                      : ""
                  }`}
                ></div>
              </div>
              <div
                className={`nav-menu-services-dropdown ${
                  menuDropdownState ? "nav-menu-services-dropdown-active" : ""
                }`}
              >
                <ul>
                  <li>
                    <div className="separator"></div>
                    <NavLink
                      to="/services/web-and-mobile-development"
                      onClick={toggleMenu}
                    >
                      <h2>web and mobile development</h2>
                    </NavLink>
                    <div className="separator"></div>
                  </li>
                  <li>
                    <NavLink
                      to="/services/digital-products-and-engineering"
                      onClick={toggleMenu}
                    >
                      <h2>digital products & engineering</h2>
                    </NavLink>
                    <div className="separator"></div>
                  </li>
                  <li>
                    <NavLink
                      to="services/outsourcing-extended-teams"
                      onClick={toggleMenu}
                    >
                      <h2>outsourcing / extended teams</h2>
                    </NavLink>
                    <div className="separator"></div>
                  </li>
                  <li>
                    <NavLink
                      to="services/web-and-e-commerce"
                      onClick={toggleMenu}
                    >
                      <h2>web and e-commerce</h2>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
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
