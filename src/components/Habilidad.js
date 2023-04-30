import "../css/Habilidad.css";

function Habilidad(props) {
  return (
    <div className="habilidad" title={props.children}>
      <img src={props.logo} alt={props.children} loading="lazy" />
      <p>{props.children}</p>
    </div>
  );
}

export default Habilidad;
