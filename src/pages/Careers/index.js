import { useState, useEffect } from "react";
import parse from "html-react-parser";
import "./style.scss";

export function Careers() {
  const careersData = {
    id: "0",
    title: "Work with us remotely or from office",
    content: `<h2>
    We actively seek out organisations with a compelling story to tell, where we can add real value and create great opportunities for our candidate pool.
    </h2>
    <p>
    Want to work remotely or in a beautiful office in the heart of Chisinau? Want to work with the latest technologies and the most talented people around you?Don’t like working with assholes? We don’t hire them. Want to enjoy after-hour team events, PlayStation jams, and skiing in the mountains? That's us. Check our open positions below and apply now.
    </p>
    <p>
    We work with some of the leading international companies on unique projects that matter. If you are engaged, hard-working and willing to develop yourself professionally, Alfapoint is just the right place for you! Check the vacancy in the bottom and we are looking forward to meeting you!
    </p>`,
  };
  const [scroll, setScroll] = useState(false);
  const [alpha, setAlpha] = useState(-200);
  const [dropdownActive, setDropdown] = useState(false);
  const toggleMenu = () => {
    setDropdown(!dropdownActive);
  };
  const gradient = (offset) => {
    if (offset <= 330) {
      return ((offset + 60) / 330) * 200 - 200;
    }
    return 0;
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollval = window.pageYOffset > 330 ? true : false;
      setAlpha(gradient(window.pageYOffset));
      setScroll(scrollval);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="service-descriptor">
      <div className="navigation">
        <div className="navigation-front">
          <div className="container">
            <div className="service-active" onClick={toggleMenu}>
              <h2 className="">{careersData.title}</h2>
            </div>
          </div>
        </div>
        {/* <div className={`dropdown ${dropdownActive ? "dropdown-active" : ""}`}>
          <div className="dropdown-content">
            <div className="container dropdown-content-width">
              {navigation && (
                <ul>
                  {navigation.map((e, index) => (
                    <li key={index}>
                      <Link to={`/services/${e.path}`} onClick={toggleMenu}>
                        {e.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div> */}
      </div>
      <div className="service-content">
        <div className="service-content-text">
          <div className="container content-padding">
            {careersData && parse(careersData.content)}
          </div>
        </div>
        <div
          className={`service-content-video-container hide-600`}
          style={{ transform: `translateY(${alpha}px)` }}
        >
          <div
            className={`service-content-video ${
              scroll ? "service-content-video-bg-reset" : ""
            }`}
          >
            <div className="service-content-image-container service-content-video-bg">
              <div className="service-content-image service-content-image-0"></div>
              <div className="service-content-image service-content-image-1"></div>
              <div className="service-content-image service-content-image-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
