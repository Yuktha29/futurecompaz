import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
    setSuccess("");

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

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5050/api/auth/signup", {
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
        setError(data.message || "Signup failed.");
        return;
      }

      setSuccess(data.message || "Account created successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Signup fetch error:", err);
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="signup-topbar">
            <Link to="/" className="back-home-btn">
              ← Back to Home
            </Link>
          </div>

          <span className="signup-badge">Join FutureCompaz</span>
          <h1>Create your account</h1>
          <p className="signup-subtitle">
            Sign up to explore programs and get started.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="signup-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="signup-field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="signup-field">
              <label>Grade / Class</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="Enter your grade/class"
              />
            </div>

            <div className="signup-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
            </div>

            <div className="signup-field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>

            {error && <p className="signup-error">{error}</p>}
            {success && <p className="signup-success">{success}</p>}

            <button
              type="submit"
              className="signup-submit-btn"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;