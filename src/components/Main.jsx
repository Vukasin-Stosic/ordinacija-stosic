import { useState } from "react";
import "leaflet/dist/leaflet.css";
import aboutPic from "../assets/about.png";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPhoneFlip,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import "./Main.css";

function Main() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showPhone, setShowPhone] = useState(false);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const emailBody =
    "ime: " + name + " * telefon: " + phone + " * poruka: " + message;

  function phoneCall() {
    if (showPhone === false) {
      setShowPhone(true);
    } else {
      setShowPhone(false);
    }
  }

  return (
    <main>
      <div className="services" id="services">
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
        <div className="service">
          <h3>Bolesti zuba</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum!
          </p>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-img-container">
          <img src={aboutPic} alt="" className="about-img" />
        </div>
        <div className="about-content">
          <h3 className="about-subtitle">O nama</h3>
          <h2 className="about-title">
            Stomatološka ordinacija Dr Dragi Stošić
          </h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nulla minima assumenda ipsam laudantium dignissimos natus est
            consectetur omnis ducimus tempora dolores, totam atque aliquid
            porro! Soluta dolorum similique ullam, aut maxime saepe laborum
            numquam, deserunt voluptates qui commodi voluptate consectetur enim
            quis recusandae omnis, tempore nam neque adipisci voluptatibus?
          </p>
        </div>
      </div>
      <div className="hours-contact">
        <div className="info-section">
          <div className="location">
            <h3 className="compani-info-title">Gde se nalazimo</h3>
            <MapContainer center={[42.553817, 21.896802]} zoom={17}>
              <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[42.553746, 21.896681]}></Marker>
            </MapContainer>
          </div>
          <div className="compani-info">
            <div className="compani-info-inner">
              <div className="working-hours">
                <h3 className="compani-info-title">Radno vreme</h3>
                <p>Ponedeljak / Sreda / Petak: 08:00 - 20:00</p>
                <p>Utorak / Četvrtak: 08:00 - 15:00</p>
                <p>Subota / Nedelja: Ne radimo</p>
              </div>
              <div className="address">
                <h3 className="compani-info-title">Adresa</h3>
                <p>Partizanska 10, Vranje</p>
              </div>
              <div className="phone">
                <h3 className="compani-info-title">Telefoni</h3>
                <p>0637351651</p>
                <p>017417419</p>
              </div>
            </div>
          </div>
          <div className="contact-us" id="contact-us">
            <h3 className="compani-info-title">Zakažite pregled</h3>
            <fieldset className="email-form">
              <input
                type="text"
                placeholder="Ime"
                id="name"
                onChange={handleName}
              />
              <input
                type="number"
                placeholder="06..."
                id="phone"
                onChange={handlePhone}
              />
              <input
                type="text"
                placeholder="Naslov"
                id="title"
                onChange={handleTitle}
              />
              <textarea
                name="email-message"
                placeholder="Poruka"
                id="message"
                onChange={handleMessage}
              ></textarea>
            </fieldset>
            <div className="action">
              <a
                className="cta email-btn"
                href={`mailto:vukasinstosic@gmail.com?subject=${title}&body=${emailBody}`}
              >
                Pošalji mail <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a className="cta phone-btn" onClick={phoneCall}>
                {showPhone ? (
                  <p className="close">&#10005;</p>
                ) : (
                  <div>
                    <p>Pozovi</p>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                )}
              </a>
              <div className={showPhone ? "phone-hidden" : "hidden"}>
                <div className="cta phone-btn phone-btn-inner">
                  <FontAwesomeIcon icon={faPhoneFlip} /> 017417419
                </div>
                <div className="cta phone-btn phone-btn-inner">
                  <FontAwesomeIcon icon={faMobileScreen} /> 0637351651
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
