import "./Tarjetita.css";
import {Link } from "react-router-dom";

function Tarjetita({title = "titulo", description ="descripcion", price="Precio", image="Foto"}) {
  return (
    <div className='Card'>
     <Link to={title}>
    <div><h2 className='Card-title'>{title}</h2></div> 
     </Link>
     <p>{price}</p>
     <div className="Card-Image"><img src={image} alt="" /></div>
    <p>{description}</p></div>
  );
}

export default Tarjetita;