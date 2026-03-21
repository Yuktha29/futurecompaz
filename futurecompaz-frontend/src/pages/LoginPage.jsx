import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      setSuccess(data.message || "Login successful!");

      localStorage.setItem("user", JSON.stringify(data.user));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Login fetch error:", err);
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
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

            {error && <p className="login-error">{error}</p>}
            {success && <p className="login-success">{success}</p>}

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </button>

            <p className="login-footer-text">
              Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}