import React, { useState } from 'react'
import axios from '../../config/axiosClient'
import { useDispatch } from 'react-redux'
import { usersAction } from '../../store/users-slice'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

import './Login.css'
import loginBG from '../../assets/images/login-bg.jpg'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (username.trim().length === 0 || password.trim().length === 0) {
            return setError("Please enter username and password.");
        }

        setError('')
        axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            }).then(({data}) => {
                dispatch(usersAction.setUser(data))
                navigate('/products')
            }).catch((error) => setError(error.response.data))
    }

    return (
        <div className="d-lg-flex half">
            <div className="bg order-1 order-md-2" style={{backgroundImage: `url(${loginBG})`}}></div>
            <div className="contents order-2 order-md-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <h3 className="mb-4">Login to <strong><Link to="/" style={{color: 'black'}}>KVEY STORE</Link></strong></h3>
                            
                            <div className={error ? 'status__error' : 'd-none'}>
                                <span>{error}</span>
                            </div>
                            <form onSubmit={onFormSubmit}>
                                <div className="form-group first mb-3">
                                    <label>Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}/>
                                </div>
                                <div className="form-group last mb-3">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}/>
                                </div>
                                
                                <button type="submit" className="btn__dark">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login