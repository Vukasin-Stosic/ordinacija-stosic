import "./Hero.css";
import heroPic from "../assets/hero-pic.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-inner">
            <h1>
              Zdravlje vaših <span className="accent">zuba</span> je u sigurnim
              rukama
            </h1>
            <p className="hero-message">
              Stomatološka ordinacija Dr Dragi Stošić pruža tretmane prema
              najvišim svetskim standardima, osiguravajući pacijentima
              najkvalitetniju terapiju uz personalizovan pristup, korišćenje
              savremene opreme i garancije na radove.
            </p>
            <a className="cta" href="#contact-us">
              Zakažite besplatan pregled
            </a>
          </div>
        </div>
        <div className="hero-pic">
          <img src={heroPic} alt="" className="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
