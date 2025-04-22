import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">fake Tax... AirBnB</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">Über uns</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/impressum">Impressum</Link>
                <Link to="/career">Karriere</Link>
            </div>
        </nav>
    );
}

export default Navbar;
