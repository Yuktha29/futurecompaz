import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.css";

const programs = [
  {
    emoji: "🔢",
    category: "K-12 • ACADEMICS",
    title: "Math Mastery",
    description:
      "Build strong foundations with engaging problem-solving sessions and real-world math applications.",
    tag: "Grades K–12",
    colorClass: "program-blue",
  },
  {
    emoji: "📖",
    category: "K-12 • ACADEMICS",
    title: "Reading & Comprehension",
    description:
      "Develop fluency, vocabulary, and a love of reading through guided sessions and classic stories.",
    tag: "Grades K–8",
    colorClass: "program-green",
  },
  {
    emoji: "💻",
    category: "CODING",
    title: "Coding for Kids",
    description:
      "From Scratch to Python — students learn logic, algorithms, and build their own projects step-by-step.",
    tag: "Ages 8–16",
    colorClass: "program-peach",
  },
  {
    emoji: "🎤",
    category: "INTERESTS",
    title: "Debate Club",
    description:
      "Sharpen public speaking, critical thinking, and confidence in a structured and fun debate environment.",
    tag: "Grades 5–12",
    colorClass: "program-lavender",
  },
  {
    emoji: "💰",
    category: "INTERESTS",
    title: "Financial Literacy",
    description:
      "Saving, spending, and investing — give your child a head start on money management skills.",
    tag: "Ages 10–18",
    colorClass: "program-blue",
  },
  {
    emoji: "🪔",
    category: "CULTURAL ROOTS",
    title: "Cultural Roots",
    description:
      "Panchatantra stories, Indian heritage, and cultural values to keep students connected to their roots.",
    tag: "All Ages",
    colorClass: "program-peach",
  },
  {
    emoji: "🎨",
    category: "INTERESTS",
    title: "Creative Arts",
    description:
      "Explore drawing, storytelling, and creative expression to nurture imagination and emotional growth.",
    tag: "Ages 6–14",
    colorClass: "program-green",
  },
  {
    emoji: "🧠",
    category: "LIFE SKILLS",
    title: "Leadership & Mindset",
    description:
      "Build resilience, emotional intelligence, and the leadership qualities that set students apart.",
    tag: "Grades 6–12",
    colorClass: "program-lavender",
  },
];

const whyChooseUs = [
  {
    emoji: "🎓",
    title: "Experienced Tutors",
    text: "Our tutors have years of experience working with students of all ages and adapt their teaching to different learning styles.",
  },
  {
    emoji: "🧩",
    title: "Personalized Learning",
    text: "One-on-one attention and customized teaching plans that match your child’s pace, strengths, and areas of growth.",
  },
  {
    emoji: "🕒",
    title: "Flexible Scheduling",
    text: "Busy family calendar? Choose timings that work best for your home routine without compromising on learning quality.",
  },
  {
    emoji: "💸",
    title: "Affordable Pricing",
    text: "Competitive pricing with practical packages so families can access quality education without financial stress.",
  },
];

const growthPoints = [
  "🎯 Career-ready skills",
  "🤝 Strong relationships",
  "💰 Financial literacy",
  "🎓 Academic excellence",
  "👑 Leadership & integrity",
  "💡 Entrepreneurial mindset",
  "🌍 Responsible citizens",
  "💪 Resilience & grit",
];

const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "My daughter went from struggling with Math to absolutely loving it! The teacher is incredibly patient and the curriculum is perfectly paced for her level.",
    name: "Priya Menon",
    meta: "New Jersey, USA • Math",
    initial: "P",
  },
  {
    stars: "★★★★★",
    quote:
      "FutureCompaz has been a complete game changer! My son's presentation, public speaking, and debating skills have improved by leaps and bounds.",
    name: "Rahul Sharma",
    meta: "Virginia, USA • Debate Club",
    initial: "R",
  },
  {
    stars: "★★★★★",
    quote:
      "My son now knows stories from Panchatantra and can speak beautifully about our heritage. It connects him to his roots in a way nothing else has.",
    name: "Ananya Iyer",
    meta: "London, UK • Cultural Roots",
    initial: "A",
  },
];

export default function LandingPage() {
  const [k12Open, setK12Open] = useState(false);
  const [interestsOpen, setInterestsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="landing-page">
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
                <Link to="/debate-club" className="fc-dropdown-item">
                  Debate Club
                </Link>
                <Link to="/financial-literacy" className="fc-dropdown-item">
                  Financial Literacy
                </Link>
                <Link to="/creative-arts" className="fc-dropdown-item">
                  Creative Arts
                </Link>
                <Link to="/leadership-mindset" className="fc-dropdown-item">
                  Leadership & Mindset
                </Link>
              </div>
            </div>

            <Link to="/coding" className="fc-nav-link">
              Coding
            </Link>

            <Link to="/cultural-roots" className="fc-nav-link">
              Cultural Roots
            </Link>

            <Link to="/cart" className="fc-nav-link fc-cart-link">
              <span className="fc-cart-icon"></span>
              Cart
            </Link>
          </div>

          <div className="fc-nav-actions">
            <button
              className="fc-login-btn"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>

            <button
              className="fc-signup-btn"
              onClick={() => navigate("/signup")}
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      <header className="fc-hero">
        <div className="fc-hero-inner">
          <div className="fc-hero-left">
            <div className="fc-badge">🧭 Your Child&apos;s Direction Starts Here</div>

            <h1>
              Equipping Youth
              <br />
              with <span>Career &amp;</span>
              <br />
              Life Skills
            </h1>

            <p>
              Live Zoom classes, real mentors, and a curriculum that goes beyond
              textbooks. For students in India and across the globe.
            </p>

            <div className="fc-hero-buttons">
<button className="fc-primary-btn" onClick={() => navigate("/courses")}>
  Explore Courses
</button>

              <button
                className="fc-enroll-btn"
                onClick={() => navigate("/signup")}
              >
                Enroll Now
              </button>
            </div>

            <div className="fc-stats">
              <div>
                <h3>5,000+</h3>
                <span>Students Enrolled</span>
              </div>
              <div>
                <h3>50+</h3>
                <span>Expert Instructors</span>
              </div>
              <div>
                <h3>12+</h3>
                <span>Courses Available</span>
              </div>
            </div>
          </div>

          <div className="fc-hero-right">
            <div className="hero-info-card hero-card-large">
              
              <h3> ✨ Find the Perfect Program for Your Child</h3>
              <p>
                From academics to coding, culture, and confidence-building, every
                class is designed to help children grow with joy.
              </p>
            </div>

            <div className="hero-info-grid">
              <div className="hero-info-card hero-card-small white-card">
                <div className="hero-card-icon">🎥</div>
                <h4>Live Online Classes</h4>
                <p>Interactive sessions with real teachers, not recorded videos.</p>
              </div>

              <div className="hero-info-card hero-card-small orange-card">
                <div className="hero-card-icon">🌍</div>
                <h4>India & NRI Friendly</h4>
                <p>Built for families in India and across the world.</p>
              </div>
            </div>

            <div className="hero-session-card">
              <div className="session-top">POPULAR LEARNING TRACKS</div>
              <h4>Academics • Coding • Debate • Culture</h4>
              <p>Pick a path your child will truly enjoy and stay excited about.</p>

              <div className="hero-track-tags">
                <span>Math</span>
                <span>Reading</span>
                <span>Python</span>
                <span>Debate</span>
                <span>Culture</span>
                <span>Leadership</span>
              </div>

              <button
                className="session-btn"
                onClick={() => navigate("/signup")}
              >
                Start Enrolling →
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="fc-section fc-programs" id="programs">
        <div className="fc-section-inner">
          <div className="section-pill">OUR PROGRAMS</div>
          <h2>
            Courses Built to <span>Build Futures</span>
          </h2>
          <p className="section-subtitle">
            Choose from our curated programs across academics, interests, and
            cultural learning — all live, all interactive.
          </p>

          <div className="program-grid">
            {programs.map((program, index) => (
              <div className="program-card" key={index}>
                <div className={`program-top ${program.colorClass}`}>
                  <span className="program-emoji">{program.emoji}</span>
                </div>

                <div className="program-body">
                  <div className="program-category">{program.category}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>

                  <div className="program-footer">
                    <span className="program-tag">{program.tag}</span>
                    <button className="program-arrow">→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="view-all-btn" onClick={() => navigate("/k12")}>
            View All Courses →
          </button>
        </div>
      </section>

      <section className="fc-section fc-why">
        <div className="fc-section-inner">
          <div className="section-pill">WHY CHOOSE US</div>
          <h2>We Don&apos;t Just Teach — We Build Futures</h2>
          <p className="section-subtitle">
            Everything we do is designed to give students a genuine edge in life
            and career.
          </p>

          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div className="why-card" key={index}>
                <div className="why-icon">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-growth">
        <div className="fc-section-inner">
          <h2>All Round Growth</h2>
          <p>FutureCompaz equips students to succeed in every facet of life</p>

          <div className="growth-grid">
            {growthPoints.map((point, index) => (
              <div className="growth-pill" key={index}>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-section fc-testimonials">
        <div className="fc-section-inner">
          <div className="section-pill orange-pill">WHAT PARENTS SAY</div>
          <h2>Real Stories from Real Families</h2>
          <p className="section-subtitle">
            Thousands of families have seen transformational results. Here&apos;s
            what they have to say.
          </p>

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">{item.stars}</div>
                <p className="testimonial-quote">{item.quote}</p>

                <div className="testimonial-user">
                  <div className="testimonial-avatar">{item.initial}</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-cta">
        <div className="fc-section-inner">
          <h2>Ready to Build Your Child&apos;s Future?</h2>
          <p>
            Join 5,000+ families already on the FutureCompaz journey. Sign up free
            — no credit card required.
          </p>

          <div className="cta-buttons">
            <button className="fc-primary-btn" onClick={() => navigate("/signup")}>
              Get Started Free
            </button>
            <button className="fc-secondary-dark">Talk to an Advisor</button>
          </div>
        </div>
      </section>

      <footer className="fc-footer">
        <div className="fc-section-inner">
          <div className="footer-top">
            <div className="footer-brand-col">
              <Link to="/" className="fc-brand footer-brand">
                <div className="fc-logo-box footer-logo-box">🧭</div>
                <div className="fc-brand-text">
                  <span className="brand-light">Future</span>
                  <span className="brand-orange">Compaz</span>
                </div>
              </Link>

              <p>
                Equipping youth with the career and life skills they need to
                thrive in a competitive world — through live, expert-led programs.
              </p>

              <div className="footer-socials">
                <span>f</span>
                <span>X</span>
                <span>▶</span>
              </div>
            </div>

            <div className="footer-links">
              <div>
                <h4>Programs</h4>
                <Link to="/k12">K–12 Academics</Link>
                <Link to="/coding">Coding</Link>
                <Link to="/debate-club">Debate Club</Link>
                <Link to="/financial-literacy">Financial Literacy</Link>
                <Link to="/cultural-roots">Cultural Roots</Link>
              </div>

              <div>
                <h4>Company</h4>
                <Link to="/">About Us</Link>
                <Link to="/">Our Team</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Blog</Link>
                <Link to="/">Contact Us</Link>
              </div>

              <div>
                <h4>Support</h4>
                <Link to="/">Help Center</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Data Deletion</Link>
                <Link to="/">Refund Policy</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2024 FutureCompaz. All rights reserved.</p>
            <div>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Data Deletion</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}