import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { categoriesAction } from './store/categories-slice';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from "./pages/Home";
import Products from './pages/products/Products';
import Product from './pages/products/Product';

const App = () => {
    const dispatch = useDispatch()

    const getCategories = () => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(({data}) => {
                dispatch(categoriesAction.getCategories(data))
            }).catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/category/:slug" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
