import getProducts from '../../Data/products.js';
import { useState, useEffect } from 'react';
import Itemlist from '../ItemList/ItemList.jsx';
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })

  }, []);

console.log(products);



  return (
    <div className="item-list-container">
<h2 className="Llamada">{greeting}</h2>
<Itemlist products={products} />
    </div>
  )
}

export default ItemListContainer