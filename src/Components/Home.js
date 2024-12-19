import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faCircleArrowRight,
  faCircleArrowLeft,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../Styles/Home.css";
function Home() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-nav">
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
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <ul className="app-nav-contact">
              <li>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="app-header-details">
          <h1>
            DISCOVER <br /> YOUR RENTALS
          </h1>
          <p>Get amazing experience here, no matter where you want to go,</p>
          <p className="sec-para">We can help you go there anytime.</p>
        </div>
        <div className="app-book-trip-link">
          <Link to="/book-trip" className="book-trip">
            {" "}
            Book A trip <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </Link>
        </div>
      </header>

      {/* Services section */}
      <section className="service-section">
        <div className="service-tittle">
          <h3>Service And Features</h3>
          <h1>Where Owners Meet Tenants</h1>
          <p>
            Connecting property owners and tenants seamlessly. Explore features
            designed to make renting simple, efficient, and hassle-free.
          </p>
        </div>
        <div className="service-features">
          <div className="features-one">
            <h2>Verified Listings</h2>
            <p>
              Browse a curated selection of verified rental properties to ensure
              quality and reliability for your next home.
            </p>
          </div>
          <div className="features-two">
            <h2>Seamless Communication</h2>
            <p>
              Easily connect with property owners or tenants using our
              integrated messaging system, ensuring quick and efficient
              communication.
            </p>
          </div>
          <div className="features-tree">
            <h2>Secure Transactions</h2>
            <p>
              Make payments or deposits with confidence using our secure
              transaction system, protecting both tenants and property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Destination Section */}
      <section>
        <div className="destination-head">
          <div className="dest-head">
            <p>Popular Destination</p>
            <h3>Recommended Destinations</h3>
          </div>
          <div className="dest-arrows">
            <a href="left.com">
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </a>
            <a href="right.com">
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </a>
          </div>
        </div>
        <div className="destination-images">
          <div>
            <img src="/Images/destination (1).png" alt="destination" />
          </div>
          <div>
            <img src="/Images/destination (4).png" alt="destination" />
          </div>
          <div>
            <img src="/Images/destination (3).png" alt="destination" />
          </div>
          <div>
            <img src="/Images/destination (2).png" alt="destination" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-top">
          <div className="news">
            <FontAwesomeIcon className="news-icon" icon={faEnvelope} />
            <h3>NEWS & OFFERS</h3>
          </div>
          <div className="email-input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </div>
          <div className="footer-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faFacebook}
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faXTwitter}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="footer-social-icons"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <div className="main-footer">
          <div className="footer-details tittle">
            <h3>
              <img src="/Images/Vector.png" alt="Icon" />
              Viyo
            </h3>
            <p>
              Discover a seamless way to find your ideal rental or trusted
              tenants. At Viyo, we bridge the gap between owners and renters
              with convenience and reliability.
            </p>
          </div>
          <div className="footer-details">
            <h3>CONTACTS</h3>
            <p>
              123 Street, City, Country <br />
              Phone: +123 456 7890 <br />
              Email: contact@example.com
            </p>
          </div>
          <div className="footer-details links-section">
            <h3>PAGE SITE</h3>
            <Link className="footer-links">Terms & Conditions</Link>
            <Link className="footer-links">Gallery</Link>
            <Link className="footer-links">Accommodation</Link>
            <Link className="footer-links">Dining</Link>
          </div>
          <div className="footer-details links-section">
            <h3>HOT LINKS</h3>
            <Link className="footer-links">About</Link>
            <Link className="footer-links">Our Mission & Vision</Link>
            <Link className="footer-links">Contact Us</Link>
            <Link className="footer-links">Our Values</Link>
          </div>
        </div>
        <div className="btn">
          <button id="back-to-top">Back To The Top</button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
