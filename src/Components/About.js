import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
      <nav className="about-page-nav">
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
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Welcome to Viyo</h1>
          <p>Connecting property owners and tenants seamlessly.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Viyo is your trusted partner in simplifying property rental
          management. We bridge the gap between property owners and tenants,
          ensuring a smooth and secure experience for everyone involved. Our
          platform is built with a focus on transparency, trust, and innovation.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="about-features">
        <h2>Our Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <img src="/Images/stremline.jpg" alt="Streamlined Process" />
            <h3>Streamlined Process</h3>
            <p>Quick and easy property listings for owners and tenants.</p>
          </div>
          <div className="feature-item">
            <img src="/Images/secure.jpg" alt="Secure Platform" />
            <h3>Secure Platform</h3>
            <p>Advanced security features to protect your transactions.</p>
          </div>
          <div className="feature-item">
            <img src="/Images/sopot.jpg" alt="24/7 Support" />
            <h3>24/7 Support</h3>
            <p>Our team is here to assist you whenever you need help.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div>
          <h3>Meet Our Management Team</h3>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src="/Images/fransis.jpg" alt="Team Member" />
            <h3>Godwin Francis</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <img src="/Images/chisom.jpg" alt="Team Member" />
            <h3>Onwe Chisom</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <img src="/Images/madaki.jpg" alt="Team Member" />
            <h3>Jamaludeen Madaki</h3>
            <p>Product Manager</p>
          </div>
        </div>
        <div>
          <h3>Our Team Of Developers</h3>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src="/Images/agl.jpg" alt="Team Member" />
            <h3>Augustine Agladima</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-member">
            <img src="/Images/temi.jpg" alt="Team Member" />
            <h3>Omoniyi Temitayo</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-member">
            <img src="/Images/olayinka.jpg" alt="Team Member" />
            <h3>Adebisi olayinka</h3>
            <p>Backend Developer</p>
          </div>
        </div>
        <div>
          <h3>Our Team Of Designers</h3>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src="/Images/samuel.jpg" alt="Team Member" />
            <h3>Samuel Envuladu</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="/Images/eni.jpg" alt="Team Member" />
            <h3>Eniola Adebisi</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <h2>Ready to Get Started?</h2>
        <Link to="/signup" className="cta-button">
          Join Us Now
        </Link>
      </section>
    </div>
  );
}

export default About;
