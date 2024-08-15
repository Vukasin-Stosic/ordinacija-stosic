import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [show, setShow] = useState(false);

  // window.onscroll = function () {
  //   if (window.scrollY > 300) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };

  function showToTop() {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  window.addEventListener("scroll", showToTop);

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
