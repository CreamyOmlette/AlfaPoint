import { NavLink } from "react-router-dom";
import "./style.scss";

export function Vacancies(props) {
  const handleDataSelection = () => {
    if (props.hideLocation && props.hideStack) {
      return "location-stack-hidden";
    }
    if (props.hideLocation) {
      return "location-hidden";
    }
    if (props.hideStack) {
      return "stack-hidden";
    }
    return "";
  };
  return (
    <>
      <div className={`vacancies-row ${handleDataSelection()}`}>
        <h4>POSITION</h4>
        <h4 className="location">LOCATION</h4>
        <h4>CLIENT</h4>
        <h4 className="stack">STACK</h4>
      </div>
      <div className="vacancies-separator"></div>
      {props.vacancies.map((v) => (
        <div key={v.id}>
          <div className={`vacancies-row ${handleDataSelection()}`}>
            <small>{v.title}</small>
            <small className="location">{v.location}</small>
            <small>{v.client}</small>
            <small className="stack">{v.stack}</small>
            <NavLink
              className="vacancies-apply dm-sans"
              to={`/careers/${v.id}`}
            >
              apply
            </NavLink>
          </div>
          <div className="vacancies-separator"></div>
        </div>
      ))}
    </>
  );
}
