import React from 'react';
import './ProductView.css';

function ProductView({ product }) {
  return (
    <div className='ProductView'>
        <h1 className='ProductTitle'>{product.title}</h1>
        <h2>{product.description}</h2>
     <img className='ProductImg' src={product.image} alt={product.title + " image"} /> 
    </div>
  )
}

export default ProductView