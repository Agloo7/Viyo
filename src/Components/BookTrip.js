import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/BookTrip.css";

function BookTrip() {
  const [showChat, setShowChat] = useState(false); // Toggle Chat Modal
  const [currentProperty, setCurrentProperty] = useState(null); // Store current property
  const [message, setMessage] = useState(""); // Store user's message

  const properties = [
    {
      id: 1,
      name: "Beautiful Beach House",
      location: "Malibu, California",
      price: 300,
      image: "/Images/beach.jpg",
    },
    {
      id: 2,
      name: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      price: 200,
      image: "/Images/mountain.jpg",
    },
    {
      id: 3,
      name: "Modern City Apartment",
      location: "New York City, New York",
      price: 400,
      image: "/Images/modern.jpg",
    },
  ];

  // Function to open chat modal
  const openChat = (property) => {
    setCurrentProperty(property);
    setShowChat(true);
  };

  // Function to close chat modal
  const closeChat = () => {
    setShowChat(false);
    setMessage("");
  };

  // Function to simulate sending a message
  const handleSendMessage = () => {
    alert(`Message sent to the owner of "${currentProperty.name}": ${message}`);
    closeChat();
  };

  return (
    <div className="book-trip-body">
      {/* Navigation Bar */}
      <header className="book-trip-header">
        <nav className="book-trip-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <h1>Book Your Dream Trip</h1>
      </header>

      {/* Property List Section */}
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} />
            <div className="property-details">
              <h3>{property.name}</h3>
              <p>Location: {property.location}</p>
              <p>Price: ${property.price} per night</p>
            </div>
            <div className="property-actions">
              <Link to={`/book-now/${property.id}`}>
                <button className="book-button">Book Now</button>
              </Link>
              {/* Chat Button */}
              <button
                className="chat-button"
                onClick={() => openChat(property)}
              >
                Chat with Owner
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Modal */}
      {showChat && (
        <div className="chat-modal-overlay">
          <div className="chat-modal">
            <h3>Chat with the Owner of "{currentProperty.name}"</h3>
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
            ></textarea>
            <div className="chat-modal-buttons">
              <button className="send-button" onClick={handleSendMessage}>
                Send Message
              </button>
              <button className="close-button" onClick={closeChat}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookTrip;
