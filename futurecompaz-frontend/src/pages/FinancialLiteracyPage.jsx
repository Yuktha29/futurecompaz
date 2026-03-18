import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function FinancialLiteracyPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Financial Literacy Program</h1>
          <p>
            Help students build smart money habits early with practical,
            engaging lessons that prepare them for real life.
          </p>
        </div>

        <div className="content-section">
          <h2>Why Join Financial Literacy at FutureCompaz?</h2>
          <p>
            Our Financial Literacy program gives students a strong introduction
            to money management in a way that feels practical, relatable, and
            age-appropriate. Instead of treating finance as a distant adult topic,
            we help students understand how everyday choices shape their future.
          </p>
          <p>
            Through engaging discussions, activities, and real-life examples,
            students learn how to save wisely, spend thoughtfully, set goals,
            and make responsible decisions with confidence.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Build Smart Money Habits Early</h3>
              <p>
                Students learn the value of saving, budgeting, and making thoughtful
                spending decisions from a young age.
              </p>
            </div>

            <div className="feature-card">
              <h3>Learn Practical Life Skills</h3>
              <p>
                The program focuses on real-world financial skills such as managing
                money, setting goals, and understanding needs versus wants.
              </p>
            </div>

            <div className="feature-card">
              <h3>Interactive and Engaging Classes</h3>
              <p>
                Lessons include discussions, real-life scenarios, and activities
                that make financial concepts easier to understand and apply.
              </p>
            </div>

            <div className="feature-card">
              <h3>Develop Critical Thinking</h3>
              <p>
                Students learn to evaluate financial choices, understand consequences,
                and plan responsibly for the future.
              </p>
            </div>

            <div className="feature-card">
              <h3>Small Group Learning</h3>
              <p>
                Classes are designed to encourage participation, personalized
                attention, and stronger interaction with instructors.
              </p>
            </div>

            <div className="feature-card">
              <h3>Confidence in Talking About Money</h3>
              <p>
                Students become comfortable discussing saving, spending, investing,
                and asking smart questions about money.
              </p>
            </div>

            <div className="feature-card">
              <h3>Encourages Goal Setting</h3>
              <p>
                The program helps students learn how to set financial goals and
                work toward them with discipline and planning.
              </p>
            </div>

            <div className="feature-card">
              <h3>Introduces Entrepreneurial Thinking</h3>
              <p>
                Students gain early insight into how businesses work, how money
                grows, and how smart decisions create future opportunities.
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