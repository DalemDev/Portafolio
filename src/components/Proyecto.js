import React from "react";
import "../css/Proyecto.css";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

function Proyecto({ imagen, titulo, descripcion, demo, github }) {
  return (
    <div className="proyecto">
      <div className="contenedor-imagen">
        <img src={imagen} alt={titulo} loading="lazy" />
      </div>
      <div className="contenedor-info">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <div className="contenedor-acciones">
          <a href={demo==='no hay' ? "#!" : demo} target={demo==='no hay' ? "" : "_blank"} rel="noopener noreferrer">
            Ver Demo <AiFillEye />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Ver Repositorio <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
