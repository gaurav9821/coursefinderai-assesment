import GlobalPhoto from "../icons/Global.png";
import BulletPoint from "../icons/BulletPoint.svg";
import "./GlobalAmbitions.css";

function GlobalAmbitions() {
  return (
    <section className="ambition-section">
      <div className="ambition-wrapper">
        <div className="ambition-image">
          <div className="bg-box"></div>
          <img src={GlobalPhoto} alt="Counselling Session" />
        </div>
        <div className="ambition-content">
          <h2>Realize your global ambitions with us</h2>
          <p>
            With a keen ear for your choices and preferences, our counselling
            experience is so seamless that you will land in your dream
            university even before you do!
          </p>
          <ul className="ambition-list">
            <li>
              <img src={BulletPoint} alt="BulletPoint" />
              <span>Virtual & In Person Coaching and Counselling</span>
            </li>
            <li>
              <img src={BulletPoint} alt="BulletPoint" />
              <span>
                Comprehensive Assistance for Applications, Admissions & Visas
              </span>
            </li>
            <li>
              <img src={BulletPoint} alt="BulletPoint" />
              <span>High Value Scholarships and Study Loans</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GlobalAmbitions;
