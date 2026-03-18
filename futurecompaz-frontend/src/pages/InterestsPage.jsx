import Navbar from "../Components/Navbar";
import "../styles/pages.css";
import { Link } from "react-router-dom";

export default function InterestsPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="section-heading">
          <h2>Interest-Based Learning Paths</h2>
          <p>
            Explore programs that help students grow in confidence, communication,
            life skills, and practical real-world thinking.
          </p>
        </div>

        <div className="k12-blocks">
          <div className="program-row">
            <div className="program-image-wrap">
              <img
                className="program-image"
                src="/financial-literacy.jpg"
                alt="Financial literacy for students"
              />
            </div>

            <div className="program-copy">
              <h3>Financial Literacy</h3>
              <p>
                Help students build smart money habits early through practical
                lessons in saving, budgeting, goal setting, and responsible
                decision-making.
              </p>
              <Link to="/interests/financial-literacy">
                <button className="primary-btn">View Financial Literacy</button>
              </Link>
            </div>
          </div>

          <div className="program-row reverse">
            <div className="program-copy">
              <h3>Debate Club</h3>
              <p>
                Strengthen critical thinking, public speaking, confidence, and
                structured reasoning through engaging debates and collaborative
                discussion.
              </p>
              <Link to="/interests/debate-club">
                <button className="primary-btn">View Debate Club</button>
              </Link>
            </div>

            <div className="program-image-wrap">
              <img
                className="program-image"
                src="/debate-club.jpg"
                alt="Debate club for students"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}