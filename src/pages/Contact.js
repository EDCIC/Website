import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";
import ContactBg from "../assets/contact_background.jpeg"; // Import background image

const Contact = () => {
  return (
    <div
      className="contact__container"
      style={{ backgroundImage: `url(${ContactBg})` }}
    >
      <h2 className="contact__heading">Contact Us Now!</h2>
      <div className="contact__icons">
        <a
          href="https://instagram.com/edcicsxc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact__icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/entrepreneurship-development-cell-st.-xavier's-college-autonomous-kolkata/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact__icon" />
        </a>
        <a
          href="https://www.facebook.com/edcsxc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="contact__icon" />
        </a>
        <a
          href="https://www.youtube.com/@EDCICSXC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="contact__icon" />
        </a>
      </div>
      <p className="contact__email">
        <a href="mailto:pr@edcicsxc.com">pr@edcicsxc.com</a>
      </p>
    </div>
  );
};

export default Contact;
