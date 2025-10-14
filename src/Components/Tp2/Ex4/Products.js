import React from 'react'
import Product from './Product'
import products from './Data'
import './Products.css'
import './assets/HP16D0195NF.jpg'

const Products = () => {
  return (
    <div className='prdd'>
      {products.map((product)=>{
        return <Product img={product.thumbnail} title={product.title} price={product.price}/>
      })}
    </div>
  )
}

export default Products
