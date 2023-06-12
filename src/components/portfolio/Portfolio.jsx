import React from "react";
import "./Portfolio.css";
import PopflixImage from "../../assets/popflix.png";
import MediumImage from "../../assets/Medium.png";
import WeatherImage from "../../assets/weatherApp.png";

const Portfolio = () => {
  return (
    <section className="home section" id="portfolio">
      <div className="portfolio__container container grid">
        <div className="section__title">
          <h3 className="section__title">Progetti</h3>
          <div className="section__subtitle">
            Ogni progetto è un pezzo unico di sviluppo 🧩{" "}
          </div>
        </div>

        {/* Primo Progetto */}
        <div className="portfolio__content grid">
          <div className="portfolio__img">
            <img src={PopflixImage} alt="Popflix" className="imagine__app" />
          </div>
          <div className="portfolio__description">
            <div className="portfolio__title">
              PopFlix [Capstone Project Epicode]
            </div>
            <div className="portfolio__description1">
              Un sito web per cercare nuovi titoli, leggere e scrivere opinioni,
              guardare trailer e risparmiare tempo nella scelta del prossimo
              film da vedere sulla piattaforma di streaming preferita.
            </div>
            <div className="portfolio__title3">
              React | Bootstrap | JsonServer
            </div>
            <div className="portfolio__title4">
              <a
                href="https://github.com/joaofilho92/popflix"
                className="portfolio__social-icon icon3"
                target="_blank"
              >
                <span className="portfolio__span">
                  Code
                  <i
                    className="uil uil-github-alt"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </span>
              </a>
              <a
                href="https://popflix-rho.vercel.app/"
                className="portfolio__social-icon"
                target="_blank"
              >
                <span className="portfolio__span">
                  Live Demo
                  <i class="uil uil-window" style={{ marginLeft: "8px" }}></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 2 Progetto */}
        <div className="portfolio__content grid">
          <div className="portfolio__img">
            <img src={WeatherImage} alt="Popflix" className="imagine__app" />
          </div>
          <div className="portfolio__description">
            <div className="portfolio__title">
              React WeatherApp [Epicode Project]
            </div>
            <div className="portfolio__description1">
              App Meteo che utilizza l'API di OpenWeather per fornire
              informazioni meteorologiche precise e aggiornate. L'interfaccia è
              semplice e intuitiva, garantendo un'esperienza utente ottimale.
            </div>
            <div className="portfolio__title3">React | Bootstrap | API</div>
            <div className="portfolio__title4">
              <a
                href="https://github.com/joaofilho92/weather-app/tree/master"
                className="portfolio__social-icon icon3"
                target="_blank"
              >
                <span className="portfolio__span">
                  Code
                  <i
                    className="uil uil-github-alt"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Progetto */}
        <div className="portfolio__content grid">
          <div className="portfolio__img">
            <img src={MediumImage} alt="Popflix" className="imagine__app" />
          </div>
          <div className="portfolio__description">
            <div className="portfolio__title">
              Medium clone [Epicode Project]
            </div>
            <div className="portfolio__description1">
              Ricreazione della pagina principale di medium.com nella sua
              versione desktop. Questo progetto è stato sviluppato utilizzando
              HTML e CSS, offrendo un'esperienza visiva simile a quella del sito
              originale.
            </div>
            <div className="portfolio__title3">HTML | CSS</div>
            <div className="portfolio__title4">
              <a
                href="https://github.com/joaofilho92/U2-G5-Progetto/tree/master"
                className="portfolio__social-icon icon3"
                target="_blank"
              >
                <span className="portfolio__span">
                  Code
                  <i
                    className="uil uil-github-alt"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
