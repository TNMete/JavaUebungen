import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Successify</div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/visionboard">VisionBoard</Link>
                <Link to="/todolist">Todo-List</Link>
                <Link to="/recipes">Rezepte</Link>
                <Link to="/calendar">Calendar</Link>
            </div>
        </nav>
    );
}

export default Navbar;
