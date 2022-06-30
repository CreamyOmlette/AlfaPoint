import "./style.scss";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Vacancies } from "../../components/vacancies";
import { useWidth } from "../../hooks/useWidth";
import { useEffect, useState } from "react";

export function Job() {
  const width = useWidth();
  const [stackVisibility, setStackVisibility] = useState(true);
  useEffect(() => {
    if (width <= 800) {
      setStackVisibility(false);
    } else {
      setStackVisibility(true);
    }
  }, [width]);
  const vacancies = [
    {
      id: 0,
      title: "Senior DevOps Engineer",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      date: "June 22, 2022",
      stack: "Kubernetes, RabbitMQ, Docker, AWS, Azure, Terraform, Jenkins, Git, Ansible",
      content: `<h2>Requirements:</h2>
      <p>— 2+ years experience in the IT field on the DevOps position or higher.</br>
      — Professional knowledge of English, our teams are international and require effective communication.</br>
      — Ability to use Tools (Terraform, CloudFormation)<br/>
      — Working with containers (LXC, Docker)<br/>
      — Cloud platforms: AWS, Azure, Openstack, Jenkins CI or Gitlab CI / CD<br/>
      — Knowledge of Unix type administration</br>
      — Configuration management tools - Infrastructure-as-code: Chef, Ansible, SaltStack</br>
      — Experience with containerization tools on the platform: Docker, Vagrant, Kubernetes</br>
      — Control tools: Git, Terraform, Jenkins</br>
      — Implementing code and container building automation (Continuous Integration)</br>
      — Implementing blue-green or rolling deployment automation (Continuous Deployment)</br>
      — Keeping healthy communication with your colleagues</br>
      — Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)</br>
      — Troubleshooting availability, performance, or application release problems</br>
      — Writing technical documentation</br>
      — Learning from your colleagues and teaching them what you know</br></br>
    <h2>Additional requirements:</h2>
      </p><p>— Previous work experience as System Administrator or Developer is welcome.</br>
      — Interest and understanding of DevOps principles is necessary.</br>
      — Knowing at least one programming or scripting language. </br>
      — Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)</br>
      — Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)</br>
      — Basic understanding of Cloud Services offered by AWS/Azure/GCP</br>
      — Excellent communication skills.</br></br>
      To apply please send your CV to <a href = "mailto: d.lipceanu@alfa-point.com">d.lipceanu@alfa-point.com</a> or contact us by any other means possible.
      `,
    },
    {
      id: 1,
      title: "Senior Angular Developer",
      location: "Chisinau, Moldova",
      client: "European Union",
      date: "June 23, 2022",
      stack: "Angular, Typescript, HTML5, Javascript, CSS, Node.js, AWS, Azure, Google cloud, NPM, C++",
      content: `<h2>Required technical competence:</h2>
      <p>- Bachelor's degree in Computer Science or equivalent</br>
      - Web services (REST)</br>
      - Web technologies (Angular2, Typescript and HTML5)</br>
      - Linux knowledge (scripting, configuration)</br>
      - Excellent knowledge of object-oriented programming (OOP).</br>
      - Experience in version control is preferred</br>
      - Strong knowledge of Javascript, HTML, CSS and related tools / packages</br>
      - Solid knowledge of relational databases and / or non-relational databases</br>
      - Good understanding of software architecture and design</br>
      - Advanced level of written and spoken English</br></br></p>
   
   <h2>Knowing the following is a plus:</h2>
   <p>
      - C ++ development skills</br>
      - Knowledge of scripting languages</br>
      - NodeJS, Express, Npm, Angular</br>
      - Cloud architecture (AWS / Azure / Google Cloud)</br>
      - ReactJS / React Native / GraphQL</br>
      - Routing, TCP / IP, sockets</br>
      - Database knowledge (SQL)</br>
      - NoSQL knowledge</br>
      - Familiarity with Python / Perl / Ruby would be a plus</br>
      - Experience in working with V-Model, Agile methods</br></br></p>
      
      <h2>Responsibilities</h2>
      <p>
      Continuous development, continuous integration and continuous testing using GIT, Jenkins
      Configuration management and continuous deployment using Chef, SaltStack, Ansible and Docker
      You will find out more at the interview</br></br>
      
      To apply please send your CV to <a href = "mailto: d.lipceanu@alfa-point.com">d.lipceanu@alfa-point.com</a> or contact us by any other means possible.

      </p>

      `,
    },
    {
      id: 2,
      title: "Senior Java Developer",
      location: "Chisinau, Moldova",
      client: "European Union",
      date: "June 21, 2022",
      stack: "Java, Ajax, REST, Node.js, Angular, MySQL, Git, Jenkins",
      content: `<h2>Requirements</h2>
      <p>- 2+ years in Software Development</br>
      - Education in Computer Science or similar theoretical knowledge in CS: algorithms and complexity estimation, data structures, operating systems, programming languages</br>
      - Excellent knowledge of Java platform (collections, concurrency, etc). A good understanding of JVM internals is a plus</br>
      - Experience in enterprise application development (Spring)</br>
      - Understanding of distributed architectures and scalability principles.</br>
      - Knowledge of Linux/Unix-based operating systems (bash/ssh/ps/grep etc.).</br>
      - Understanding of SDLC and Agile methodologies in particular.</br>
      - Hands-on experience with developer daily basis tools such as IDE’s, compilers, debuggers, profilers, version control systems, bug tracking systems, build systems (ANT, Maven2, etc), code coverage and automated testing tools</br>
      - Experience with unit and integration testing (JUnit, TestNG, Mockito, etc.).</br>
      - RDBMS experience (SQL, JDBC). Understanding of ORM frameworks internals is a plus.</br>
      - Desire and ability to quickly learn new tools and technologies.</br>
      - Ability to proactively identify and solve engineering problems</br>
      - Good interpersonal communication skills, both verbal and written</br>
      - Good English skills (both spoken and written) are a must</br></br></p>

      <h2>Responsibilities</h2>
      <p>- Participate in the design and development of high-performance business applications, from requirements analysis to production</br>
      - Constantly improve software quality (evaluate and incorporate new libraries, tools, and technologies; code reviews; refactoring; testing; etc.)</br>
      - Analyze and improve application performance</br>
      - Search for simple and robust solutions to complex tasks</br>
      - Work in an Agile methodology environment where innovation, teamwork, and creativity are the key to success</br>
      - Work with following backend technologies: Java, Spring, Objectify, Protobuf, Guice, Mockito, JUnit4, Truth, Hamcrest, Google AppEngine DataStore</br></br>
      
      To apply please send your CV to <a href = "mailto: d.lipceanu@alfa-point.com">d.lipceanu@alfa-point.com</a> or contact us by any other means possible.
      
      </p>
      `,
    },
    {
      id: 3,
      title: "QA Automation (Mid or Senior)",
      location: "Chisinau, Moldova",
      client: "Holland, EU",
      date: "June 16, 2022",
      stack: "Javascript, Trello, Jenkins, Git, Python, MySQL, AngularJS",
      content: `<h2>Requirements:</h2>
      
      <p>- Previous work experience as a QA Engineer, QA Tester or relevant position in the IT department</br>
      - Complete understanding of automation systems and databases</br>
      - Knowledge of programming languages like JavaScript, HTML, and CSS</br>
      - Basic knowledge of scripting and other related procedures</br>
      - Expertise in automation testing tools like Selenium, and Cucumber</br>
      - Understanding of testing protocols</br>
      - Familiarity with the software development process</br>
      - Good analytical and troubleshooting skills</br>
      - Attention to detail</br>
      - Strong communication skillsv
      - Ability to work collaboratively</br>
      - Ability to manage project deadlines</br>
      - Good time management and organisational skills</br></br></p>

      <h2>Responsibilities:</h2>
      <p>- Planning and prioritising testing activities</br>
      - Coordinating with the team to discuss verification protocols</br>
      - Helping identify weaknesses and problem areas in the software application</br>
      - Suggesting automated software test procedures</br>
      - Tracking software bugs and investigating the causes</br>
      - Pointing out problem areas</br>
      - Preparing automation scripts</br>
      - Communicating with the QA Engineers Team to implement software applications</br>
      - Designing and handling the installation of software databases</br>
      - Troubleshooting automation software issues</br>
      - Creating test plans and cases</br>
      - Preparing detailed test reports</br>
      - Prioritising and executing tests</br>
      - Reviewing technical specifications and design documents</br>
      - Conducting regression testing when needed</br>
      - Monitoring assurance metrics and process results</br></p>


      <p>To apply please send your CV to <a href = "mailto: d.lipceanu@alfa-point.com">d.lipceanu@alfa-point.com</a> or contact us by any other means possible.</p>
      

      `,
    },
  ];
  const { id } = useParams();
  const activeJob = vacancies.find((j) => j.id === parseInt(id));
  return (
    <>
      <div className="job-title">
        <div className="container">
          <div className="job-title-content">
            <h2>{activeJob.title}</h2>
            <small>{activeJob.date}</small>
          </div>
        </div>
      </div>
      <div className="job">
        <div className="job-description container">
          {parse(activeJob.content)}
        </div>
        <div className="other-vacancies">
          <h2>Vacancies to consider</h2>
          <Vacancies
            vacancies={vacancies}
            hideLocation={true}
            hideStack={!stackVisibility}
          ></Vacancies>
        </div>
      </div>
    </>
  );
}
