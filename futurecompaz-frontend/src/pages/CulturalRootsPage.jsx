import Navbar from "../Components/Navbar";
import "../styles/pages.css";

export default function CulturalRootsPage() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="page-hero-banner">
          <h1>Cultural Roots Program</h1>
          <p>
            An immersive journey into Indian heritage that helps students connect
            classical wisdom, language, festivals, and storytelling with modern life.
          </p>
        </div>

        <div className="program-row" style={{ marginBottom: "32px" }}>
          <div className="program-image-wrap">
            <img
              className="program-image"
              src="/cultural-roots.jpg"
              alt="Indian culture learning for students"
            />
          </div>

          <div className="program-copy">
            <h3>Heritage That Feels Alive</h3>
            <p>
              Students explore Indian culture through stories, poetry, sayings,
              festivals, and traditions in a way that feels engaging, meaningful,
              and relevant to the present day.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>What Students Explore</h2>
          <p>
            This course offers an immersive journey into the heart of Indian
            heritage, designed to bridge the gap between ancient wisdom and
            modern life. Students discover culture not as a list of facts, but
            as a living tradition that shapes identity, values, and expression.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Panchatantra Stories</h3>
              <p>
                Students explore timeless moral lessons through engaging stories
                that build character, reflection, and critical thinking.
              </p>
            </div>

            <div className="feature-card">
              <h3>Puranic Narratives</h3>
              <p>
                Learners are introduced to the grand narratives of the Puranas
                and the deeper ideas, values, and symbolism they carry.
              </p>
            </div>

            <div className="feature-card">
              <h3>Padya and Kavita</h3>
              <p>
                Students experience the rhythm and beauty of traditional poetry,
                developing appreciation for language, expression, and literary form.
              </p>
            </div>

            <div className="feature-card">
              <h3>Kahavat and Samethalu</h3>
              <p>
                Practical wit and wisdom come alive through proverbs that enrich
                language and teach thoughtful everyday lessons.
              </p>
            </div>

            <div className="feature-card">
              <h3>Festivals and Traditions</h3>
              <p>
                Students learn the deeper significance behind seasonal festivals,
                customs, and local traditions in a meaningful cultural context.
              </p>
            </div>

            <div className="feature-card">
              <h3>Language Foundation</h3>
              <p>
                Along the way, students build a foundational familiarity with
                cultural language and expression in a natural, enjoyable format.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: "28px" }}>
          <h2>Why Join the Culture Class at FutureCompaz?</h2>
          <p>
            Our Cultural Roots program helps students reconnect with heritage in
            a way that feels warm, thoughtful, and relevant. Rather than relying
            on dry memorization, we use stories, poetry, proverbs, and traditions
            to help students experience culture with pride and understanding.
          </p>

          <div className="feature-list">
            <div className="feature-card">
              <h3>Holistic Cultural Integration</h3>
              <p>
                We do not just teach facts — we connect classical literature,
                values, and traditions to life in the present day.
              </p>
            </div>

            <div className="feature-card">
              <h3>Mastery of Expression</h3>
              <p>
                Students gain a unique linguistic edge through proverbs, poetic
                structures, and forms of expression rarely covered elsewhere.
              </p>
            </div>

            <div className="feature-card">
              <h3>Interactive Storytelling</h3>
              <p>
                Instead of passive lectures, students engage with stories from
                the Panchatantra and other traditions in an active, memorable way.
              </p>
            </div>

            <div className="feature-card">
              <h3>Community and Identity</h3>
              <p>
                The class gives students a supportive space to celebrate festivals,
                reconnect with heritage, and build a stronger cultural identity.
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