import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../../layouts/Navbar'
import ProductItems from './ProductItems'

import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products?limit=10') 
            .then(({data}) => {
                setProducts(data)
                console.log(data);
            }).catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='row container-fluid'>
                <div className='col-md-3'>
                    
                </div>
                <div className='col-md-9'>
                    <div className='products'>
                        { products.map(product => <ProductItems product={product} key={product.id} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products