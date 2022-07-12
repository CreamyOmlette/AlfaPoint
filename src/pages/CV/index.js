import "./style.scss";

export function CV() {
  return (
    <div className="cv">
      <div className="container cv-container">
        <div className="cv-sidebar container">
          <div className="cv-content-block">
            <h2>ABOUT ME</h2>
            <p>
              Solid understanding and knowledge of object-oriented approach,
              software engineering principles, and concepts. Advanced skills in
              requirements gathering and customer communication. Profound
              knowledge of Agile methodologies. Designed and implemented
              projects of different complexity and size. A team player with
              strong self-motivation and good communication skills. Keen to
              learn new technologies, solve hard tasks, and always strive to do
              the best to have customers satisfied. Good analytical and
              problem-solving skills combined with the ability to move easily
              between varied tasks. Ability to build strong, collaborative
              relationships with local and remote teams. Proactive and
              self-motivated, committed to learning and self-development, ready
              to take initiative and responsibility
            </p>
          </div>
          <div className="cv-content-block">
            <h2>LANGUAGES</h2>
            <p>
              <ul>
                <li>
                  <span>UKRAINE</span> - native speaker
                </li>
                <li>
                  <span>ENGLISH</span> - advanced
                </li>
                <li>
                  <span>RUSSIAN</span> - native speaker
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="cv-main">
          <div className="container">
            <h1>Alfapoint.</h1>
            <p>Front end developer</p>
            <div className="cv-main-block">
              <div className="cv-main-block-title">
                <div className="cv-main-block-icon"></div>
                <h2>Skills & Expertise</h2>
              </div>
              <div className="cv-main-block-items">
                <ul className="cv-main-block-items-skills">
                  <li>JavaScript</li>
                  <li>Vue.js</li>
                  <li>OOP </li>
                  <li>EcmaScript </li>
                  <li>Node.js </li>
                  <li>Express.js </li>
                  <li>HTML </li>
                  <li>CSS </li>
                  <li>PhoneGap </li>
                  <li>Apache Cordova </li>
                  <li>AJAX libs </li>
                  <li>Ionic</li>
                  <li>React Native</li>
                  <li>React/Redux </li>
                  <li>MongoDB </li>
                  <li>MS SQL Server</li>
                  <li>Amazon Web Services (AWS)</li>
                  <li>Git </li>
                  <li>JIRA </li>
                </ul>
              </div>
            </div>
            <div className="cv-main-block">
              <div className="cv-main-block-title">
                <div className="cv-main-block-icon"></div>
                <h2>Education</h2>
                <div className="cv-main-block-items">
                  <ul className="cv-main-block-items-roadmap">
                    <li><span className="year"></span><span></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
