import React from 'react'
import { FaShoppingCart, FaHeart, FaExpand } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './ProductItems.css'

const ProductItems = ({product}) => {
    return (
        <div className="col-lg-4 col-md-6 col-xl-4">
            <Link className="single__product" to={`/product/${product.id}`}>
                <div className="image__part" style={{
                            background: `url(${product.image}) no-repeat center`,
                            backgroundSize: 'cover'
                        }}>
                    <ul>
                        <li><div><FaShoppingCart /></div></li>
                        <li><div><FaHeart /></div></li>
                        <li><div><FaExpand /></div></li>
                    </ul>
                </div>
                <div className="text__part">
                    <h3 className="product__title">{product.title}</h3>
                    <h4 className="product__old__price">$79.99</h4>
                    <h4 className="product__price">${product.price}</h4>
                </div>
            </Link>
        </div>
    )
}

export default ProductItems