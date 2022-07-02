import "./style.scss";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo-block">
        <div className="footer-logo-block-logo"></div>
      </div>
      <div className="footer-navigation">
        <div className="container flex space-between">
          <div>
            © 2022, Alfapoint.
            <br /> All rights Reserved
          </div>
          <div>
            <h4>Social media</h4>
            <div className="footer-list">
              <a href="/#">Facebook</a>
              <a href="/#">Instagram</a>
              <a href="/#">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className="footer-list">
              <NavLink to="/">home</NavLink>
              <NavLink to="/">contact us</NavLink>
              <NavLink to="/careers">careers</NavLink>
              <NavLink to="/">our team</NavLink>
            </div>
          </div>
          <div>
            <h4>Products and services</h4>
            <div className="footer-list footer-navigation-services">
              <NavLink to="/services/outsourcing-extended-teams">
                outsourcing/extended teams
              </NavLink>
              <NavLink to="/services/web-and-mobile-development">
                web and mobile development
              </NavLink>
              <NavLink to="/services/digital-products-and-engineering">
                digital products and engineering
              </NavLink>
              <NavLink to="/services/web-and-e-commerce">
                web and e-commerce
              </NavLink>
            </div>
          </div>
          <div>
            <h4>Get in touch</h4>
            <div className="footer-list">
              <p>
                d.lipceanu@alfa-point.com
                <br />
                v.matvei@alfa-point.com
                <br />
                +373 (69) 905 471
              </p>
              <p>
                sos. Muncesti 77,
                <br />
                Chisinau, Republic of Moldova
              </p>
              <a
                className="highlighted-underline"
                href="https://www.google.com/maps/place/Șoseaua+Muncești+77,+Chișinău+2002/@47.0036724,28.8690045,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97c012b437073:0x4c16c375228d2834!8m2!3d47.0036724!4d28.8690045"
              >
                Get locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
