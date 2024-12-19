import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PaystackButton } from "react-paystack"; // Import PaystackButton
import "../Styles/BookNow.css";

function BookNow() {
  const { id } = useParams();

  // You can dynamically fetch property details based on the id
  const property = {
    1: {
      name: "Beautiful Beach House",
      location: "Calabar, Nigeria",
      price: 30000,
      image: "/Images/beach.jpg",
    },
    2: {
      name: "Cozy Mountain Cabin",
      location: "Lagos, Nigeria",
      price: 20000,
      image: "/Images/mountain.jpg",
    },
    3: {
      name: "Modern City Apartment",
      location: "Abuja, Nigeria",
      price: 40000,
      image: "/Images/modern.jpg",
    },
  };

  const propertyDetails = property[id] || {};
  const [amount] = useState(propertyDetails.price * 100); // Convert price to kobo (100 kobo = 1 Naira)

  // Replace with your Paystack public key
  const publicKey = "pk_live_caf9a177bd864ab71eb7cec0d6425e6b6c55e67b";

  // Handle payment success
  const handlePaystackSuccess = (reference) => {
    alert("Payment was successful! Reference: " + reference);
    // Send this reference to your backend for verification (optional)
  };

  // Handle payment modal close
  const handlePaystackClose = () => {
    alert("Payment Modal Closed!");
  };

  // Define the Paystack button component properties
  const componentProps = {
    email: "user@example.com", // User's email
    amount: amount, // Amount in kobo (100 kobo = 1 Naira)
    publicKey: publicKey,
    text: "Proceed to Payment",
    onSuccess: handlePaystackSuccess,
    onClose: handlePaystackClose,
  };

  return (
    <div className="book-now-body">
      <header className="book-now-header">
        <h1>Book Now</h1>
      </header>

      <div className="book-now-details">
        <h2>{propertyDetails.name}</h2>
        <img
          src={propertyDetails.image}
          alt={propertyDetails.name}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <p>Location: {propertyDetails.location}</p>
        <p>Price: ₦{propertyDetails.price} per night</p>
      </div>

      <div className="book-now-actions">
        {/* Paystack Button */}
        <PaystackButton {...componentProps} />
        <Link to="/">
          {" "}
          <button className="cancel-button">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default BookNow;
