import { useRef, useState } from "react";
import "../stylessheets/navbar.scss";

export default function NavBar() {

  const navRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    let threshold = window.scrollY;
    threshold >= 80 && setIsScroll(true);
  }


  return (
    <div className="navbar" onScroll={handleScroll} ref={navRef}>
      <div className="navbar-container">
        <h1 className="navbar-logo">PLANETARIUM</h1>
        <ul className="navbar-list">
          <li className="navbar-item navbar-active">Home</li>
          <li className="navbar-item">Components</li>
          <li className="navbar-item">Pages</li>
          <li className="navbar-item">Documentation</li>
          <li className="navbar-item">
            <button className="navbar-btn">Explore Now</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
