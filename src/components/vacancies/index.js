import "./style.scss";

export function Vacancies(props) {
  const vacancies = [
    {
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      path: "",
    },
    {
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      path: "",
    },
    {
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      path: "",
    },
    {
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      path: "",
    },
    {
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      path: "",
    },
  ];

  return (
    <>
      <div className="vacancies-row">
        <h4>POSITION</h4>
        <h4>LOCATION</h4>
        <h4>CLIENT</h4>
      </div>
      <div className="vacancies-separator"></div>
      {vacancies.map((v) => (
        <>
          <div className="vacancies-row">
            <small>{v.title}</small>
            <small>{v.location}</small>
            <small>{v.client}</small>
            <a className="vacancies-apply" href="/#">
              Apply
            </a>
          </div>
          <div className="vacancies-separator"></div>
        </>
      ))}
    </>
  );
}
