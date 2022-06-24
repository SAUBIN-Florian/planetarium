import React from 'react';
import "../stylessheets/footer.scss";

// IMG IMPORT
import saturn5 from "../assets/saturn5.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img className="footer-img" src={saturn5} alt="Saturn 5" />
        <div className="footer-action">
          <h1>Get started with <br /> Planetarium today</h1>
          <button className="footer-btn">Explore Now</button>
        </div>
      </div>
    </div>
  )
}
