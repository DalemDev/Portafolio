import React from 'react';
import '../css/Habilidad.css';

function Habilidad(props){
  return(
    <div className="habilidad" title={props.children}>
      <img src={props.logo} alt={props.children} loading="lazy" />
    </div>
  );
};

export default Habilidad;