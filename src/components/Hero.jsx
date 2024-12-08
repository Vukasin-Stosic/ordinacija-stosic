import "./Hero.css";
import heroPic from "../assets/hero-pic.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-text-inner">
            <h1 className="hero-title">
              Zdravlje vaših <span className="accent">zuba</span> je u sigurnim
              rukama
            </h1>
            <p className="hero-message">
              Stomatološka ordinacija Dr Dragi Stošić u savremeno opremljenom
              prostoru, u ulici Partizanska 10, u centru Vranja, pruža usluge
              svih stomatoloških intervencija u domenu bolesti zuba, bolesti
              usta, stomatološko - hiruških zahvata, protetskih nadoknada i
              dečije stomatologije.
            </p>
            <p className="hero-message">
              Prvi pregled je besplatan, na kojem ćete saznati sve o Vašem
              stomatološkom problemu, istovremeno i dobiti informaciju o
              metodama i načinima kako se on može rešiti na što efikasniji i
              bezbolniji način.
            </p>
            <a className="cta" href="#contact-us">
              Zakažite besplatan pregled
            </a>
          </div>
        </div>
        <div className="hero-img-container">
          <img src={heroPic} alt="" className="hero-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
