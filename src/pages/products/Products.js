import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../../store/products-slice'

import Navbar from '../../layouts/Navbar'
import ProductItems from './ProductItems'
import CategoryList from '../categories/CategoryList'

import './Products.css'

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products') 
            .then(({data}) => {
                dispatch(productsAction.setProducts(data))
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