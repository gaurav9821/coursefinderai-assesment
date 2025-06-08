import React from "react";
import AppicationAssist from "../../icons/application-assist.svg";
import EducationLoan from "../../icons/education-loan.svg";
import Insurance from "../../icons/insurance.svg";
import TestPrep from "../../icons/test-prep.svg";
import "./Services.css";

function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Services we provide</h2>
      <div className="services-container">
        <div className="service-box orange">
          <img src={TestPrep} alt="Test Prep Icon" />
          <span>Test Preparing & Coaching</span>
        </div>
        <div className="service-box red">
          <img src={EducationLoan} alt="Loan Icon" />
          <span>Course, Country & University Selection</span>
        </div>
        <div className="service-box blue">
          <img src={AppicationAssist} alt="Application Icon" />
          <span>Application Assistance</span>
        </div>

        <div className="service-box purple">
          <img src={Insurance} alt="Insurance Icon" />
          <span>Scholarships</span>
        </div>
      </div>
      <div className="enquire-wrapper">
        <button className="enquire-btn">Enquire Now</button>
      </div>
    </section>
  );
}

export default Services;
