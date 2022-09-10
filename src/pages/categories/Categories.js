import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Clothes from '../../assets/images/clothes.jpg'
import Headphone from '../../assets/images/headphone.jpg'
import Shoes from '../../assets/images/shoes.jpg'
import Watches from '../../assets/images/watches.jpg'

import './Categories.css'

const Categories = () => {
    const categories = useSelector(state => state.category.categories)

    return (
        <div className='categories__container'>
            <h2 className='categories__title'>Browse All Our Categories</h2>
            {
                categories && <div className='categories'>
                <div className='container__grid1'>
                    <img src={Clothes} alt='clothes'/>
                    <Link 
                        to={`/products/category/${categories[0]}`} 
                        className='btn__grid'>
                            { categories[0] }
                    </Link>
                </div>
                <div className='container__grid2'>
                    <img src={Watches} alt='clothes'/>
                    <Link 
                        to={`/products/category/${categories[1]}`} 
                        className='btn__grid'>
                            { categories[1] }
                    </Link>
                </div>
                <div className='container__grid3'>
                    <img src={Shoes} alt='clothes'/>
                    <Link 
                        to={`/products/category/${categories[2]}`} 
                        className='btn__grid'>
                            { categories[2] }
                    </Link>
                </div>
                <div className='container__grid4'>
                    <img src={Headphone} alt='clothes'/>
                    <Link 
                        to={`/products/category/${categories[3]}`} 
                        className='btn__grid'>
                            { categories[3] }
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Categories