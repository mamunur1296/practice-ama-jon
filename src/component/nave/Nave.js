import React from 'react';
import logo from '../../images/Logo.svg';

const Nave = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <img src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ms-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-light active" aria-current="page" href="#">Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light active" aria-current="page" href="#">Order Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light active" aria-current="page" href="#">Manage Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light active" aria-current="page" href="#">Login</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    );
};

export default Nave;