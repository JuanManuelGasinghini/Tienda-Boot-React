import './ProductView.css';

function ProductView({ product }) {
  return (
    <div className='ProductView'>
        <h1 className='ProductTitle'>{product.title}</h1>
        <h2>{product.description}</h2>
        <h2>Llevalo por solo: {product.price}</h2>
        <h3> Stock de: {product.stock} unidades</h3>
     <img className='ProductImg' src={product.image} alt={product.title + " image"} /> 
     <div>
     </div>
    </div>
  )
}

export default ProductView