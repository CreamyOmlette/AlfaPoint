import "./style.scss";
import { HeroSlider } from "../../components/hero-slider";
import { IconSlider } from "../../components/icon-slider";
import { ServicesSlider } from "../../components/services-slider";
import cvatid from "../../assets/img/clients/cvantid.png";
import supraten from "../../assets/img/clients/supraten.png";
import exfactor from "../../assets/img/clients/exfactor.png";
import teleport from "../../assets/img/clients/teleport.png";
import { ContactForm } from "../../components/contact-form";

export function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <IconSlider></IconSlider>
      <div className="who-we-are">
        <div className="content">
          <div className="content-box">
            <h2>Who are we?</h2>
            <p>
              Alfapoint is a modern and ambitious IT company available
              worldwide, headquartered in Chisinau, the Republic of Moldova, a
              country well-known for cost-effective offshore and nearshore
              solutions. Based on our experience within the EU market and highly
              skillful and dedicated team of experts, we deliver personalized
              solutions to our customers prior to their needs.
            </p>
          </div>
        </div>
        <div className="who-we-are-bg loading"></div>
      </div>
      <div className="what-we-do">
        <h2>What we do</h2>
        <ServicesSlider></ServicesSlider>
      </div>
      <div className="our-team">
        <div className="content">
          <div className="content-desc">
            <h2>Our team</h2>
            <p>
              As we do with all our clients, we build extremely close
              relationships within our team, in order to create a true sense of
              caring, family and teamwork between many different groups and
              nationalities.
            </p>
            <p>
              When we recruit talent, we’re looking for curious, intelligent,
              problem-solvers. By adding thoughtful, original ideas, our
              engineers and designers take pride in their creations and
              naturally produce their best work.
            </p>
          </div>
          <div className="featured-employees">
            <div className="employee">
              <div className="photo">
                <a className="btn-linkedin" href="/#">
                  linkedin
                </a>
              </div>
              <div className="name">Vladislav Matvei</div>
              <div className="function">CTO, Co-founder</div>
            </div>
            <div className="employee">
              <div className="photo">
                <a className="btn-linkedin" href="/#">
                  linkedin
                </a>
              </div>
              <div className="name">Dumitru Lipceanu</div>
              <div className="function">CEO, Co-founder</div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="home-benefits">
        <div className="content-box">
          <h2>Benefits of working with us</h2>
          <div className="row">
            <div className="content-block">
              <p>COLLABORATE DIRECTLY</p>
              <p>
                Build your own in-house development team in partnership with us,
                with access to our pool of solution architects and senior
                software developers that report directly to you and work
                alongside your team.
              </p>
            </div>
            <div className="content-block">
              <p>STAY UP TO DATE</p>
              <p>
                Keep your expectations managed with regular, clear progress
                reports, screenshots, and videos related to your project’s
                milestones from our team straight to yours.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="content-block">
              <p>COMMUNICATE WITH EASE</p>
              <p>
                Our team is professionally trained to clearly articulate the
                next steps, expected timelines and how many hours a project is
                taking. We take care to set and manage expectations upfront and
                along the product development process.
              </p>
            </div>
            <div className="content-block">
              <p>THE CLIENT IN MIND</p>
              <p>
                Our team is well trained in working remotely, especially as an
                original team’s extension. Our priority when designing and
                implementing the business processes is transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-partners">
        <div className="content-box">
          <h2>Our clients and partners</h2>
          <div className="clients">
            <img src={cvatid} alt=""></img>
            <img src={teleport} alt=""></img>
            <img src={supraten} alt=""></img>
            <img src={exfactor} alt=""></img>
          </div>
        </div>
      </div>
      <ContactForm></ContactForm>
    </>
  );
}
