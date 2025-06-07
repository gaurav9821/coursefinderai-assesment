import React, { useState, useEffect } from "react";
import "./TestimonialCard.css";
import Comma from "../icons/Comma.svg";

const testimonials = [
  {
    text: `Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.`,
    name: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    text: `The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.`,
    name: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    text: `Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..`,
    name: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Our students love us</h2>
        <div className="testimonial-carousel">
          <button className="carousel-arrow left" onClick={handlePrev}>
            {"<"}
          </button>

          {isMobile ? (
            <div className="carousel-window">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="quote-icon">
                      <img src={Comma} alt="Quote" />
                    </div>
                    <p className="testimonial-text">{t.text}</p>
                    <p className="student-name">{t.name}</p>
                    <p className="student-university">{t.university}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="carousel-track">
              {testimonials.map((t, i) => (
                <div
                  className={`testimonial-card ${i === 1 ? "center-card" : ""}`}
                  key={i}
                >
                  <div className="quote-icon">
                    <img src={Comma} alt="Quote" />
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <p className="student-name">{t.name}</p>
                  <p className="student-university">{t.university}</p>
                </div>
              ))}
            </div>
          )}

          <button className="carousel-arrow right" onClick={handleNext}>
            {">"}
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
