import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [show, setShow] = useState(false);

  function showToTop() {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showToTop);

    return () => {
      window.removeEventListener("scroll", showToTop);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
      <a href="#" className={show ? "back-to-top" : "hidden"}>
        <FontAwesomeIcon className="faAngleUp" icon={faAngleUp} />
      </a>
    </div>
  );
}

export default App;
