import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../../layouts/Navbar'
import ProductItems from './ProductItems'
import CategoryList from '../categories/CategoryList'

import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]) 

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products') 
            .then(({data}) => {
                setProducts(data)
            }).catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='products'>
            <Navbar />
            <div className='row container-fluid mt-20'>
                <div className='col-md-3'>
                    <CategoryList />
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        { products.map(product => <ProductItems product={product} key={product.id} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products