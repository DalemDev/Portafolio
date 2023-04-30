import { useEffect, useState } from "react";
import "../css/Formulario.css";
import { ANIMACION } from "./Archivos";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

function Formulario() {
  const [mail, setMail] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [notificacion, setNotificacion] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dc9cwjr",
        "template_1osifg3",
        e.target,
        "TWnIiqjHaFNU-TEo5"
      )
      .then((res) => {
        if (res.status === 200) {
          setNotificacion("Mensaje enviado correctamente ✅");
        } else {
          setNotificacion(res.text);
        }
        setMail({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((err) => {
        setNotificacion(err.message + " ❌");
      });

    setTimeout(() => {
      setNotificacion("");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMail({ ...mail, [name]: value });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <form className="form" onSubmit={sendEmail} data-aos="fade-up">
      {notificacion && <p className="notificacion">{notificacion}</p>}
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
              onChange={handleChange}
              value={mail.nombre}
              required
            />
            <label className="form__label">Nombre</label>
          </div>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder=" "
              id="email"
              name="correo"
              value={mail.correo}
              onChange={handleChange}
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
              value={mail.mensaje}
              onChange={handleChange}
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
