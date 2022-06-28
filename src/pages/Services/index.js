import { ContactForm } from "../../components/contact-form";
import { OtherServicesSlider } from "../../components/other-services-slider";
import { ServiceDescriptor } from "../../components/service-descriptor";
import "./style.scss";

export function Services() {
  return (
    <>
      <ServiceDescriptor></ServiceDescriptor>
      <div className="container other-services">
        <h2>Related services</h2>
        <OtherServicesSlider></OtherServicesSlider>
      </div>
      <ContactForm />
    </>
  );
}
