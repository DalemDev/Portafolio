import "./App.css";
import NavBar from "./components/NavBar";
import Habilidad from "./components/Habilidad";
import Proyecto from "./components/Proyecto";
import IrArriba from './components/IrArriba';
import Formulario from './components/Formulario';
import YO from "./assets/images/yo.png";
import CV from "./assets/doc/CV.pdf";
import HTML from './assets/images/html.svg';
import CSS from './assets/images/css.svg';
import JS from './assets/images/javascript.svg';
import REACT from './assets/images/react.svg';
import NODEJS from './assets/images/nodejs.svg';
import SASS from './assets/images/sass.svg';
import firebase from './assets/images/firebase.svg'
import GIT from './assets/images/git.svg';
import MONGODB from './assets/images/mongodb.svg';
import WEBPACK from './assets/images/webpack.svg';
import TWITTER from './assets/images/twitter.svg';
import LINKEDIN from './assets/images/linkedin.svg';
import PROYECTO1 from './assets/images/apiNotes.PNG'
import PROYECTO2 from './assets/images/vintageApp.PNG'
import PROYECTO3 from './assets/images/calculadora.PNG'
import PROYECTO4 from './assets/images/marvelApp.PNG'
import PROYECTO5 from './assets/images/validadorPassword.PNG'
import PROYECTO6 from './assets/images/clonNetflix.jpg';
import PROYECTO7 from './assets/images/todoapp.jpg';
import PROYECTO8 from './assets/images/relojDigital.jpg';
import PROYECTO9 from './assets/images/temporizador.JPG';
import PROYECTO10 from './assets/images/ecommerce.PNG';
import PROYECTO11 from './assets/images/appPresupuesto.jpg';
import PROYECTO12 from './assets/images/appComida.JPG';
import PROYECTO13 from './assets/images/Login.jpg';
import PROYECTO14 from './assets/images/seccionPago.jpg';
import PROYECTO15 from './assets/images/paginaComida.jpg';
import { AiOutlineDownload } from 'react-icons/ai';

function App() {
  return (
    <div className="contenedor" id="inicio">
      <NavBar />
      {/* seccion inicial */}
      <div className="sobre-mi">
        <div className="sobre-mi__info">
          <h1>
            <strong>
              Hola, Soy Dalemberg, <br />
              Desarrollador Web 👋
            </strong>
          </h1>              
          <p>
            Soy un apasionado por la programación, desarrolle esta pasión desde
            temprana edad por lo que he venido formándome a lo largo de los años
            de forma autodidacta, también me gusta jugar videojuegos, ver
            películas y aprender algo nuevo cada día.
          </p>
          <div className="sobre-mi__button" >
            <a className="sobre-mi__button-wrapper" href={CV} download="CV">
              <div className="sobre-mi__text" >
                Descargar CV
              </div>
              <span className="sobre-mi__icon">
                <AiOutlineDownload className='sobre-mi__download' />
              </span>
            </a>
          </div>
        </div>
        <div className="sobre-mi__contenedor-imagen">
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
        <h2>Tecnologías</h2>
        <div className="habilidades">
          <Habilidad
            logo={HTML}
          >
            HTML
          </Habilidad>
          <Habilidad
            logo={CSS}
          >
            CSS
          </Habilidad>
          <Habilidad
            logo={JS}
          >
            JAVASCRIPT
          </Habilidad>
          <Habilidad
            logo={REACT}
          >
            REACT
          </Habilidad>
          <Habilidad
            logo={SASS}
          >
            SASS
          </Habilidad> 
          <Habilidad
            logo={NODEJS}
          >
            NODEJS
          </Habilidad>          
          <Habilidad
            logo={MONGODB}
          >
            MONGODB
          </Habilidad>
          <Habilidad
            logo={firebase}
          >
            Firebase
          </Habilidad>                                
          <Habilidad
            logo={WEBPACK}
          >
            WEBPACK
          </Habilidad>          
          <Habilidad
            logo={GIT}
          >
            GIT
          </Habilidad>
        </div>
      </div>
      {/* seccion  proyectos */}
      <div className="contenedor-proyectos" id="proyectos">
        <h2>Proyectos</h2>
        <div className="proyectos">
        <Proyecto 
            imagen={PROYECTO1}
            titulo='Api Notes'
            descripcion='Este proyecto lo realice para mejorar en nodejs usandolo junto con express para realizar una api de consulta de notas.'
            demo='https://cryptic-island-81707.herokuapp.com/api/notes'
            github='https://github.com/DalemDev/api-notes'
          />         
          <Proyecto 
            imagen={PROYECTO2}
            titulo='Vintage to-do'
            descripcion='Este proyecto lo realice para practicar conexion a firebase, usando el authentication y firestore que forman parte de las herramientas de firebase.'
            demo='https://vintage-to-do.netlify.app/login'
            github='https://github.com/DalemDev/vintage-to-do'
          /> 
          <Proyecto 
            imagen={PROYECTO3}
            titulo='Calculadora'
            descripcion='Este proyecto lo realice para practicar react JS, usando useState para manejar estado y aplicando estilos.'
            demo='https://calculadoradalemdev.netlify.app/'
            github='https://github.com/DalemDev/AppCalculadoraReact'
          /> 
          <Proyecto 
            imagen={PROYECTO4}
            titulo='Buscador Marvel'
            descripcion='Este proyecto lo realice para practicar el acceso a datos desde una api por medio de fetch usando react con el hook useEffect.'
            demo='https://dalemdev-app-marvel.netlify.app/'
            github='https://github.com/DalemDev/app-marvel'
          />
          <Proyecto 
            imagen={PROYECTO5}
            titulo='Validador de contraseña'
            descripcion='Este proyecto lo realice para mejorar en JavaScript, manejando el DOM e interactuando con él para lograr validar una contraseña.'
            demo='https://dalemdev.github.io/validacion-de-contrasena/'
            github='https://github.com/DalemDev/validacion-de-contrasena'
          />
          <Proyecto 
            imagen={PROYECTO6}
            titulo='Clon De Netflix'
            descripcion='Este proyecto lo realice para practicar css, al darle estilos a
            una pagina y que quede lo mas parecido posible a la página original de
            Netflix.'
            demo='https://dalemberg2003.github.io/ClonNetflix/'
            github='https://github.com/Dalemberg2003/ClonNetflix'
          /> 
          <Proyecto 
            imagen={PROYECTO7}
            titulo='To-do App'
            descripcion='Este proyecto lo realice como practica de html, css y js, mediante
            la creacion de una todoApp con guardado en el localStorage.'
            demo='https://dalemberg2003.github.io/TodoApp/'
            github='https://github.com/Dalemberg2003/TodoApp'
          /> 
          <Proyecto 
            imagen={PROYECTO8}
            titulo='Reloj Digital'
            descripcion='Este proyecto lo realice como práctica para crear diseños limpios
            y elegantes al momento de crear una página web y agregandole funcionalidad con JS.'
            demo='https://dalemberg2003.github.io/RelojDigital/'
            github='https://github.com/Dalemberg2003/RelojDigital'
          /> 
          <Proyecto 
            imagen={PROYECTO9}
            titulo='Temporizador'
            descripcion='Este proyecto lo realice para mejorar en JavaScript, manejando el DOM e interactuando con diferentes botones.'
            demo='https://dalemberg2003.github.io/Temporizador/'
            github='https://github.com/Dalemberg2003/Temporizador'
          />
           <Proyecto 
            imagen={PROYECTO10}
            titulo='E-Commerce'
            descripcion='Este proyecto lo realice para practicar html, css y javascript, creando una web de ecommerce responsiva y con ciertas funciones.'
            demo='https://dalemdev.github.io/sneakers/'
            github='https://github.com/DalemDev/sneakers'
          /> 
          <Proyecto 
            imagen={PROYECTO11}
            titulo='Calculadora Presupuesto'
            descripcion='Este proyecto lo realice para practicar JavaScript, dandole un uso
            a la vida real para sacar el presupuesto de una persona.'
            demo='https://dalemberg2003.github.io/AppPresupuesto/'
            github='https://github.com/Dalemberg2003/AppPresupuesto'
          />          
          <Proyecto 
            imagen={PROYECTO12}
            titulo='App Comida'
            descripcion='Este proyecto lo realice como practica de html, css y js al
            maquetar desde cero una página de comida donde se presentan platillos, diseñada para móviles.'
            demo='https://dalemberg2003.github.io/AppComida/'
            github='https://github.com/Dalemberg2003/AppComida'
          /> 
          <Proyecto 
            imagen={PROYECTO13}
            titulo='Login'
            descripcion='Este proyecto lo realice para practicar como maquetar un login y
            darle un estilo sencillo y limpio, para posteriormente conectarlo a una base de datos.'
            demo='https://dalemberg2003.github.io/Login/'
            github='https://github.com/Dalemberg2003/Login'
          /> 
          <Proyecto 
            imagen={PROYECTO14}
            titulo='Sección De Pago'
            descripcion='Este proyecto lo realice para practicar mis habilidades de
            maquetado, mediante la creacion de una seccion de pago de una
            página de música.'
            demo='https://dalemberg2003.github.io/order-summary-component-main/'
            github='https://github.com/Dalemberg2003/order-summary-component-main'
          /> 
          <Proyecto 
            imagen={PROYECTO15}
            titulo='Página De Comidas'
            descripcion='Este proyecto lo realice como practica de html, css y js al
            maquetar desde cero una página de comida con dinamismo mediante JavaScript.'
            demo='https://dalemberg2003.github.io/ProyectoFinalGit/'
            github='https://github.com/Dalemberg2003/ProyectoFinalGit'
          /> 
        </div>
      </div>
      {/* seccion contacto */}
      <div className="contenedor-contactos" id="contacto">
        <h2>Contacto</h2>
        <Formulario />
        <div className="contactos">          
          <a href="https://twitter.com/Dalemberg72" target="_blank" rel="noopener noreferrer">
            <img src={TWITTER} alt="Twitter" className="contacto" loading="lazy" />
          </a>
          <a href="https://www.linkedin.com/in/dalemberg-garcia-688489216/" target="_blank" rel="noopener noreferrer">
            <img src={LINKEDIN} alt="Linkedin" className="contacto" loading="lazy" />
          </a>          
        </div>
      </div>
      <IrArriba />
    </div>
  );
}

export default App;
