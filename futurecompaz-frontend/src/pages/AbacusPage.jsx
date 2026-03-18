import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function AbacusPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Abacus Program</h1>
          <p>
            Build speed, focus, number sense, and mental agility through a
            structured abacus program designed for young learners.
          </p>
        </div>

        <div className="content-section">
          <h2>Sharper Thinking Starts Early</h2>
          <p>
            Our abacus program helps children develop a powerful relationship
            with numbers through visual learning, repetition, and mental
            calculation. It is more than arithmetic practice — it is a way to
            strengthen concentration, memory, and confidence.
          </p>
          <p>
            With patient instruction and progressive levels, students learn to
            solve calculations more efficiently while also becoming more focused
            and disciplined in the learning process.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Stronger Number Sense</h3>
              <p>
                Children gain a clearer understanding of numbers, place value,
                and patterns.
              </p>
            </div>

            <div className="feature-card">
              <h3>Better Concentration</h3>
              <p>
                Abacus practice improves attention span and helps children stay
                mentally engaged for longer.
              </p>
            </div>

            <div className="feature-card">
              <h3>Faster Mental Math</h3>
              <p>
                Students gradually move from physical bead work to confident
                mental calculation.
              </p>
            </div>

            <div className="feature-card">
              <h3>Confidence with Numbers</h3>
              <p>
                As accuracy and speed improve, students feel more comfortable in
                math-related tasks overall.
              </p>
            </div>
          </div>

          <div className="cta-strip">
            <button className="primary-btn">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}