import "./style.scss";
import { HeroSlider } from "../../components/hero-slider";
import { IconSlider } from "../../components/icon-slider";
import { ServicesSlider } from "../../components/services-slider";

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
    </>
  );
}
