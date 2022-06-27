import "./style.scss";

export function ContactForm() {
  return (
    <div className="contact-section">
      <div className="form">
        <h2>We’re here for you</h2>
        <p>Let’s discuss your needs as soon as possible</p>
        <form>
          <input type={"text"} name="name" placeholder="Name, Surname" />
          <input type={"text"} name="subject" placeholder="Subject" />
          <input type={"text"} name="email" placeholder="Email" />
          <textarea
            name="description"
            cols="40"
            rows="5"
            placeholder="Message"
          ></textarea>
          <div className="btn-container">
            <a className="submit" href="/#">
              Send
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
