import React from "react";
import WatchLogo from "../WATCHLOGO/WatchLogo";
import MapPage from "../MAP/MapPage";
import first from "../../IMAGES/corporate1.png";
import second from "../../IMAGES/corporate2.png";

function WhyWe() {
  return (
    <>
      <div className="why-container">
        <div className="why-content">
          <WatchLogo />
          <h1>corporate events</h1>
          <div className="corporate">
            <h2>corporate parties</h2>
            <div className="cards">
              <div className="first-card">
                <img src={first} alt="" />
                <p>
                  Buffet menu from 10$ per <br /> person (up to 150 people)
                </p>
              </div>
              <div className="second-card">
                <img src={second} alt="" />
                <p>
                  Banquet menu from 15$ per <br /> person (up to 100 people).
                </p>
              </div>
            </div>
          </div>
          <div className="why-we">
            <h2>Why we</h2>
            <ul>
              <li>
                <p>
                  Separate room for 30 people with professional karaoke system
                </p>
              </li>
              <li>
                <p>
                  Comfortable parking and close to three metro stations in the
                  city center
                </p>
              </li>
              <li>
                <p>Big screen</p>
              </li>
              <li>
                <p>Dance floor with modern sound and light equipment</p>
              </li>
              <li>
                <p>Stage with projection screen</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MapPage />
    </>
  );
}

export default WhyWe;
