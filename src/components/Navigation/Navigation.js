import React from 'react';
import './Navigation.css';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="nav-bar">
            <nav className="nav-content">
                <Logo/>
                <ul className="nav-link-container">
                    <li className="nav-link">Schedule</li>
                    <li className="nav-link">About Us</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;