import React, { useState } from 'react';
import './Navigation.css';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="nav-bar">
            <nav className="nav-content">
                <Logo/>
                {menuOpen ? 
                <div className="menu-open" onClick={e => setMenuOpen(false)}></div> : 
                <div className="menu-closed" onClick={e => setMenuOpen(true)}></div>}
                {menuOpen ? <MobileMenu/> :
                <ul className="nav-link-container">
                    <li className="nav-link">Schedule</li>
                    <li className="nav-link">About Us</li>
                    <li className="nav-link">Contact</li>
                </ul>}
            </nav>
        </div>
    )
}

export default Navigation;