import { NavLink } from "react-router-dom";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-elements">
          <div className="footer-logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="footer-navigation">
            <ul className="footer-items-nav">
              <li className="footer-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/about">Aboute Us</NavLink>
              </li>
              <li className="footer-item">
                <NavLink to="/plan">Create Your Plan</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-navigation">
            <ul className="footer-items-social">
              <li className="footer-social-item">
                <NavLink to="https://t.me/iskandarkhurramov">
                  <FaTelegram />
                </NavLink>
              </li>
              <li className="footer-social-item">
                <NavLink to="/about">
                  <FaInstagram />
                </NavLink>
              </li>
              <li className="footer-social-item">
                <NavLink to="/plan">
                  <FaYoutube />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
