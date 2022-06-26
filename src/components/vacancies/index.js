import { NavLink } from "react-router-dom";
import "./style.scss";

export function Vacancies(props) {
  return (
    <>
      <div className="vacancies-row location-hidden">
        <h4>POSITION</h4>
        <h4 className="location">LOCATION</h4>
        <h4>CLIENT</h4>
      </div>
      <div className="vacancies-separator"></div>
      {props.vacancies.map((v) => (
        <>
          <div className="vacancies-row  location-hidden">
            <small>{v.title}</small>
            <small className="location">{v.location}</small>
            <small>{v.client}</small>
            <NavLink className="vacancies-apply" to={`/careers/${v.id}`}>
              Apply
            </NavLink>
          </div>
          <div className="vacancies-separator"></div>
        </>
      ))}
    </>
  );
}
