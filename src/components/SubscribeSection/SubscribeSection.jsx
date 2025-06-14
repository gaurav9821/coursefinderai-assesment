import React from "react";
import "./SubscribeSection.css";
import Union from "../../icons/Union.svg";

const SubscribeSection = () => {
  return (
    <div className="subscribe-wrapper">
      {/* ✅ Icon OUTSIDE the container, ABOVE everything */}
      <img src={Union} alt="Decorative Icon" className="corner-icon" />

      <section className="subscribe-section">
        {/* SVG curve */}
        <div className="subscribe-curve">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fill="#0b1a2e"
              d="M0,160 C480,0 960,0 1440,160 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* Main content */}
        <div className="subscribe-container">
          <h2 className="subscribe-heading">Stay updated with KC Overseas</h2>
          <div className="subscribe-form">
            <input
              name="email-id"
              id="email-id"
              type="email"
              placeholder="Email ID"
              className="subscribe-input"
            />
            <select
              className="subscribe-select"
              name="select-name"
              id="select-name"
            >
              <option value="">I'm Interested in</option>
              <option value="">Student</option>
              <option value="">Institute</option>
              <option value="">Partner</option>
              <option value="">Franchise</option>
            </select>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribeSection;
