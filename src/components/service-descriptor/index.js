import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import teamsvideo from "../../assets/services/0.mp4";
import teamsposter from "../../assets/services/0.png";
import productvideo from "../../assets/services/2.mp4";
import productposter from "../../assets/services/2.png";
import devvideo from "../../assets/services/1.mp4";
import devposter from "../../assets/services/1.png";
import comvideo from "../../assets/services/1.mp4";
import composter from "../../assets/services/1.png";

import "./style.scss";

export function ServiceDescriptor() {
  const storage = [
    { video: teamsvideo, poster: teamsposter },
    { video: devvideo, poster: devposter },
    { video: productvideo, poster: productposter },
    { video: comvideo, poster: composter },
  ];
  const { id } = useParams();
  const [activeService, setActiveService] = useState(null);
  const [forceRefresh, setForceRefresh] = useState(true);
  const [parsedBenefits, setParsedBenefits] = useState([]);

  useEffect(() => {
    const serviceData = [
      {
        id: "0",
        path: "outsourcing-extended-teams",
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
        image: "",
      },
      {
        id: "1",
        path: "web-and-mobile-development",
        title: "Web and mobile development",
        content: `<h2>Ready to create a mobile app for your business?</h2><p>Starting from as
         little as a concept to fully-fledged mobile app development, our team can cover the 
         entire development process. We have substantial experience in mobile and web apps, 
         including building native apps in the area of Transportation and eCommerce.
        </p><p>Our team of expert designers, that includes full-stack developers, designers, 
        interface architects, quality assurance testers, product managers, etc, allow us to deliver
        s well-designed and optimized custom web, and mobile apps for both iOS and Android mobile platforms.</p><p>Our team can deliver robust applications using native technologies like Swift, Java or Kotlin, as well as Flutter as a solution-oriented more towards MVPs. We follow an Agile development process to develop our mobile applications.</p><p>If it is particularly needed to work within the limits of an already established technological stack - we are ready to attract the necessary engineers and developers in order to be able to deliver high-end results.</p><h2>We build software and services that are fast, stable and secure for businesses of any size. Our technologies and business processes help companies grow by increasing their efficiency, and lowering their costs, but more importantly by delivering an oustanding and unique customer experience.</h2><p>Depending on the scope of the project, features, expected traffic, and time and budget, we carefully choose the optimal options for your project. This means that you always get the best frameworks possible to meet your business goals and satisfy your users’ expectations.</p><p>Our competence on the backend side includes:
        .NET, PHP, Java, NodeJS, Go, GraphQL, MySQL, MongoDB, Postgress, Firebase</p><p>And on the front-end side:
        Angular, JavaScript, React and Vue.js.</p>`,
        benefits: [],
        image: "",
      },
      {
        id: "2",
        path: "digital-products-and-engineering",
        title: "Digital products and engineering",
        content: `<h2>Are you willing to create your new customized software?</h2><p>The building, connecting, and scaling of digital platforms for enterprises is one of our core expertise. We guide, manage, architect, and build, with agile approaches to ensure on-time delivery and stability.</p><h2>How can we help?</h2><p>— Guide, develop, and implement technical and architectural decisions that will lead to better performance, more features, and measurable results.
        — We focus on the customer, their needs, and the future, making sure what we deliver will be both secure and scalable and as integrated as possible.<br/>
        — Project management and QA are built into every engagement to ensure projects run smoothly, communication is ongoing, quality is high, timing and budget is met.<br/>
        — Architect and construct next-generation, connected, and transformative solutions that keep your organization ahead of its competitors and on track with your digital strategy.<br/>
        — Use agile at scale on our engagements with teams, tools, and processes to ensure transparency for the client and time-to-market for the solution.</p><p>We have worked with Java, .NET, PHP, Laravel, NodeJS, etc. on the backend-side and have tons of experience with Angular, React, Vue.js, JavaScript, HTML/CSS, etc. on the front-end side. We build applications of different sizes for startups, small and medium enterprises, and well-established corporations.</p><h2>Engineering services we offer include:</h2><p>— Development, Integration & Platform Engineering<br/>
        — Technology & Platform Engineering<br/>
        — Website Development<br/>
        — Mobile Development<br/>
        — eCommerce Development<br/>
        — DevOps Consulting<br/>
        — Outsourced Product Development<br/>
        — Systems Integration<br/>
        — Quality Assurance</p>`,
        benefits: [],
        image: "",
      },
      {
        id: "3",
        path: "web-and-e-commerce",
        title: "Web and e-commerce",
        content: `<h2>Clean and original web and e-commerce solutions for everyone</h2><p>We cover backend and frontend using the latest technology stacks, as well as CMS Development, Consulting, Support, and Maintenance. We have experience with WordPress, WooCommerce, Shopify as well as solutions from providers such as Contentful, while applying years of experience in HTML/CSS, Angular, React, Vue.js, JavaScript, etc.
        </p><p>We have built custom websites, designed interface architecture and developed e-commerce solutions for clients in different industries. The solutions that our team has built are stable, fast and reliable.</p>`,
        benefits: [
          `<p>TRANSPARENT PAYMENT MODEL
        </p><p>With our web and e-commerce services, we can work based on the fixed price per project model, or through the scheme of man-hour payments for each of the team members assigned to project.  Our transaprent business processes allow you to not only plan your budget further in advance but to keep track of your expenses better.</p>`,
          `<p>HIGH EFFICIENCY AND LEAD CONVERSION</p><p>By employing the websites or services designed and implemented by us, you shall be able to unleash your full sales potential in terms of lead conversion. This is reached by using agile methodologies, day-to-day progress monitoring and intuitive interface development, together with an already established technical expertise in the domain.</p>`,
          `<p>FLEXIBILITY AND TRANSPARANCY</p><p>The project implementation team is always in touch. You manage and monitor their work on a daily basis. There will be no intermediaries between you and your development team. You can communicate your requirements directly to them and solve any issues that may arise along the way. The milestone implementation scheme allows for clear management and short- or long-term planning.
          </p>`,
          `<p>UNIQUE SOLUTIONS</p><p>By aquiring our services you get fast, stable and simply awesome solutions in the long-term. We have an established team of very creative designers, and interface architects that will rethink every element, until you get the best products possible.</p>`,
        ],
        image: "",
      },
    ];
    let s = serviceData.find((service) => service.path === id);
    setActiveService({
      ...s,
      video: storage[parseInt(s.id)].video,
      poster: storage[parseInt(s.id)].poster,
    });
    setForceRefresh(false);
    setTimeout(() => setForceRefresh(true), 1);
  }, [id]);
  useEffect(() => {
    if (activeService == null || activeService.benefits.length === 0) {
      return;
    }
    setParsedBenefits(activeService.benefits.map(parseBenefits));
  }, [activeService]);
  const parseBenefits = (benefit, index) => {
    return (
      <div className="content-block" key={index}>
        {parse(benefit)}
      </div>
    );
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
              <div
                className={
                  activeService &&
                  `service-image-container service-image-container-${activeService.id}`
                }
              ></div>
              <h2 className="">{activeService && activeService.title}</h2>
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
            {activeService && parse(activeService.content)}
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
            {activeService && forceRefresh && (
              <video
                className="service-content-video-bg"
                autoPlay
                muted
                loop
                preload="yes"
                playsInline
                poster={activeService.poster}
              >
                <source src={activeService.video} type="video/mp4" />
              </video>
            )}
            <div className="service-content-video-overlay"></div>
          </div>
        </div>
      </div>
      {activeService && activeService.benefits.length > 0 && (
        <div className="home-benefits">
          <div className="content-box">
            <h2>Benefits of working with us</h2>
            <div className="row">{parsedBenefits}</div>
          </div>
        </div>
      )}
    </div>
  );
}
