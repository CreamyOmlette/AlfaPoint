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
    <div className="contact-section" id="contact-us">
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
          <p>
            <b>EU, US, Canada and Australia</b>
            <br />
            d.lipceanu@alfa-point.com
            <br />
            v.matvei@alfa-point.com{" "}
            <br />
            Mob: +373 (69) 905 471
            <br />
            <br />
            <b>MENA</b>
            <br />
            m.elobeid@alfa-point.com
            <br />
            Mob: +966 532850775
            <br />
          </p>
        </div>
        {/* <div className="content-block locations">
          <h2>Locations</h2>
          <p>
            <b>Republic of Moldova</b>
            <br />
            Chisinau, sos. Muncesti 77
            <br />
            <a href="https://goo.gl/maps/37MTn1x7A3waPqLq6">Get locations</a>
          </p>
          <p>
            <b>Romania</b>
            <br />
            mun. Bucuresti, Sector 1, str. Barbu Lautaru nr. 2
            <br />
            <a href="https://goo.gl/maps/D2Vm81JL5iFT8b3BA">Get locations</a>
          </p>
          <p>
            <b>Riyadh, Saudi Arabia</b>
            
            <br />
            <a href="/#">Get locations</a>
          </p>
        </div> */}
        
      </div>
    </div>
  );
}
