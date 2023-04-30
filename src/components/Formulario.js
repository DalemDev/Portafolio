import { useEffect } from "react";
import "../css/Formulario.css";
import { ANIMACION } from "./Archivos";
import Aos from "aos";
import "aos/dist/aos.css";

const sendEmail = (e) => {
  e.preventDefault();
};

function Formulario() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form className="form" onSubmit={sendEmail} data-aos="fade-up">
      <div className="imagen-form">
        <img
          className="form-imagen"
          src={ANIMACION}
          alt="ANIMACION"
          loading="lazy"
        />
        <div className="form-data">
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              id="nombre"
              name="nombre"
              required
            />
            <label className="form__label">Nombre</label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder=" "
              id="correo"
              name="correo"
              required
            />
            <label className="form__label">Correo</label>
          </div>
          <div className="form__group">
            <textarea
              className="form__input"
              placeholder=" "
              id="mensaje"
              cols="30"
              rows="1"
              name="mensaje"
              required
            ></textarea>
            <label className="form__label">Mensaje</label>
          </div>
        </div>
      </div>
      <input type="submit" value="Enviar" className="form__cta" />
    </form>
  );
}

export default Formulario;
