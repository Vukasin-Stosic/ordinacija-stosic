import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faSortDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [hamMenu, setHamMenu] = useState(false);

  function hamburgerMenu() {
    !hamMenu ? setHamMenu(true) : setHamMenu(false);
  }

  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setShowNavbar(false);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const links = document.querySelectorAll(".navbar-item");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      hamburgerMenu();
    });
  });

  return (
    <nav className={showNavbar ? "sticky" : "sticky-mobile"}>
      <div className={showNavbar ? "none" : "header-contact"}>
        <p className="header-contact-item">
          <FontAwesomeIcon icon={faLocationDot} /> Partizanska 10 Vranje
        </p>
        <p className="header-contact-item">
          <FontAwesomeIcon icon={faPhone} /> 0637351651
        </p>
      </div>
      <div className="header">
        <div className="header-logo">
          <div className="hamburger" onClick={hamburgerMenu}>
            {hamMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <a href="#" className="logo">
            <img src={logo} alt="company logo" className="logo-img" />
            <span className="logo-text">Dr Stošić</span>
          </a>
        </div>
        <ul className={hamMenu ? "navbar" : "navbar hidden"}>
          <li className="navbar-item">
            <a href="#about" className="navbar-item-link">
              O nama
            </a>
          </li>
          <li className="navbar-item" id="navbar-services">
            <a href="#services" className="navbar-item-link" id="services-link">
              <span>Usluge</span>
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
                  Oralna medicina
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
              <li className="navbar-item">
                <a href="#decija-stomatologija" className="navbar-item-link">
                  Dečija stomatologija
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
