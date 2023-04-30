import "./App.css";
import NavBar from "./components/NavBar";
import Habilidad from "./components/Habilidad";
import Proyecto from "./components/Proyecto";
import IrArriba from "./components/IrArriba";
import Formulario from "./components/Formulario";
import { AiOutlineDownload } from "react-icons/ai";
import {
  HTML,
  CSS,
  JS,
  REACT,
  NODEJS,
  FIREBASE,
  GIT,
  MONGODB,
  LARAVEL,
  MYSQL,
  POSTMAN,
  VITE,
  VSCODE,
  TWITTER,
  LINKEDIN,
  PROYECTO1,
  PROYECTO2,
  PROYECTO3,
  PROYECTO4,
  PROYECTO5,
  PROYECTO6,
  PROYECTO7,
  PROYECTO8,
  PROYECTO9,
  PROYECTO11,
  PROYECTO14,
  PROYECTO16,
  PROYECTO17,
  PROYECTO18,
  PROYECTO19,
  CV,
  YO,
} from "./components/Archivos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <div className="contenedor" id="inicio">
        {/* seccion inicial */}
        <div className="sobre-mi">
          <div className="sobre-mi__info" data-aos="fade-right">
            <h1>
              <strong>
                Hola, Soy Dalemberg, <br />
                Desarrollador Web 👋
              </strong>
            </h1>
            <p>
              Soy un apasionado por la programación, desarrolle esta pasión
              desde temprana edad por lo que he venido formándome a lo largo de
              los años de forma autodidacta, también me gusta jugar videojuegos,
              ver películas y aprender algo nuevo cada día.
            </p>
            <div className="sobre-mi__button">
              <a className="sobre-mi__button-wrapper" href={CV} download="CV">
                <div className="sobre-mi__text">Descargar CV</div>
                <span className="sobre-mi__icon">
                  <AiOutlineDownload className="sobre-mi__download" />
                </span>
              </a>
            </div>
          </div>
          <div className="sobre-mi__contenedor-imagen" data-aos="fade-left">
            <img
              className="sobre-mi__imagen"
              src={YO}
              alt="Yo"
              loading="lazy"
            />
          </div>
        </div>
        {/* seccion Habilidades */}
        <div className="contenedor-habilidades" id="habilidades">
          <div className="habilidades" data-aos="fade-up">
            <Habilidad logo={HTML}>HTML</Habilidad>
            <Habilidad logo={CSS}>CSS</Habilidad>
            <Habilidad logo={JS}>JAVASCRIPT</Habilidad>
            <Habilidad logo={REACT}>REACT</Habilidad>
            <Habilidad logo={LARAVEL}>LARAVEL</Habilidad>
            <Habilidad logo={NODEJS}>NODEJS</Habilidad>
            <Habilidad logo={MONGODB}>MONGODB</Habilidad>
            <Habilidad logo={FIREBASE}>Firebase</Habilidad>
            <Habilidad logo={MYSQL}>MYSQL</Habilidad>
            <Habilidad logo={POSTMAN}>POSTMAN</Habilidad>
            <Habilidad logo={GIT}>GIT</Habilidad>
            <Habilidad logo={VITE}>VITE</Habilidad>
            <Habilidad logo={VSCODE}>VS CODE</Habilidad>
          </div>
        </div>
        {/* seccion  proyectos */}
        <div className="contenedor-proyectos" id="proyectos">
          <div className="proyectos">
            <Proyecto
              imagen={PROYECTO2}
              titulo="Vintage to-do"
              descripcion="Este proyecto lo realice para practicar conexion a firebase, usando el authentication y firestore que forman parte de las herramientas de firebase."
              demo="https://vintage-to-do.netlify.app/"
              github="https://github.com/DalemDev/vintage-to-do"
            />

            <Proyecto
              imagen={PROYECTO5}
              titulo="Validador de contraseña"
              descripcion="Este proyecto lo realice para mejorar en JavaScript, manejando el DOM e interactuando con él para lograr validar una contraseña."
              demo="https://dalemdev.github.io/validacion-de-contrasena/"
              github="https://github.com/DalemDev/validacion-de-contrasena"
            />
            <Proyecto
              imagen={PROYECTO17}
              titulo="App Chat"
              descripcion="Este proyecto lo realice para practicar sockets, usando react para maquetar el frontend y nodejs para el backend, usando la libreria socket.io"
              demo="no hay"
              github="https://github.com/DalemDev/app-chat"
            />
            <Proyecto
              imagen={PROYECTO3}
              titulo="Calculadora"
              descripcion="Este proyecto lo realice para practicar react JS, usando useState para manejar estado y aplicando estilos."
              demo="https://calculadoradalemdev.netlify.app/"
              github="https://github.com/DalemDev/AppCalculadoraReact"
            />
            <Proyecto
              imagen={PROYECTO4}
              titulo="Buscador Marvel"
              descripcion="Este proyecto lo realice para practicar el acceso a datos desde una api por medio de fetch usando react con el hook useEffect."
              demo="https://dalemdev-app-marvel.netlify.app/"
              github="https://github.com/DalemDev/app-marvel"
            />
            <Proyecto
              imagen={PROYECTO16}
              titulo="Buscador de palabras"
              descripcion="Este proyecto lo realice para practicar la utilizacion de apis externas con react, maquetando un sitio para realizar busquedas de palabras"
              demo="https://dictionarydalemdev.netlify.app/"
              github="https://github.com/DalemDev/Dictionary"
            />
            <Proyecto
              imagen={PROYECTO18}
              titulo="Crud Laravel"
              descripcion="Este proyecto lo realice para practicar laravel, creando un crud usando una base de datos mysql"
              demo="no hay"
              github="https://github.com/DalemDev/crud_alumnos"
            />
            <Proyecto
              imagen={PROYECTO19}
              titulo="Crud PHP"
              descripcion="Este proyecto lo realice para practicar php, creando un crud usando una base de datos mysql"
              demo="no hay"
              github="https://github.com/DalemDev/admin-proyectos"
            />
            <Proyecto
              imagen={PROYECTO1}
              titulo="Api Notes"
              descripcion="Este proyecto lo realice para mejorar en nodejs usandolo junto con express para realizar una api de consulta de notas."
              demo="https://cryptic-island-81707.herokuapp.com/api/notes"
              github="https://github.com/DalemDev/api-notes"
            />
            <Proyecto
              imagen={PROYECTO6}
              titulo="Clon De Netflix"
              descripcion="Este proyecto lo realice para practicar css, al darle estilos a
            una pagina y que quede lo mas parecido posible a la página original de
            Netflix."
              demo="https://dalemdev.github.io/ClonNetflix/"
              github="https://github.com/Dalemdev/ClonNetflix"
            />
            <Proyecto
              imagen={PROYECTO7}
              titulo="To-do App"
              descripcion="Este proyecto lo realice como practica de html, css y js, mediante
            la creacion de una todoApp con guardado en el localStorage."
              demo="https://dalemdev.github.io/TodoApp/"
              github="https://github.com/Dalemdev/TodoApp"
            />
            <Proyecto
              imagen={PROYECTO8}
              titulo="Reloj Digital"
              descripcion="Este proyecto lo realice como práctica para crear diseños limpios
            y elegantes al momento de crear una página web y agregandole funcionalidad con JS."
              demo="https://dalemdev.github.io/RelojDigital/"
              github="https://github.com/Dalemdev/RelojDigital"
            />
            <Proyecto
              imagen={PROYECTO9}
              titulo="Temporizador"
              descripcion="Este proyecto lo realice para mejorar en JavaScript, manejando el DOM e interactuando con diferentes botones."
              demo="https://dalemdev.github.io/Temporizador/"
              github="https://github.com/Dalemdev/Temporizador"
            />
            <Proyecto
              imagen={PROYECTO11}
              titulo="Calculadora Presupuesto"
              descripcion="Este proyecto lo realice para practicar JavaScript, dandole un uso
            a la vida real para sacar el presupuesto de una persona."
              demo="https://dalemdev.github.io/AppPresupuesto/"
              github="https://github.com/Dalemdev/AppPresupuesto"
            />
            <Proyecto
              imagen={PROYECTO14}
              titulo="Sección De Pago"
              descripcion="Este proyecto lo realice para practicar mis habilidades de
            maquetado, mediante la creacion de una seccion de pago de una
            página de música."
              demo="https://dalemdev.github.io/seccionPago/"
              github="https://github.com/Dalemdev/seccionPago"
            />
          </div>
        </div>
        {/* seccion contacto */}
        <div className="contenedor-contactos" id="contacto">
          <Formulario />
          <div className="contactos" data-aos="fade-up">
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
          </div>
        </div>
        <IrArriba />
      </div>
    </>
  );
}

export default App;
