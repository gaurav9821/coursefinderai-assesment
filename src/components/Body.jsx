import React, { useRef } from "react";
import DownArrow from "../icons/down-arrow.svg";
import "./Body.css";

const Body = () => {
  const endRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <section id="branchheading">
        <div className="container">
          <div className="branch-content">
            <nav className="breadcrumb">
              <a href="/">Home</a> &nbsp;•&nbsp; <span>Pune Branch</span>
            </nav>
            <h1 className="branch-title">
              KC Overseas Education <br />{" "}
              <div className="city">
                <p className="city-highlight">Pune</p>
              </div>
            </h1>
            <p className="branch-description">
              We value your career aspirations, which is why we map your
              preferences with the best that our global universities have to
              offer. Thousands of our students are pursuing their programs and
              aspirations in eminent universities globally and we welcome you to
              pursue yours!
            </p>

            <div className="branch-buttons">
              <button className="enquire-btn">Enquire Now</button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div className="down-arrow" onClick={scrollToBottom}>
                  <span>
                    <img src={DownArrow} alt="down-arrow" />
                  </span>
                </div>
                <span className="address-btn" onClick={scrollToBottom}>
                  Branch Address
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 👇 Scroll Target */}
        <div ref={endRef} style={{ height: "1px" }} />
      </section>
    </div>
  );
};

export default Body;
