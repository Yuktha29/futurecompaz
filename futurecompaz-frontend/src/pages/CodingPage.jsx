import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function CodingPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Coding Program</h1>
          <p>
            Help students build logic, creativity, confidence, and real technical
            skills through interactive coding experiences designed for young learners.
          </p>
        </div>
        <div className="program-row" style={{ marginBottom: "32px" }}>
  <div className="program-image-wrap">
    <img
      className="program-image"
      src="/coding.jpg"
      alt="Students learning coding"
    />
  </div>

  <div className="program-copy">
    <h3>Creative Technology Learning</h3>
    <p>
      Students explore coding through guided projects, structured problem-solving,
      and creative digital building experiences that grow confidence step by step.
    </p>
  </div>
</div>

        <div className="content-section">
          <h2>Why Learn Coding at FutureCompaz?</h2>
          <p>
            Our coding program is designed to make technology approachable,
            exciting, and meaningful for students. Instead of treating coding as
            something difficult or intimidating, we introduce it through guided
            practice, hands-on building, and engaging projects that make learning
            feel rewarding.
          </p>

          <p>
            Students do not just learn how code works — they use it to create,
            solve problems, and express ideas. The goal is to help them develop
            strong digital thinking skills while enjoying the process of building
            something of their own.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Expert Instructors</h3>
              <p>
                Our instructors combine technical knowledge with a genuine love
                for teaching, helping students feel supported at every step.
              </p>
            </div>

            <div className="feature-card">
              <h3>Interactive Learning Adventures</h3>
              <p>
                Classes include hands-on activities, group work, and engaging
                exercises so students learn by doing, not by memorizing.
              </p>
            </div>

            <div className="feature-card">
              <h3>Project-Based Learning</h3>
              <p>
                Students build websites, games, and apps, giving them the joy
                of creating something real and meaningful with code.
              </p>
            </div>

            <div className="feature-card">
              <h3>Safe Learning Environment</h3>
              <p>
                Classes are conducted in secure, supervised spaces so families
                can feel confident that students are learning in a safe setting.
              </p>
            </div>

            <div className="feature-card">
              <h3>Flexible Options</h3>
              <p>
                Families can choose learning formats that best fit their
                schedules, whether online or other structured options.
              </p>
            </div>

            <div className="feature-card">
              <h3>Student Achievements</h3>
              <p>
                From writing a first program to completing advanced projects,
                students build real confidence as they reach meaningful milestones.
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