import React from 'react'
import './ProductItems.css'

const ProductItems = ({product}) => {
  return (
    <div className='card'>
        <div className='card__image'>
            <img src={product.image} alt={product.title}/>
        </div>
        <div className='card__body'>
            <div className='card__title'>
                { product.title.substring(0,30) }
                { product.title.length > 30 ? '...' : '' }
            </div>
            <div className='card__price'>{ product.price }</div>
        </div>
    </div>
  )
}

export default ProductItems