import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function DebateClubPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Debate Club Program</h1>
          <p>
            Build confident speakers, sharper thinkers, and stronger communicators
            through engaging and structured debate practice.
          </p>
        </div>

        <div className="content-section">
          <h2>Why Join Debate Club at FutureCompaz?</h2>
          <p>
            Our Debate Club helps students grow far beyond public speaking. It
            develops critical thinking, structured reasoning, active listening,
            teamwork, and the confidence to express ideas clearly and respectfully.
          </p>
          <p>
            Through guided debate practice, research, discussion, and feedback,
            students learn how to build balanced arguments, evaluate multiple
            viewpoints, and communicate with clarity in both academic and everyday situations.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Improved Critical Thinking</h3>
              <p>
                Debating sharpens young minds by encouraging critical analysis,
                reasoning, and thoughtful evaluation of evidence.
              </p>
            </div>

            <div className="feature-card">
              <h3>Enhanced Communication Skills</h3>
              <p>
                Students improve speech delivery, confidence, and the ability
                to express ideas effectively in debates and daily life.
              </p>
            </div>

            <div className="feature-card">
              <h3>Better Retention of Information</h3>
              <p>
                Preparing arguments requires research and real understanding,
                helping students remember information more effectively.
              </p>
            </div>

            <div className="feature-card">
              <h3>Active Listening and Note-Taking</h3>
              <p>
                Debaters learn to listen carefully, take concise notes, and
                respond thoughtfully under pressure.
              </p>
            </div>

            <div className="feature-card">
              <h3>Teamwork and Collaboration</h3>
              <p>
                Students learn how to work with teammates, build stronger cases,
                and appreciate diverse perspectives.
              </p>
            </div>

            <div className="feature-card">
              <h3>Confidence to Stand for Truth</h3>
              <p>
                Debate empowers students to defend ideas with evidence and develop
                the courage to challenge misinformation.
              </p>
            </div>

            <div className="feature-card">
              <h3>Structured Thinking</h3>
              <p>
                Students organize their ideas logically, identify weak points,
                and build more balanced, persuasive arguments.
              </p>
            </div>

            <div className="feature-card">
              <h3>Fun and Engaging Learning</h3>
              <p>
                Debate is not just educational — it is interactive, exciting,
                and highly motivating for curious young learners.
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