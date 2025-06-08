import React from "react";
import "./WebinarsEvents.css";
import usaImage from "../../icons/usa.png";
import nzImage from "../../icons/nz.png";
import ukImage from "../../icons/uk.png";

const events = [
  {
    id: 1,
    date: "Mar 19 • 05:00 PM to 07:30 PM",
    title: "USA Virtual Admission Day",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: usaImage,
  },
  {
    id: 2,
    date: "May 18 - May 21 • 04:30 PM to 06:30 PM",
    title: "New Zealand Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: nzImage,
  },
  {
    id: 3,
    date: "May 24 - May 28 • 04:00 PM to 06:00 PM",
    title: "UK Virtual Admissions Week",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: ukImage,
  },
];

const WebinarsEvents = () => {
  return (
    <div className="webinars-container">
      <h2>Webinars & Events</h2>

      {/* Desktop View */}
      <div className="events-wrapper desktop-view">
        <div className="event-card large">
          <img
            src={events[0].image}
            alt={events[0].title}
            className="event-img"
          />
          <div className="event-details">
            <p className="event-date">{events[0].date}</p>
            <h3>{events[0].title}</h3>
            <p className="event-desc">{events[0].description}</p>
            <a href="#" className="register-link">
              Register Now <span>{">"}</span>
            </a>
          </div>
        </div>

        <div className="right-column">
          {events.slice(1).map((event) => (
            <div className="event-card small" key={event.id}>
              <img
                src={event.image}
                alt={event.title}
                className="event-img small-img"
              />
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                <h3>{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <a href="#" className="register-link">
                  Register Now <span>{">"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View Slider */}
      <div className="mobile-slider">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-img" />
            <div className="event-details">
              <p className="event-date">{event.date}</p>
              <h3>{event.title}</h3>
              <p className="event-desc">{event.description}</p>
              <a href="#" className="register-link">
                Register Now <span>{">"}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="see-more">
        <a href="#">
          See More <span>{">"}</span>
        </a>
      </div>
    </div>
  );
};

export default WebinarsEvents;
