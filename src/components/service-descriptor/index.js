import { useState } from "react";
import "./style.scss";

export function ServiceDescriptor() {
  const [dropdownActive, setDropdown] = useState(false);
  const toggleMenu = () => {
    setDropdown(!dropdownActive);
  };

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
            <div className="container">
              <ul>
                <li className="flex">
                  <div className="service-image-container service-image-container-0"></div>
                  <h2>Outsourcing/Extended teams</h2>
                </li>
                <li className="flex">
                  <div className="service-image-container service-image-container-0"></div>
                  <h2>Outsourcing/Extended teams</h2>
                </li>
                <li className="flex">
                  <div className="service-image-container service-image-container-0"></div>
                  <h2>Outsourcing/Extended teams</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="service-content">
        <div className="service-content-text">
          <div className="container content-padding">
            <h2>
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
            </p>
          </div>
        </div>
        <div className="service-content-video-container ">
          <div className="service-content-video-bg"></div>
        </div>
      </div>
    </div>
  );
}
