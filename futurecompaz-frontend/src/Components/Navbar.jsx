import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [k12Open, setK12Open] = useState(false);
  const [interestsOpen, setInterestsOpen] = useState(false);

  return (
    <nav className="fc-navbar">
      <div className="fc-navbar-inner">
        <Link to="/" className="fc-brand">
          <div className="fc-logo-box">🧭</div>
          <div className="fc-brand-text">
            <span className="brand-blue">Future</span>
            <span className="brand-orange">Compaz</span>
          </div>
        </Link>

        <div className="fc-nav-links">
          <Link to="/" className="fc-nav-link fc-nav-home active">
            Home
          </Link>

          <div
            className="fc-dropdown"
            onMouseEnter={() => setK12Open(true)}
            onMouseLeave={() => setK12Open(false)}
          >
            <div className="fc-k12-group">
              <Link to="/k12" className="fc-nav-link">
                K - 12
              </Link>

              <button
                type="button"
                className={`fc-arrow-toggle ${k12Open ? "is-open" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setK12Open((prev) => !prev);
                }}
                aria-label="Toggle K-12 menu"
              >
                <span className="fc-caret">⌄</span>
              </button>
            </div>

            <div className={`fc-dropdown-menu ${k12Open ? "show" : ""}`}>
              <Link to="/k12/math" className="fc-dropdown-item">
                Math
              </Link>
              <Link to="/k12/abacus" className="fc-dropdown-item">
                Abacus
              </Link>
              <Link to="/k12/reading" className="fc-dropdown-item">
                Reading
              </Link>
            </div>
          </div>

          <div
            className="fc-dropdown"
            onMouseEnter={() => setInterestsOpen(true)}
            onMouseLeave={() => setInterestsOpen(false)}
          >
            <div className="fc-k12-group">
              <Link to="/interests" className="fc-nav-link">
                Interests
              </Link>

              <button
                type="button"
                className={`fc-arrow-toggle ${interestsOpen ? "is-open" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setInterestsOpen((prev) => !prev);
                }}
                aria-label="Toggle Interests menu"
              >
                <span className="fc-caret">⌄</span>
              </button>
            </div>

            <div className={`fc-dropdown-menu ${interestsOpen ? "show" : ""}`}>
              <Link to="/interests/financial-literacy" className="fc-dropdown-item">
                Financial Literacy
              </Link>
              <Link to="/interests/debate-club" className="fc-dropdown-item">
                Debate Club
              </Link>
            </div>
          </div>

 <Link to="/coding" className="fc-nav-link">
  Coding
</Link>
<Link to="/cultural-roots" className="fc-nav-link">
  Cultural Roots
</Link>
        </div>

        <div className="fc-nav-actions">
          <button className="fc-login-btn">Log In</button>
          <button className="fc-signup-btn">Sign Up Free</button>
        </div>
      </div>
    </nav>
  );
}