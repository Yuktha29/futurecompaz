import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesPage.css";

const coursesData = [
  {
    id: 1,
    title: "Coding for Kids",
    category: "coding",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    oldPrice: 18000,
    price: 16000,
    dateAdded: "2026-03-18",
  },
  {
    id: 2,
    title: "Cultural Roots",
    category: "cultural roots",
    image: "/cultural-roots.jpg",
    oldPrice: 500,
    price: 200,
    dateAdded: "2026-03-17",
  },
  {
    id: 3,
    title: "Debate Club",
    category: "debate club",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    oldPrice: 18000,
    price: 16000,
    dateAdded: "2026-03-16",
  },
  {
    id: 4,
    title: "K-12 • Math (K–5)",
    category: "math",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
    oldPrice: 18000,
    price: 16000,
    dateAdded: "2026-03-15",
  },
  {
    id: 5,
    title: "K-12 • Math (6–10)",
    category: "math",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    oldPrice: 30000,
    price: 24000,
    dateAdded: "2026-03-14",
  },
  {
    id: 6,
    title: "Abacus",
    category: "abacus",
    image: "/abacus.jpg",
    oldPrice: 12000,
    price: 9000,
    dateAdded: "2026-03-13",
  },
  {
    id: 7,
    title: "Reading & Comprehension",
    category: "reading",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    oldPrice: 14000,
    price: 11000,
    dateAdded: "2026-03-12",
  },
  {
    id: 8,
    title: "Financial Literacy",
    category: "financial literacy",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    oldPrice: 15000,
    price: 12000,
    dateAdded: "2026-03-11",
  },
];

const checkboxOptions = [
  "math",
  "abacus",
  "reading",
  "cultural roots",
  "debate club",
  "financial literacy",
];

export default function CoursesPage() {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("recent");
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [maxPrice, setMaxPrice] = useState(30000);

  const toggleTitle = (title) => {
    setSelectedTitles((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const clearFilters = () => {
    setSortBy("recent");
    setSelectedTitles([]);
    setMaxPrice(30000);
  };

  const filteredCourses = useMemo(() => {
    let updated = [...coursesData];

    if (selectedTitles.length > 0) {
      updated = updated.filter((course) =>
        selectedTitles.includes(course.category)
      );
    }

    updated = updated.filter((course) => course.price <= maxPrice);

    if (sortBy === "recent") {
      updated.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    } else if (sortBy === "priceLowHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
      updated.sort((a, b) => b.price - a.price);
    }

    return updated;
  }, [sortBy, selectedTitles, maxPrice]);

  return (
    <div className="courses-page">
      <nav className="courses-navbar">
        <div className="courses-navbar-inner">
          <div className="courses-brand" onClick={() => navigate("/")}>
            <div className="courses-logo-box">🧭</div>
            <div className="courses-brand-text">
              <span className="brand-blue">Future</span>
              <span className="brand-orange">Compaz</span>
            </div>
          </div>

          <button className="back-home-btn" onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      </nav>

      <section className="courses-hero">
        <div className="courses-hero-inner">
          <div className="courses-top-row">
            <div>
              <div className="courses-pill">ALL COURSES</div>
              <h1>Explore Our Learning Programs</h1>
              <p>
                Discover classes in academics, culture, public speaking, and
                future-ready skills for every child.
              </p>
            </div>

            <button className="filters-btn" onClick={() => setFilterOpen(true)}>
              Filters
            </button>
          </div>

          <div className="course-grid">
            {filteredCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <div className="course-image-wrap">
                  <img src={course.image} alt={course.title} className="course-image" />
                </div>

                <div className="course-body">
                  <h3>{course.title}</h3>

                  <div className="course-price-row">
                    <span className="old-price">₹{course.oldPrice.toFixed(2)}</span>
                    <span className="new-price">₹{course.price.toFixed(2)}</span>
                  </div>

                  <button className="add-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="empty-state">
              No courses match your filters.
            </div>
          )}
        </div>
      </section>

      {filterOpen && (
        <div className="filter-modal-overlay" onClick={() => setFilterOpen(false)}>
          <div
            className="filter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="filter-modal-header">
              <h2>Filters</h2>
              <button
                className="modal-close-btn"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className="filter-section">
              <h4>Sort By</h4>
              <div className="sort-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="sortBy"
                    value="recent"
                    checked={sortBy === "recent"}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  Most Recent
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="sortBy"
                    value="priceLowHigh"
                    checked={sortBy === "priceLowHigh"}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  Price: Low to High
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="sortBy"
                    value="priceHighLow"
                    checked={sortBy === "priceHighLow"}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                  Price: High to Low
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="price-range-box">
                <input
                  type="range"
                  min="200"
                  max="30000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="price-slider"
                />
                <div className="price-range-values">
                  <span>₹200</span>
                  <span>Up to ₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h4>Course Titles</h4>
              <div className="checkbox-grid">
                {checkboxOptions.map((option) => (
                  <label className="checkbox-option" key={option}>
                    <input
                      type="checkbox"
                      checked={selectedTitles.includes(option)}
                      onChange={() => toggleTitle(option)}
                    />
                    <span>
                      {option
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-actions">
              <button className="clear-btn" onClick={clearFilters}>
                Clear All
              </button>
              <button className="apply-btn" onClick={() => setFilterOpen(false)}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}