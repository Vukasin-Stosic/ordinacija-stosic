import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [hide, setHide] = useState(false);

  let prevScrollpos = window.scrollY;

  function hideNavbar() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setHide(true);
    } else {
      setHide(false);
    }
    prevScrollpos = currentScrollPos;
  }

  window.addEventListener("scroll", hideNavbar);
  // window.onscroll = function () {
  //   let currentScrollPos = window.scrollY;
  //   if (prevScrollpos > currentScrollPos) {
  //     navRef.current.classList.add("sticky");
  //   } else {
  //     navRef.current.classList.remove("sticky");
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <nav className={hide ? "sticky" : ""}>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="company logo" className="logo" />
          </a>
        </div>
        <div className="navbar-contact">
          <p className="navbar-contact-item">
            <FontAwesomeIcon icon={faLocationDot} /> Partizanska 10 Vranje
          </p>
          <p className="navbar-contact-item">
            <FontAwesomeIcon icon={faPhone} /> 0637351651
          </p>
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#about" className="navbar-list-item">
              O nama
            </a>
          </li>
          <li>
            <a href="#services" className="navbar-list-item">
              Usluge <FontAwesomeIcon icon={faSortDown} />
            </a>
          </li>
          <li>
            <a href="#contact-us" className="navbar-list-item">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
