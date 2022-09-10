import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../../store/products-slice'

import './CategoryList.css'

const CategoryList = () => {
    const dispatch = useDispatch()
    const [activeCategory, setActiveCategory] = useState('')
    const categories = useSelector(state => state.category.categories)

    const onActiveCategory = (category) => {
        setActiveCategory(category)
        getProducts(category)
    }

    const getProducts = (category) => {
        let url = 'https://fakestoreapi.com/products'

        if (category !== 'all') {
            url = `https://fakestoreapi.com/products/category/${category}`
        }

        axios.get(url)
            .then(({data}) => {
                dispatch(productsAction.setProducts(data))
            }).catch((error) => console.log(error.response))
    }

    // useEffect(() => {
    //     getProducts(activeCategory)
    // }, [activeCategory])

    return (
        <div className='category'>
            <div className="py-2 px-4 bg-dark text-white mb-3">
                <strong className="small text-uppercase fw-bold">Categories</strong>
            </div>
            <ul className='category__list'>
                <li 
                    className={`category__item ${activeCategory === 'all' ? 'active' : '' }`}
                    onClick={() => onActiveCategory('all')}
                    >
                    <div className='category__text'>All Products</div>
                </li>
                {
                    categories.map(category => (
                        <li 
                            className={`category__item ${activeCategory === category ? 'active' : '' }`} 
                            key={category} 
                            onClick={() => onActiveCategory(category)}
                            >
                            <div className='category__text'>{category}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryList