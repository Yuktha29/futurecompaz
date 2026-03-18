import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function ReadingPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Reading Program</h1>
          <p>
            Develop fluency, comprehension, vocabulary, and confidence with a
            reading journey that helps children understand and enjoy what they
            read.
          </p>
        </div>

        <div className="content-section">
          <h2>Helping Children Read with Clarity and Confidence</h2>
          <p>
            Our reading program is designed to support children at every stage
            of their growth as readers. Whether a child is building fluency,
            improving comprehension, or expanding vocabulary, we create a clear
            path that feels encouraging and engaging.
          </p>
          <p>
            We focus on meaningful reading, not rushed reading. Students learn
            how to understand ideas, express themselves better, and become more
            confident in both academic and everyday communication.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Fluency Development</h3>
              <p>
                Students improve pace, pronunciation, and comfort while reading
                aloud and independently.
              </p>
            </div>

            <div className="feature-card">
              <h3>Comprehension Skills</h3>
              <p>
                We teach children how to understand meaning, identify key ideas,
                and think critically about texts.
              </p>
            </div>

            <div className="feature-card">
              <h3>Vocabulary Growth</h3>
              <p>
                Lessons introduce useful new words in context so children can
                remember and use them naturally.
              </p>
            </div>

            <div className="feature-card">
              <h3>Confidence in Expression</h3>
              <p>
                Better reading supports stronger speaking, writing, and overall
                classroom participation.
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