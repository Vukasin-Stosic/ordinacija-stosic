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
  const [dropDown, setDropDown] = useState(false);

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

  function showDropDown() {
    !dropDown ? setDropDown(true) : setDropDown(false);
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
      <div className="header">
        <div className="header-logo">
          <a href="#">
            <img src={logo} alt="company logo" className="logo" />
          </a>
        </div>
        <div className="header-contact">
          <p className="header-contact-item">
            <FontAwesomeIcon icon={faLocationDot} /> Partizanska 10 Vranje
          </p>
          <p className="header-contact-item">
            <FontAwesomeIcon icon={faPhone} /> 0637351651
          </p>
        </div>
        <ul className="navbar">
          <li className="navbar-item">
            <a href="#about" className="navbar-item-link">
              O nama
            </a>
          </li>
          <li
            className="navbar-item"
            id="navbar-services"
            onMouseEnter={showDropDown}
            onMouseLeave={showDropDown}
          >
            <a href="#services" className="navbar-item-link">
              Usluge{" "}
              <FontAwesomeIcon icon={faSortDown} className="down-arrow" />
            </a>
            <ul className="drop-down">
              <li className="navbar-item">
                <a href="#bolesti-zuba" className="navbar-item-link">
                  Bolesti zuba
                </a>
              </li>
              <li className="navbar-item">
                <a href="#paradontologija" className="navbar-item-link">
                  Paradontologija
                </a>
              </li>
              <li className="navbar-item">
                <a href="#oralna-patologija" className="navbar-item-link">
                  Oralna patologija
                </a>
              </li>
              <li className="navbar-item">
                <a href="#protetika" className="navbar-item-link">
                  Protetika
                </a>
              </li>
              <li className="navbar-item">
                <a href="#oralna-hirurgija" className="navbar-item-link">
                  Oralna hirurgija
                </a>
              </li>
              <li className="navbar-item">
                <a href="#ortodoncija" className="navbar-item-link">
                  Ortodoncija
                </a>
              </li>
              <li className="navbar-item">
                <a href="#implantologija" className="navbar-item-link">
                  Implantologija
                </a>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#contact-us" className="navbar-item-link">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
