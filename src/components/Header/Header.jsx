import React, { useState } from "react";
import HeaderIcon from "../../icons/logo.svg";
import HamburgerIcon from "../../icons/HamBurger.svg";
// import CloseIcon from "../../icons/Close.svg"; // <-- Add a Close (X) icon
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Study Destinations",
    "Services",
    "Upcoming Events",
    "Contact Us",
    "Company",
  ];

  return (
    <div className="main-header">
      <div className="top-main">
        <div className="header-main">
          <header id="header-navbar">
            <a id="kc-logo" href="/" style={{ cursor: "pointer" }}>
              <span className="logo-container">
                <img src={HeaderIcon} alt="Logo" />
              </span>
            </a>

            {/* Hamburger */}
            <div className="hamburger-icon" onClick={() => setMenuOpen(true)}>
              <img src={HamburgerIcon} alt="Menu" />
            </div>

            {/* Desktop Nav */}
            <div className="main-menu">
              {navItems.slice(0, 4).map((text) => (
                <div key={text}>
                  <span>{text}</span>
                </div>
              ))}
              <button className="finder-button">Course Finder</button>
            </div>

            {/* Mobile Fullscreen Menu */}
            {menuOpen && (
              <div className="mobile-fullscreen-menu">
                <div className="mobile-header">
                  <img
                    src={
                      menuOpen
                        ? "https://assets.studies-overseas.com/Kc_Logo_Blue_983da9e11c.svg"
                        : HeaderIcon
                    }
                    alt="Logo"
                    className="mobile-logo"
                  />
                  <div
                    className="close-text-icon"
                    onClick={() => setMenuOpen(false)}
                  >
                    X
                  </div>
                </div>
                <nav className="mobile-nav">
                  <div className="mobile-nav-item">Study Destinations</div>
                  <div className="mobile-nav-item">Services</div>
                  <div className="mobile-nav-item">Upcoming Events</div>
                  <div className="mobile-nav-item">Contact Us</div>
                  <div className="mobile-nav-item">Company</div>
                  <button className="mobile-cta-button">
                    coursefinder.ai ( For Partners )
                  </button>
                </nav>
              </div>
            )}
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
