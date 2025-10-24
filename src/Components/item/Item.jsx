import "./Item.css"


const Item = ({ product }) => {
  return (
    <li className="item">
    <div className="ItemGeneral">
      <img className="ItemProductIMG" src="{product.image}" alt="" />
      <p className="ItemProductName">{product.name}</p>
      <p className="ItemProductDescrip">{product.description}</p>
      <p className="ItemProductPrecio">{product.price}</p>
    </div>
    </li>
  )
}

export default Item