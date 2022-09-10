import React from 'react'
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";

import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <section className='hero'>
                <h4>NEW INSPIRATION 2022</h4>
                <h2>Super value deals</h2>
                <h2 className='text-success'>On all products</h2>
                <p>Save more with coupons & up to 70% off!</p>

                <Link to="/products" className="shop__now">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button__text">Shop Now</span>
                </Link>
            </section>
        </>
    )
}

export default Home 