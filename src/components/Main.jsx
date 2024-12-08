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
      <div className="container" id="services">
        <h3 className="services-title">Usluge</h3>
        <div className="services">
          <div className="card" id="bolesti-zuba">
            <div className="service-text">
              <h3 className="card-title">Bolesti zuba</h3>
              <p>
                Plombiranje zuba helio (bele) i amalgamskim plombama, kao i
                lečenje upalnih stanja zuba (pulpiti), nadogradnja polomljenih
                krunica zuba inlejima ili onlejim. Beljenje zuba ordinacijska
                varijanta ili izrada folija za kućno beljenje zuba.
              </p>
            </div>
          </div>
          <div className="card" id="paradontologija">
            <div className="service-text">
              <h3 className="card-title">Paradontologija</h3>
              <p>
                Uklanjanje mekih naslaga i zubnog kamenca. Lečenje upalnih
                stanja potpornog aparata zuba (gingivektomije i režanj
                operacije).
              </p>
            </div>
          </div>
          <div className="card" id="oralna-patologija">
            <div className="service-text">
              <h3 className="card-title">Oralna medicina</h3>
              <p>
                Dijagnostifikovanje promena kod oboljena na mekim tkivima
                sluzokože usne duplje (usana, jezika i obraza) kao i njihovo
                lećenje.
              </p>
            </div>
          </div>
          <div className="card" id="protetika">
            <div className="service-text">
              <h3 className="card-title">Protetika</h3>
              <p>
                Izrada pokretnih proteza, kako totalnih tako i parcijalnih: -
                klasične akrilatne - elastične - skeletirane (metalne –
                kobalt-hrom-molibden - vizil proteze) vizil proteze sa kopčama
                (drikerima). Izrada krunica i mostova, kao fiksnih zubnih
                nadoknada, metalokeramičkih i bezmetalnih (litijum-disilikatnih
                i cirkon kruna) CAD/CAM tehnologijom. Izrada faseta (vinira).
              </p>
            </div>
          </div>
          <div className="card" id="oralna-hirurgija">
            <h3 className="card-title">Oralna hirurgija</h3>
            <p>
              Vađenje zuba i komplikovano vađenje zuba, kao i hiruško vađenje
              umnjaka, očnjaka i ostalih impaktiranih zuba. Uklanjanje cisti i
              granuloma na zubima (apikotomije). Zatvaranje oro-antralnih
              komunikacija (otvoren sinus). Uklanjanje resica (frenuluma) usana
              i jezika. I sve to u lokalnoj anesteziji. Vađenje zuba kod
              hemofiličara.
            </p>
          </div>
          <div className="card" id="ortodoncija">
            <h3 className="card-title">Ortodoncija</h3>
            <p>
              Izrada pokretnih aparata za ispravljane krivih zuba, kao i izrada
              fiksnih aparata (fiksne proteze): a) metalnim bravicama, b)
              keramičkim (fiber-glas, neprovidnim bravicama), c) samoligirajuće
              bravice i d) 2D lingvalne bravice sa unutrašnje strane zuba tako
              da se one ne vide spolja. Izrada fiksnih retejnera kao i pokretnih
              retejnera u vidu folija za održavanje postignutih rezultata posle
              terapije fiksnim protezama. Izvlačenje impaktiranih očnjaka i
              drugih zuba i njihovo dovođenje u zubni niz putem ortodontskih
              implantata (šrafova).
            </p>
          </div>
          <div className="card" id="implantologija">
            <h3 className="card-title">Implantologija</h3>
            <p>
              Postavljanje implantata kao jednog od najboljih rešenja za izradu
              fiksnih zubnih nadoknada. Rade se kao imedijatni implantati gde
              odmah nakon vađenja zuba vršimo ugradnju implantata i postavljanje
              krunica na implantatima u roku od dva dana (imedijatna ugradnja).
              Radi se i odložena izrada krunica odnosno mostova na implantatima
              nakon ugradnje za 3 do 6 meseci. Rešavanje problema totalne
              bezubosti medodom "all-on four" ili "all-on six". Postavljane
              mini-dentalnih implantata (MDI) za pridržavanje nestabilnih
              totalnih proteza.
            </p>
          </div>
          <div className="card" id="decija-stomatologija">
            <h3 className="card-title">Dečija stomatologija</h3>
            <p>
              Lečenje mlečnih i stalnih zuba kod dece uzrasta do 12 godina, kao
              i izrada pokretnih aparata za ispravljanje zuba.
            </p>
          </div>
        </div>
      </div>
      <div className="" id="about">
        <div className="container about">
          <div className="about-img-container">
            <img src={aboutPic} alt="" className="about-img" />
          </div>
          <div className="about-content">
            <h3 className="about-subtitle">O nama</h3>
            <h2 className="about-title">
              Stomatološka ordinacija Dr Dragi Stošić
            </h2>
            <p className="about-text">
              Ordinacija je osnovana 1995. godine u Vranju.
            </p>
            <p className="about-text">
              Urgentna stomatologija i medicina, estetska stomatologija, oralna
              hirurgija, protetika, paradontologija i dečija stomatologija su
              specijalnosti kojima se ponosimo.
            </p>
            <p className="about-text">
              Ordinacija ima svoju zubnu tehniku za izradu protetskih nadoknada
              i ortodontskih aparata. Tehnika poseduje i CAD/CAM sistem za
              izradu metalo-keramičkih i bezmetalnih krunica, mostova i vinira.
            </p>
            <p className="about-text">
              Naš stručni tim čine dva doktora stomatologije, dve medicinske
              sestre i dva zubna tehničara.
            </p>
          </div>
        </div>
      </div>
      <div className="info container">
        <div className="info-section">
          <div className="location info-el">
            <h3 className="card-title">Gde se nalazimo</h3>
            <MapContainer center={[42.553817, 21.896802]} zoom={17}>
              <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[42.553746, 21.896681]}></Marker>
            </MapContainer>
          </div>
          <div className="company-info info-el">
            <div className="compani-info-inner">
              <div className="working-hours">
                <h3 className="card-title">Radno vreme</h3>
                <p>Ponedeljak / Sreda / Petak: 08:00 - 20:00</p>
                <p>Utorak / Četvrtak: 08:00 - 15:00</p>
                <p>Subota / Nedelja: Ne radimo</p>
              </div>
              <div className="address">
                <h3 className="card-title">Adresa</h3>
                <p>Partizanska 10, Vranje</p>
              </div>
              <div className="phone">
                <h3 className="card-title">Telefoni</h3>
                <p>0637351651</p>
                <p>017417419</p>
              </div>
            </div>
          </div>
          <div className="contact-us info-el" id="contact-us">
            <h3 className="card-title">Zakažite pregled</h3>
            <form className="email-form">
              <label htmlFor="name">Ime</label>
              <input type="text" id="name" onChange={handleName} />
              <label htmlFor="phone">Telefon</label>
              <input type="number" id="phone" onChange={handlePhone} />
              <label htmlFor="title">Naslov</label>
              <input type="text" id="title" onChange={handleTitle} />
              <label htmlFor="message">Poruka</label>
              <textarea
                name="email-message"
                id="message"
                onChange={handleMessage}
              ></textarea>
            </form>
            <div className="action">
              <div>
                <a
                  className="cta email-btn"
                  href={`mailto:vukasinstosic@gmail.com?subject=${title}&body=${emailBody}`}
                >
                  <span style={{ marginRight: "1em" }}>Pošalji mail</span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="phone-btn" onClick={phoneCall}>
                {showPhone ? (
                  <div className="close cta">
                    <FontAwesomeIcon icon={faXmark} />
                    <div className="phone-hidden">
                      <a className="cta" href="tel:+38117417419">
                        <span style={{ marginRight: "1em" }}>017417419</span>
                        <FontAwesomeIcon icon={faPhoneFlip} />
                      </a>
                      <a className="cta" href="tel:+381637351651">
                        <span style={{ marginRight: "1em" }}>0637351651</span>
                        <FontAwesomeIcon icon={faMobileScreen} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="cta">
                    <span style={{ marginRight: "1em" }}>Pozovi</span>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}

export default Main;
