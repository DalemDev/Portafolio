import { useEffect, useState } from "react";
import "../css/Formulario.css";
import { ANIMACION } from "./Archivos";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { useSpring, animated } from "@react-spring/web";

function Formulario() {
  const [mail, setMail] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [sentMail, setSentMail] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const successMessageStyle = useSpring({
    transform: sentMail ? "translateY(0%)" : "translateY(100%)",
    opacity: sentMail ? 1 : 0,
    color: "#FFF",
    background: "#4CAF50",
    padding: "0.2em",
    borderRadius: "4px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    width: "100%",
    textAlign: "center",
    config: {
      tension: 200,
      friction: 20,
    },
  });

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
          setMensaje("Tu correo electrónico ha sido enviado con éxito ✅");
        } else {
          setMensaje(res.text);
        }
        setMail({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((err) => {
        setMensaje(err.message + " ❌");
      });

    setSentMail(true);
    setTimeout(() => {
      setSentMail(false);
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
      <animated.div style={successMessageStyle}>
        <p>{mensaje}</p>
      </animated.div>
    </form>
  );
}

export default Formulario;
