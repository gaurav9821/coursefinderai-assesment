import React, { useState, useRef, useEffect } from "react";
import Conselling from "../icons/counselling.svg";
import TestPrep from "../icons/test_prep_new.svg";
import "./DreamUniversity.css";

const stepsData = [
  {
    title: "Counselling",
    description: "Plan your Academic and Career Goals",
    icon: Conselling,
  },
  {
    title: "Test Preparation",
    description: "Appear for Standardized Tests",
    icon: TestPrep,
  },
];

const DreamUniversity = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef([]);
  const wrapperRef = useRef(null);

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollToCard(nextStep);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      scrollToCard(prevStep);
    }
  };

  const scrollToCard = (index) => {
    if (window.innerWidth <= 768 && cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    scrollToCard(currentStep);
  }, [currentStep]);

  return (
    <div className="dream-container">
      <h2 className="steps-title">
        7 Easy Steps to Land in your Dream University
      </h2>

      <div className="progress-container">
        <div className="steps-wrapper" ref={wrapperRef}>
          {stepsData.map((step, index) => (
            <div className="step-column" key={index}>
              <div
                className={`step-number ${
                  index === currentStep ? "active" : ""
                }`}
              >
                {index + 1}
              </div>

              {index < stepsData.length - 1}

              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`step-card-container ${
                  index === currentStep ? "active" : "inactive"
                }`}
              >
                <div className="step-card">
                  <div className="triangle-pointer" />
                  <img className="step-icon" src={step.icon} alt={step.title} />
                  <h3 className="step-heading">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="step-nav">
        <span
          className={`nav-btn ${currentStep === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
        >
          &lt; Previous Step
        </span>
        <span
          className={`nav-btn ${
            currentStep === stepsData.length - 1 ? "disabled" : ""
          }`}
          onClick={handleNext}
        >
          Next Step &gt;
        </span>
      </div>
    </div>
  );
};

export default DreamUniversity;
