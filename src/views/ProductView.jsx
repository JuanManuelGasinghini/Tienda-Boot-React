import React from 'react';
import './ProductView.css';
import Footer from '../Components/footer/Footer';

function ProductView({ product }) {
  return (
    <div className='ProductView'>
        <h1 className='ProductTitle'>{product.title}</h1>
        <h2>{product.description}</h2>
     <img className='ProductImg' src={product.image} alt={product.title + " image"} /> 
     <div>
     <Footer />
     </div>
    </div>
  )
}

export default ProductView