import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaShoppingCart } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const menuToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header>
            <nav className="nav container">
                <Link to="/" className="logo">KVEY STORE</Link>

                <ul className={`navbar ${toggle ? 'open-menu' : 'close-menu'}`}>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/register" className="nav-link">Register</Link></li>
                    <li><Link to="/login" className="nav-link">Sign In</Link></li>
                    <li>
                        <Link to="/" className="nav-link">
                            <FaShoppingCart />
                        </Link>
                    </li>
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