import "../stylessheets/navmodal.scss";

export function NavModal() {
  return (
    <div className="nav-modal light-theme">
      <div className="nav-modal-wrapper">
        <div className="nav-modal-content">
          <ul className="list-wrapper">
            <li className="list-title">OTHER</li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#payment">Payment</a></li>
            <li><a href="#maintenance">Maintenance</a></li>
            <li><a href="#coming">Coming soon</a></li>
          </ul>
          <ul className="list-wrapper">
            <li className="list-title">AUTHENTICATION</li>
            <li><a href="#login">Login</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#reset-password">Reset Password</a></li>
            <li><a href="#verify-code">Verify Code</a></li>
          </ul>
          <ul className="list-wrapper">
            <li className="list-title">DASHBOARD</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
