import React from 'react'

import Clothes from '../../assets/images/clothes.jpg'
import Headphone from '../../assets/images/headphone.jpg'
import Shoes from '../../assets/images/shoes.jpg'
import Watches from '../../assets/images/watches.jpg'

import './Categories.css'

const Categories = () => {
    return (
        <div className='categories__container'>
            <h2 className='categories__title'>Browse All Our Categories</h2>
            <div className='categories'>
                <div className='container__grid1'>
                    <img src={Clothes} alt='clothes'/>
                    <button className='btn__grid'>Clothes</button>
                </div>
                <div className='container__grid2'>
                    <img src={Watches} alt='clothes'/>
                    <button className='btn__grid'>Watches</button>
                </div>
                <div className='container__grid3'>
                    <img src={Shoes} alt='clothes'/>
                    <button className='btn__grid'>Shoes</button>
                </div>
                <div className='container__grid4'>
                    <img src={Headphone} alt='clothes'/>
                    <button className='btn__grid'>Headphone</button>
                </div>
            </div>
        </div>
    )
}

export default Categories