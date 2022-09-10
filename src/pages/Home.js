import React from 'react'
import Navbar from "../layouts/Navbar";
import Categories from './categories/Categories';
import Hero from './hero/Hero';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Categories />
        </>
    )
}

export default Home 