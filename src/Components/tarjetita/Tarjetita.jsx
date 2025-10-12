import "./Tarjetita.css";
import {Link } from "react-router-dom";

function Tarjetita({title = "titulo", description ="descripcion"}) {
  return (
    <div className='Card'>
     <Link to={title}>
     <h2 className='Card-title'>{title}</h2>
     </Link>
    <p>{description}</p></div>
  );
}

export default Tarjetita;