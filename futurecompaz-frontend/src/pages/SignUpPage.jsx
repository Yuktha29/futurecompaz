import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.grade ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          grade: formData.grade,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed.");
      }

      setMessage("Account created successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <nav className="fc-navbar">
        <div className="fc-navbar-inner">
          <Link to="/" className="fc-brand">
            <div className="fc-logo-box">🧭</div>
            <div className="fc-brand-text">
              <span className="brand-blue">Future</span>
              <span className="brand-orange">Compaz</span>
            </div>
          </Link>

          <div className="fc-nav-actions">
            <button className="fc-login-btn" onClick={() => navigate("/")}>
              Back Home
            </button>
          </div>
        </div>
      </nav>

      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="signup-badge">Join FutureCompaz</div>
          <h1>Create Your Account</h1>
          <p className="signup-subtitle">
            Start your child’s journey with live expert-led learning, confidence,
            and future-ready skills.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label>Grade / Class</label>
              <input
                type="text"
                name="grade"
                placeholder="Example: Grade 7"
                value={formData.grade}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="signup-field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {error && <p className="signup-error">{error}</p>}
            {message && <p className="signup-success">{message}</p>}

            <button type="submit" className="signup-submit-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}