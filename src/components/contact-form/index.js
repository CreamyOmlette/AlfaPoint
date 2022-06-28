import "./style.scss";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [subject, setSubject] = useState("");
  useEffect(() => {
    setSubject(
      `subject:${formState.subject};name:${formState.name},email: ${formState.email}`
    );
  }, [formState]);

  return (
    <div className="contact-section">
      <div className="form">
        <h2>We’re here for you</h2>
        <p>Let’s discuss your needs as soon as possible</p>
        <form>
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            type={"text"}
            name="name"
            placeholder="Name, Surname"
          />
          <input
            value={formState.subject}
            onChange={(e) =>
              setFormState({ ...formState, subject: e.target.value })
            }
            type={"text"}
            name="subject"
            placeholder="Subject"
          />
          <input
            type={"text"}
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
          <textarea
            name="description"
            cols="40"
            rows="5"
            placeholder="Message"
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
          ></textarea>
          <div className="btn-container">
            <a
              className="submit"
              href={`mailto: d.lipceanu@alfa-point.com?subject=${subject}&body=${formState.message}`}
            >
              Send Email
            </a>
          </div>
        </form>
      </div>
      <div className="info">
        <div className="content-block">
          <h2>General enquiries</h2>
          <p>Mob: +373 (69) 905 471</p>
          <p>E-mail: d.lipceanu@alfa-point.com</p>
          <p>v.matvei@alfa-point.com </p>
        </div>
        <div className="content-block locations">
          <h2>Locations</h2>
          <p>Sos. Muncesti 77,</p>
          <p>Chisinau, Republic of Moldova</p>
          <a href="/#">Get locations</a>
        </div>
      </div>
    </div>
  );
}
