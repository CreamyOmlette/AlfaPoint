import "./style.scss";
import { HeroSlider } from "../../components/hero-slider";
import { IconSlider } from "../../components/icon-slider";

export function Home() {
  return (
    <>
      <HeroSlider></HeroSlider>
      <IconSlider></IconSlider>
    </>
  );
}
