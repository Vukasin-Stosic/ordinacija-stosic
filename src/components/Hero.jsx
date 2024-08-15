import "./Hero.css";
import heroPic from "../assets/hero-pic.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-text-inner">
            <h1>
              Stomatološka ordinacija Dr <span className="accent">Dragi</span>{" "}
              Stošić
            </h1>
            <p className="hero-message">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur, nihil necessitatibus? Libero tempora sequi cumque
              nostrum nobis qui illo recusandae est quia dolore nemo fugit,
              dolores repellat id sint. Quos!
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
