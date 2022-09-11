import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { FaShoppingCart, FaUser } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    const userToken = useSelector(state => state.user.users?.token)
    const [token, setToken] = useState(userToken)
    const [toggle, setToggle] = useState(false)

    const menuToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        setToken(userToken)
    }, [userToken])
    return (
        <header>
            <nav className="navigation container__nav">
                <Link to="/" className="logo">KVEY STORE</Link>

                <ul className={`navigationbar ${toggle ? 'open-menu' : 'close-menu'}`}>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    {
                        token === null ?
                        <>
                            <li>
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav-link">Sign In</Link>
                            </li>
                        </>
                        : ''
                    }
                    <li>
                        <Link to="/cart" className="nav-link">
                            <FaShoppingCart />
                        </Link>
                    </li>
                    { token !== null ? <li><Link to="/user" className="nav-link"><FaUser /></Link></li> : '' }
                </ul>

                <div className={`menu-icon ${toggle ? 'move' : ''}`} onClick={menuToggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar