import React from 'react'
import Product from './Product'
import products from './Data'
import './Products.css'

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
