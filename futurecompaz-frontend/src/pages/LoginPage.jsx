import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    navigate("/");
  };

  return (
    <div className="login-page">
      <nav className="login-navbar">
        <div className="login-navbar-inner">
          <Link to="/" className="login-brand">
            <div className="login-logo-box">🧭</div>
            <div className="login-brand-text">
              <span className="brand-blue">Future</span>
              <span className="brand-orange">Compaz</span>
            </div>
          </Link>

          <button className="back-home-btn" onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      </nav>

      <section className="login-hero">
        <div className="login-card">
          <div className="login-card-header">
            <div className="login-pill">WELCOME BACK</div>
            <h1>Log In to FutureCompaz</h1>
            <p>
              Continue your child’s learning journey with expert-led classes and
              future-ready skills.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Log In
            </button>

            <p className="login-footer-text">
              Don&apos;t have an account?{" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}