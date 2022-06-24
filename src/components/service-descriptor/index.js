import { useState, useEffect } from "react";
import videoBg from "../../assets/img/video-bg-1.mp4";
import parse from "html-react-parser";
import "./style.scss";

export function ServiceDescriptor() {
  const serviceData = {
    title: "Outsourcing/Extended teams",
    content: `<h2>
    An extended development team is not project-based and is not
    discontinued after the project ends. It's an ongoing cooperation
    between the client’s team and the extended team.
  </h2>
  <p>
    Compared to outsourcing, an extended team is like a team next
    door, which is not-project based and not discontinued after the
    project ends. As such, it’s aimed for long-term collaboration,
    effectively removing the need to disperse attention to any side
    project for the service providers team members.
  </p>
  <p>
    Team Extension Model is aimed at complementing the in-house team
    and not substituting it, while also filling necessary skills gaps.
    This also means that responsibilities are distributed among team
    members as all of them are equally engaged in the project. The
    client has full control over the process and collaboration, which
    also includes the levels of recruitment, training, etc. On the
    other hand, project managers breathe easier as they can focus on
    things that matter and need attention, yet remain in control of
    key points and decisions.
  </p>
  <p>
    Then there’s the cost-saving part. Clients get to choose from an
    international talent pool with a diverse set of skills and rates
    and also don't spend much time and effort in recruiting and
    training in the future, as this is mainly handled by the service
    provider.
  </p>`,
    benefits: [
      `<p>THE VERY BEST</p>
    <p>
      You can take part in the hiring process by personally screening
      and interviewing potential candidates. Thus, you can ascertain
      whether or not the developers you hire have the required skills
      and will be able to assimilate into your core team.
    </p>`,
      `<p>NO-HASSLE SETUP</p>
    <p>
      When you expand your team, we take care of all operational tasks
      and provide your developers with all the necessary conditions so
      they can perform at their best. Your developers work from a
      comfortable working environment, equipped with the latest
      technologies.
    </p>`,
      `<p>Flexibility and transparency</p>
    <p>
      You can manage your extended development team members as you see
      fit. There will be no intermediaries between you and your
      developers: you can communicate your requirements directly to
      them and solve any issues that may arise along way.
    </p>`,
      `<p>TRANSPARENT PAYMENT MODEL</p>
    <p>
      With and extended team, you agree on a fixed monthly fee that
      covers the developers’ salary, operational expenses, bonuses,
      etc., enabling you to not only plan your budget further in
      advance, but to keep track of your expenses better.
    </p>`,
      `<p>MOTIVATED AND INVESTED DEVELOPERS</p>
      <p>
        The developers are assigned to your project full-time, so they
        don’t need to juggle multiple assignments and can focus 100% of
        their attention on your project. As a result, your extension
        team members become an integral part of your company, align with
        your corporate culture, vision and work towards a common goal.
      </p>`,
    ],
  };
  const parseBenefits = (benefit) => {
    return <div className="content-block">{parse(benefit)}</div>;
  };
  const parsedBenefits = serviceData.benefits.map(parseBenefits);
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
              <div className="service-image-container service-image-container-0"></div>
              <h2 className="arrow-down">Outsourcing/Extended teams</h2>
            </div>
          </div>
        </div>
        <div className={`dropdown ${dropdownActive ? "dropdown-active" : ""}`}>
          <div className="dropdown-content">
            <div className="container dropdown-content-width">
              <ul>
                <li>
                  <h2>Web and mobile development</h2>
                </li>
                <li>
                  <h2>Digital products and engineering</h2>
                </li>
                <li>
                  <h2>Web and e-commerce</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="service-content">
        <div className="service-content-text">
          <div className="container content-padding">
            {parse(serviceData.content)}
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
            <video autoPlay muted loop className="service-content-video-bg">
              <source src={videoBg} type="video/mp4" />
            </video>
            <div className="service-content-video-overlay"></div>
          </div>
        </div>
      </div>
      <div className="home-benefits">
        <div className="content-box">
          <h2>Benefits of working with us</h2>
          <div className="row">{parsedBenefits}</div>
        </div>
      </div>
    </div>
  );
}
