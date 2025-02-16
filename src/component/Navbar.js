import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className="logo">The Gen Z Science</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/workshop">workshop</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="https://www.youtube.com/@genzscience1" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
               
            </ul>
        </nav>
    );
};

export default Navbar;
