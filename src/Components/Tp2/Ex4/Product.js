import React from 'react'
import './Product.css'

const Product = ({img,title,price,}) => {
  return (
    <div className='prd'>
      <img src={img} alt='img'/>
      <h4>{title}</h4>
      <p>{price}</p>
      <button>Ajouter au panier</button>
    </div>
  )
}

export default Product
