import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="header">
        <h1 className="app-tittle">
          <img src="/Images/Vector.png" alt="Icon" />
          Viyo
        </h1>
        <nav>
          <ul className="app-nav-link">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="form-section">
        <div className="name-sect">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First name"
              required
            />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-button">
          Send Message
        </button>
      </form>
      <footer>
        <div className="footer-top">
          <div className="footer-icons">
            <Link>
              {" "}
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faInstagram}
              />
            </Link>
            <Link>
              {" "}
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faFacebook}
              />
            </Link>
            <Link>
              {" "}
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faXTwitter}
              />
            </Link>
            <Link>
              {" "}
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faLinkedin}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
