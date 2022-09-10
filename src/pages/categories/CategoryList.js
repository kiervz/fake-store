import React from 'react'
import { useSelector } from 'react-redux'

import './CategoryList.css'

const CategoryList = () => {
    const categories = useSelector(state => state.category.categories)

    const test = (category) => {
        console.log(category);
    }
    return (
        <div className='category'>
            <div className="py-2 px-4 bg-dark text-white mb-3">
                <strong className="small text-uppercase fw-bold">Categories</strong>
            </div>
            <ul className='category__list'>
                {
                    categories.map(category => (
                        <li className="category__item" key={category} onClick={() => test(category)}>
                            <div className='category__text'>{category}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryList