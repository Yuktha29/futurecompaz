import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function MathPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Math Program</h1>
          <p>
            Elevate your child’s math mastery with engaging online classes that
            build understanding, confidence, and long-term academic strength.
          </p>
        </div>

        <div className="content-section">
          <h2>A Stronger, Smarter Way to Learn Math</h2>
          <p>
            We believe a strong foundation in mathematics is essential for
            academic success and future opportunities. Our online math classes
            are designed not just to improve scores, but to help students truly
            understand what they are learning and enjoy the subject with more
            confidence.
          </p>
          <p>
            Instead of overwhelming children with memorization, we focus on
            clear explanations, step-by-step guidance, and steady skill
            development. The goal is simple: help each child feel capable,
            supported, and ready for the next level.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Personalized Instruction</h3>
              <p>
                Our instructors work closely with each student, adjusting
                support based on strengths, challenges, and learning style.
              </p>
            </div>

            <div className="feature-card">
              <h3>Conceptual Understanding</h3>
              <p>
                We teach the “why” behind math so students build deeper clarity,
                not just short-term answers.
              </p>
            </div>

            <div className="feature-card">
              <h3>Problem-Solving Skills</h3>
              <p>
                Students learn practical strategies to approach unfamiliar and
                complex questions with confidence.
              </p>
            </div>

            <div className="feature-card">
              <h3>Interactive Learning</h3>
              <p>
                Lessons use engaging examples and active teaching methods so
                math feels more relatable and less intimidating.
              </p>
            </div>

            <div className="feature-card">
              <h3>Confidence Building</h3>
              <p>
                We reinforce every concept properly before moving ahead, helping
                students feel prepared instead of rushed.
              </p>
            </div>

            <div className="feature-card">
              <h3>Progress Monitoring</h3>
              <p>
                Regular assessment and feedback help parents stay informed and
                ensure continuous student growth.
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