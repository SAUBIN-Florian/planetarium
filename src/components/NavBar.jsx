import { useRef, useState, useEffect } from 'react';
import "../stylessheets/navbar.scss";

export default function NavBar() {

  const navbarRef = useRef(null);
  const [iseVisible, setIsVisible] = useState(false);

  const callback = () => {
    console.log("I'm here !")
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(callback);
    if(navbarRef.current)  observer.observe(navbarRef.current);
  }, [navbarRef])

  return (
    <div className="navbar dark-theme" ref={navbarRef}>
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
