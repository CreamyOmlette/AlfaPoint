import "./style.scss";

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
            <h3>Social media</h3>
            <div className="footer-list">
              <a href="/#">Facebook</a>
              <a href="/#">Instagram</a>
              <a href="/#">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="footer-list">
              <a href="/#">about us</a>
              <a href="/#">services</a>
              <a href="/#">contact us</a>
              <a href="/#">careers</a>
              <a href="/#">our team</a>
            </div>
          </div>
          <div>
            <h3>Products and services</h3>
            <div className="footer-list footer-navigation-services">
              <a href="/#">outsourcing/extended teams</a>
              <a href="/#">web and mobile development</a>
              <a href="/#">digital products and engineering</a>
              <a href="/#">web and e-commerce</a>
            </div>
          </div>
          <div>
            <h3>Get in touch</h3>
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
              <a className="highlighted-underline" href="/#">
                Get locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
