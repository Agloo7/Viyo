import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Handle error messages
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(email));
    if (!user) {
      setError("User not found. Please sign up first.");
      return;
    }

    // Verify credentials
    if (user.password !== password) {
      setError("Invalid credentials. Please try again.");
      return;
    }

    // Simulate successful login
    alert(`Welcome back, ${user.name}!`);
    localStorage.setItem("userToken", `token-${email}`); // Simulate token storage
    navigate("/book-trip"); // Redirect to the Book Trip page
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Log In
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
      <Link to="/" className="bck-hm-btn">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default Login;
