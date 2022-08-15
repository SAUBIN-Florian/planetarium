import { useRef, useState, useEffect } from "react";
import "../stylessheets/navbar.scss";

export default function NavBar() {

  const navRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className={`navbar ${offset > 80 ? "light-theme" : "dark-theme"}`} ref={navRef}>
      <div className="navbar-container">
        <h1 className="navbar-logo">PLANETARIUM</h1>
        <ul className="navbar-list">
          <li className="navbar-item navbar-active">Home</li>
          <li className="navbar-item">Community</li>
          <li className="navbar-item">Shop</li>
          <li className="navbar-item">Documentation</li>
          <li className="navbar-item">
            <button className="navbar-btn">Explore Now</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
