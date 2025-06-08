import React from "react";
import "./KCUpdates.css";
import Certification from "../../icons/certification.png";
import BritishCouncil from "../../icons/BritishCouncil.png";
import Star from "../../icons/star.svg";

const KCUpdates = () => {
  return (
    <section className="kc-updates">
      <h2 className="kc-heading">Latest KC Updates</h2>
      <div className="kc-cards-wrapper">
        <div className="kc-cards">
          <div className="kc-card hiring">
            <h3 className="kc-title">We’re Hiring!</h3>
            <p className="kc-description">
              KC continues recruitments for its offices across India and Asia
              even during the unprecedented times of Covid.
            </p>
            <button className="kc-button">Apply Now</button>
          </div>

          <div className="kc-card certification">
            <img src={Certification} alt="AIRC Logo" className="kc-logo" />

            <p className="kc-org">
              American International Recruitment Council
              <div className="star-container">
                <img src={Star} alt="Star Logo" className="star-logo" />
                <img src={Star} alt="Star Logo" className="star-logo" />
                <img src={Star} alt="Star Logo" className="star-logo" />
              </div>
            </p>

            <a href="/" className="kc-link">
              Certified Agents
            </a>
            <p className="kc-date">October 2018 - 2028</p>
          </div>

          <div className="kc-card certification">
            <img
              src={BritishCouncil}
              alt="British Council Logo"
              className="council-logo"
            />
            <p className="kc-org">
              The British Council
              <div className="star-container">
                <img src={Star} alt="Star Logo" className="star-logo" />
                <img src={Star} alt="Star Logo" className="star-logo" />
                <img src={Star} alt="Star Logo" className="star-logo" />
              </div>
            </p>
            <p className="kc-link">Advanced Agent Certificate</p>
            <p className="kc-date">August 2016 - 2018</p>
          </div>
        </div>
      </div>
      <p className="kc-more">
        More News <span>{">"}</span>
      </p>
    </section>
  );
};

export default KCUpdates;
