import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password || !name) {
      setError("All fields are required.");
      return;
    }

    // Check if email already exists in localStorage
    if (localStorage.getItem(email)) {
      setError("An account with this email already exists.");
      return;
    }

    // Save user data in localStorage
    const newUser = { name, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));

    // Notify user of successful signup
    alert("Sign Up Successful! You can now log in.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <p>
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
      <Link to="/" className="bck-hm-btn">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default SignUp;
