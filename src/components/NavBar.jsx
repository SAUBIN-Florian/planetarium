import "../stylessheets/navbar.scss";

export default function NavBar() {

  return (
    <div className="navbar dark-theme">
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
