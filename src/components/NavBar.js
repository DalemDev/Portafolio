/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/NavBar.css";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { TWITTER, LINKEDIN, GITHUB } from "./Archivos";

function NavBar() {
  function menu() {
    document.body.style.overflowY = "hidden";
  }

  function close() {
    document.body.style.overflowY = "auto";
  }

  function inactivo() {
    const links = document.querySelectorAll(".nav__link");

    links.forEach((link) => {
      link.classList.remove("activo");
    });
  }

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth >= 768) {
      document.body.style.overflowY = "auto";
    }
  });

  function darkMode(e) {
    if (e.target.checked) {
      //modo dark
      const rootElem = document.querySelector(":root");
      rootElem.style.setProperty("--color-fondo", "#000");
      rootElem.style.setProperty("--color-texto", "rgb(235, 235, 235)");

      //navbar
      rootElem.style.setProperty("--fondo-hamburguer", "#fff");
      rootElem.style.setProperty("--color-hamburguer", "#000");
      rootElem.style.setProperty("--fondo-close", "#000");
      rootElem.style.setProperty("--color-close", "#ffff");
      rootElem.style.setProperty("--fondo-links", "#19376d");
      rootElem.style.setProperty("--color-links", "#fff");
      rootElem.style.setProperty("--color-links-desk", "#ffff");
      rootElem.style.setProperty("--color-fondo-nav", "#19376d");

      //proyectos
      rootElem.style.setProperty(
        "--color-shadow-proyecto",
        "rgba(255, 255, 255, 0.1)"
      );

      rootElem.style.setProperty("--color-h3", "#185cd7");

      //formulario
      rootElem.style.setProperty("--color-texto-input-formulario", "#fff");
      rootElem.style.setProperty(
        "--color-fuera-input-formulario",
        "rgba(255,255,255,0.7)"
      );
      rootElem.style.setProperty("--color-submit-formulario", "#fff");
      rootElem.style.setProperty("--color-fondo-submit-formulario", "#19376d");

      //ir arriba
      rootElem.style.setProperty("--fondo-arriba", "rgba(255,255,255,0.99)");
      rootElem.style.setProperty("--color-arriba", "#000");
    } else {
      //modo light
      const rootElem = document.querySelector(":root");
      rootElem.style.setProperty("--color-fondo", "rgb(247, 245, 245)");
      rootElem.style.setProperty("--color-texto", "#000000");

      //navbar
      rootElem.style.setProperty("--fondo-hamburguer", "#000");
      rootElem.style.setProperty("--color-hamburguer", "#ffff");
      rootElem.style.setProperty("--fondo-close", "#ffff");
      rootElem.style.setProperty("--color-close", "#000");
      rootElem.style.setProperty("--fondo-links", "#000");
      rootElem.style.setProperty("--color-links", "#fff");
      rootElem.style.setProperty("--color-links-desk", "#fff");
      rootElem.style.setProperty("--color-fondo-nav", "#19376d");

      //proyectos
      rootElem.style.setProperty(
        "--color-shadow-proyecto",
        "rgba(31, 38, 135, 0.1)"
      );
      rootElem.style.setProperty("--color-h3", "#19376d");

      //formulario
      rootElem.style.setProperty("--color-texto-input-formulario", "#000");
      rootElem.style.setProperty(
        "--color-fuera-input-formulario",
        "rgba(8, 7, 7, 0.951)"
      );
      rootElem.style.setProperty("--color-submit-formulario", "#fff");
      rootElem.style.setProperty("--color-fondo-submit-formulario", "#19376d");

      //ir arriba
      rootElem.style.setProperty("--fondo-arriba", "#000");
      rootElem.style.setProperty("--color-arriba", "rgba(255,255,255,0.99)");
    }
  }

  return (
    <nav className="nav container" id="nav">
      <label className="switch">
        <input
          className="nav__check"
          type="checkbox"
          onChange={(e) => {
            darkMode(e);
          }}
        />
        <span className="slider"></span>
      </label>
      <ul className="nav__links">
        <li className="nav__item">
          <a
            href="#!"
            className="nav__link"
            onClick={() => {
              close();
              inactivo();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#habilidades"
            className="nav__link"
            onClick={(e) => {
              close();
              inactivo();
              e.target.classList.add("activo");
            }}
          >
            Tecnologías
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#proyectos"
            className="nav__link"
            onClick={(e) => {
              close();
              inactivo();
              e.target.classList.add("activo");
            }}
          >
            Proyectos
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contacto"
            className="nav__link"
            onClick={(e) => {
              close();
              inactivo();
              e.target.classList.add("activo");
            }}
          >
            Contacto
          </a>
        </li>
        <li className="nav__item espacio" title="Mi GitHub">
          <a
            href="https://github.com/DalemDev"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GITHUB} alt="Github" loading="lazy" />
          </a>
        </li>
        <div className="nav__item--modified">
          <li className="nav__item">
            <a
              href="https://twitter.com/Dalemberg72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={TWITTER}
                alt="Twitter"
                className="contacto"
                loading="lazy"
              />
            </a>
          </li>
          <li className="nav__item">
            <a
              href="https://www.linkedin.com/in/dalemberg-garcia-688489216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LINKEDIN}
                alt="Linkedin"
                className="contacto"
                loading="lazy"
              />
            </a>
          </li>
        </div>
      </ul>
      <a href="#nav" className="nav__hamburguer" onClick={menu}>
        <FaAlignRight className="nav__icon" />
      </a>
      <a href="#!" className="nav__close" onClick={close}>
        <AiOutlineClose className="nav__icon close" />
      </a>
    </nav>
  );
}

export default NavBar;
