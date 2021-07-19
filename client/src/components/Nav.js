import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import TripContext from '../utils/TripContext'

import logo from '../images/galaxy-logo.png'

const Nav = () => {

    let history = useHistory();

    const { loggedIn, setLoggedIn } = useContext(TripContext);

    // const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            setLoggedIn(true);
        }
    }, [loggedIn])

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setLoggedIn(false)
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Galaxy Getaways" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">About</a>
                        </li>
                        {loggedIn ?
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/my-trips">My Trips</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="logout" onClick={handleLogout}>Logout</a>
                                </li>
                            </>
                            :
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
