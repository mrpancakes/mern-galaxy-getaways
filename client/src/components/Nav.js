import React from 'react'

import logo from '../images/galaxy-logo.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 p-3">
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
                        <li className="nav-item">
                            <a className="nav-link" href="/my-trips">My Trips</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login / Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
