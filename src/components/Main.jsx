import { useState } from "react";
import "leaflet/dist/leaflet.css";
import aboutPic from "../assets/about.png";
import bolestiZubaPic from "../assets/bolesti-zuba.jpg";
import paradontologijaPic from "../assets/paradontologija.png";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPhoneFlip,
  faMobileScreen,
  faXmark,
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
        <div className="service" id="bolesti-zuba">
          <img src={bolestiZubaPic} alt="" className="service-img" />
          <div className="service-text">
            <h3>Bolesti zuba</h3>
            <p>
              Plombiranje zuba helio (bele) i amalgamskim plombama, kao i
              lečenje upalnih stanja zuba (pulpiti), nadogradnja polomljenih
              krunica zuba inlejima ili onlejim. Beljenje zuba ordinacijska
              varijanta ili izrada folija za kućno beljenje zuba.
            </p>
          </div>
        </div>
        <div className="service" id="paradontologija">
          <img src={paradontologijaPic} alt="" className="service-img" />
          <div className="service-text">
            <h3>Paradontologija</h3>
            <p>
              Uklanjanje mekih naslaga i zubnog kamenca. Lečenje upalnih stanja
              potpornog aparata zuba (gingivektomije i režanj operacije).
            </p>
          </div>
        </div>
        <div className="service" id="oralna-patologija">
          <h3>Oralna patologija</h3>
          <p>
            Dijagnostifikovanje promena kod oboljena na mekim tkivima sluzokože
            usne duplje (usana, jezika i obraza) kao i njihovo lećenje.
          </p>
        </div>
        <div className="service" id="protetika">
          <h3>Protetika</h3>
          <p>
            Izrada pokretnih proteza, kako totalnih tako i parcijalnih: -
            klasične akrilatne - elastične - skeletirane (metalne –
            kobalt-hrom-molibden - vizil proteze) vizil proteze sa kopčama
            (drikerima). Izrada krunica i mostova, kao fiksnih zubnih nadoknada,
            metalokeramičkih i bezmetalnih (litijum-disilikatnih i cirkon kruna)
            CAD/CAM tehnologijom. Izrada faseta (vinira).
          </p>
        </div>
        <div className="service" id="oralna-hirurgija">
          <h3>Oralna hirurgija</h3>
          <p>
            Vađenje zuba i komplikovano vađenje zuba, kao i hiruško vađenje
            umnjaka, očnjaka i ostalih impaktiranih zuba. Uklanjanje cisti i
            granuloma na zubima (apikotomije). Zatvaranje oro-antralnih
            komunikacija (otvoren sinus). Uklanjanje resica (frenuluma) usana i
            jezika. I sve to u lokalnoj anesteziji. Vađenje zuba kod
            hemofiličara.
          </p>
        </div>
        <div className="service" id="ortodincija">
          <h3>Ortodoncija</h3>
          <p>
            Izrada pokretnih aparata za ispravljane krivih zuba, kao i izrada
            fiksnih aparata (fiksne proteze): a) metalnim bravicama, b)
            keramičkim (fiber-glas, neprovidnim bravicama), c) samoligirajuće
            bravice i d) 2D lingvalne bravice sa unutrašnje strane zuba tako da
            se one ne vide spolja. Izrada fiksnih retejnera kao i pokretnih
            retejnera u vidu folija za održavanje postignutih rezultata posle
            terapije fiksnim protezama. Izvlačenje impaktiranih očnjaka i drugih
            zuba i njihovo dovođenje u zubni niz putem ortodontskih implantata
            (šrafova).
          </p>
        </div>
        <div className="service" id="implantologija">
          <h3>Implantologija</h3>
          <p>
            Postavljanje implantata kao jedno od najboljih rešenja za izradu
            fiksnih zubnih nadoknada. Rade se kao imedijatni implantati gde
            odmah vršimo ugradnju implantata posle vađenja i odmah postavljanja
            krunica na inplantatima. Radi se i odložena izrada krunica odnosno
            mostova na implantatima nakon ugradnje za 3 do 6 meseci. Postavljane
            mini-dentalnih implantata (MDI) za pridržavanje nestabilnih totalnih
            proteza.
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
            Početak rada ove ordinacije je iz 1995 godine. Teški uslovi rada
            iziskivali Prvi pregled je besplatan, a na njemu se dobija uvid u
            trenutno stanje usta i zuba nakon čega se donosi plan terapije.
            Stomatološka zdravstvena zaštita je sveobuhvatna i radi se sve počev
            od popravke i vađenja zuba pa sve do ugradnje implantata.
          </p>
          <p className="about-text">
            Ordinacija ima svoju zubnu tehniku za izradu protetskih nadoknada i
            ortodontskih aparata. Tehnika poseduje i CAD/CAM sistem za izradu
            metalo-keramičkih i bezmetalnih krunica, mostova i vinira.
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
                  <p className="close">
                    <FontAwesomeIcon icon={faXmark} />
                    <div className={showPhone ? "phone-hidden" : "hidden"}>
                      <div className="cta phone-btn phone-btn-inner">
                        <FontAwesomeIcon icon={faPhoneFlip} />{" "}
                        <a href="tel:+381174174191">017417419</a>
                      </div>
                      <div className="cta phone-btn phone-btn-inner">
                        <FontAwesomeIcon icon={faMobileScreen} />{" "}
                        <a href="tel:+381637351651">0637351651</a>
                      </div>
                    </div>
                  </p>
                ) : (
                  <div>
                    <p>Pozovi</p>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
