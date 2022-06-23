import { ContactForm } from "../../components/contact-form";
import { ServiceDescriptor } from "../../components/service-descriptor";
import "./style.scss";

export function Services() {
  return (
    <>
      <ServiceDescriptor></ServiceDescriptor>
      <ContactForm />
    </>
  );
}
