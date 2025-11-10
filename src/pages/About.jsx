import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          {/* Hero Section */}
          <section className="about-hero">
            <div className="hero-content">
              <h1>About Our Library</h1>
              <p className="hero-subtitle">
                Discover the story behind our passion for books and knowledge sharing
              </p>
            </div>
            <div className="hero-graphic">
              <span className="library-emoji">🏛️</span>
            </div>
          </section>


          {/* Mission Section */}
          <section className="mission-section">
            <div className="section-header">
              <h2>Our Mission</h2>
              <div className="section-divider"></div>
            </div>
            <div className="mission-content">
              <p className="mission-text">
                We believe in the transformative power of books. Our mission is to create a
                digital sanctuary where book lovers can discover, share, and celebrate literature
                from around the world. We're committed to making knowledge accessible to everyone.
              </p>
              <div className="mission-stats">
                <div className="stat-card">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Books Available</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Access</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="section-header">
              <h2>Why Choose Our Library?</h2>
              <div className="section-divider"></div>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h3>Easy Discovery</h3>
                <p>Find your next favorite book with our advanced search and filtering system</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Access our library from any device, anywhere, anytime</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Community Rated</h3>
                <p>Discover books loved by our community with authentic ratings and reviews</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🆓</div>
                <h3>Completely Free</h3>
                <p>No subscription fees, no hidden costs - just pure book love</p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <div className="section-header">
              <h2>Our Vision</h2>
              <div className="section-divider"></div>
            </div>
            <div className="vision-content">
              <div className="vision-text">
                <p>
                  We envision a world where everyone has access to great literature and
                  the opportunity to discover new perspectives through books. Our platform
                  is built with love for the reading community, by people who understand
                  the magic of getting lost in a good book.
                </p>
                <p>
                  From classic literature to contemporary bestsellers, we're constantly
                  expanding our collection to bring you the best reading experience possible.
                </p>
              </div>
              <div className="vision-graphic">
                <span className="vision-emoji">🌟</span>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-content">
              <h2>Ready to Explore?</h2>
              <p>Join thousands of readers in discovering amazing books</p>
              <div className="cta-buttons">
                <Link to="/books/all" className="cta-btn primary">
                  Browse Books
                </Link>
                <Link to="/add-book" className="cta-btn secondary">
                  Add a Book
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


export default About