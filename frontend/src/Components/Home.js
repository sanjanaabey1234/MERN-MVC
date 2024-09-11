import React from "react";
import Nav from "../Components/Nav/Nav";
import "./home.css";

function Home() {
  return (
    <div>
      <Nav />
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to the User Management System</h1>
          <p>Your one-stop solution for managing user data efficiently.</p>
        </div>
      </header>
      <section className="home-intro">
        <div className="intro-content">
          <h2>Why Choose Our System?</h2>
          <p>
            Our User Management System is designed to provide seamless
            management of user data. With intuitive interfaces and powerful
            features, you can easily track, update, and analyze user
            information.
          </p>
          <ul>
            <li>Intuitive user interface for easy navigation</li>
            <li>Robust search and filtering capabilities</li>
            <li>Real-time data updates and notifications</li>
            <li>Comprehensive reporting and analytics</li>
          </ul>
        </div>
      </section>
      <section className="home-content">
        <div className="home-card">
          <h2>Manage Users</h2>
          <p>View and manage all user details from a centralized location.</p>
          <a href="/userdetails" className="home-link">
            Go to User List
          </a>
        </div>
        <div className="home-card">
          <h2>Statistics</h2>
          <p>Get insights into user activities and system performance.</p>
          <a href="/statistics" className="home-link">
            View Statistics
          </a>
        </div>
        <div className="home-card">
          <h2>Settings</h2>
          <p>Customize your user management settings to fit your needs.</p>
          <a href="/settings" className="home-link">
            Go to Settings
          </a>
        </div>
      </section>
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are dedicated to providing the best user management experience.
              Our team is committed to continuous improvement and innovation.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 1234 Elm Street, Suite 567, City, State, 12345</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 User Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
