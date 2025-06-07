import React, { useState } from "react";
import HeaderIcon from "../icons/logo.svg";
import HamburgerIcon from "../icons/HamBurger.svg"; // <-- add your hamburger SVG icon
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="main-header">
        <div className="top-main">
          <div className="header-main">
            <header id="header-navbar">
              <a id="kc-logo" href="/" style={{ cursor: "pointer" }}>
                <span className="logo-container">
                  <img src={HeaderIcon} alt="Logo" />
                </span>
              </a>

              {/* Mobile Hamburger */}
              <div
                className="hamburger-icon"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img src={HamburgerIcon} alt="Menu" />
              </div>

              {/* Desktop Menu */}
              <div className={`main-menu ${menuOpen ? "show" : ""}`}>
                {[
                  "Study Destinations",
                  "Services",
                  "Company",
                  "Upcoming Events",
                ].map((text) => (
                  <div key={text}>
                    <span>{text}</span>
                  </div>
                ))}
                <button className="finder-button">Course Finder</button>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
