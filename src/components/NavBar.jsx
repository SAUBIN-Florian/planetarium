import { useRef, useState, useEffect } from "react";
import "../stylessheets/navbar.scss";

const MobileMenu = () => {
  return (
    <div className="navbar-mobile-menu light-theme">
        <a href="#home">Home</a>
        <a href="#community">Community</a>
        <a href="#Shop">Shop</a>
        <a href="#Documentation">Documentation</a>
        <button className="navbar-mobile-btn">Explore Now</button>
    </div>
  )
}

export default function NavBar() {

  const navRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  }

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
        <button className="show-mobile-menu-btn unicode" onClick={toggleMobileMenu}>&#8801;</button>
        {isShown && <MobileMenu />}
        {isShown && <button className="close-mobile-menu-btn unicode" onClick={toggleMobileMenu}>&times;</button>}
      </div>
    </div>
  )
}
