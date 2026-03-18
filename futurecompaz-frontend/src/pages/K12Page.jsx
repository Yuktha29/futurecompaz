import Navbar from "../Components/Navbar";
import "../styles/pages.css";
import { Link } from "react-router-dom";

export default function K12Page() {
  return (
    <div className="page-shell">
      <Navbar />

      <div className="page-container">
        <div className="section-heading">
          <h2>K-12 Learning Paths</h2>
          <p>
            Explore our foundational academic programs designed to strengthen
            understanding, build confidence, and help students grow with steady,
            guided progress.
          </p>
        </div>

        <div className="k12-blocks">
          <div className="program-row">
            <div className="program-image-wrap">
              <img
                className="program-image"
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80"
                alt="Student learning math"
              />
            </div>

            <div className="program-copy">
              <h3>Math</h3>
              <p>
                Build strong mathematical thinking through guided instruction,
                conceptual clarity, and regular practice. Our math program helps
                students become more accurate, more confident, and more
                independent problem-solvers.
              </p>
              <Link to="/k12/math">
                <button className="primary-btn">View Math Program</button>
              </Link>
            </div>
          </div>

          <div className="program-row reverse">
            <div className="program-copy">
              <h3>Abacus</h3>
              <p>
                Our abacus program strengthens concentration, number sense,
                speed, and mental calculation. It is designed to make learning
                numbers enjoyable while building a lasting foundation for
                sharper thinking.
              </p>
              <Link to="/k12/abacus">
                <button className="primary-btn">View Abacus Program</button>
              </Link>
            </div>

            <div className="program-image-wrap">
<img
  className="program-image"
  src="/abacus.jpg"
  alt="Abacus learning for children"
/>
            </div>
          </div>

          <div className="program-row">
            <div className="program-image-wrap">
              <img
                className="program-image"
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80"
                alt="Child reading books"
              />
            </div>

            <div className="program-copy">
              <h3>Reading</h3>
              <p>
                Help your child improve fluency, comprehension, vocabulary, and
                confidence with a reading program that makes learning engaging,
                structured, and meaningful.
              </p>
              <Link to="/k12/reading">
                <button className="primary-btn">View Reading Program</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}