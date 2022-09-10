import React, { useState } from 'react'
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
                <a href="/" className="logo">KVEY STORE</a>

                <ul className={`navbar ${toggle ? 'open-menu' : 'close-menu'}`}>
                    <li><a href="/" className="nav-link">Products</a></li>
                    <li><a href="/" className="nav-link">Register</a></li>
                    <li><a href="/" className="nav-link">Sign In</a></li>
                    <li>
                        <a href="/" className="nav-link">
                            <FaShoppingCart />
                        </a>
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