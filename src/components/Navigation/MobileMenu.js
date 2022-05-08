import React from "react";
import "./Navigation.css";

const MobileMenu = () => {
    return (
        <div className="mobile-menu-container">
            <ul className="media-nav-link-container">
                <li className="nav-link"><div>Schedule</div><span className="mobile-vector"></span></li>
                <li className="nav-link"><div>About Us</div><span className="mobile-vector"></span></li>
                <li className="nav-link"><div>Contact</div><span className="mobile-vector"></span></li>
            </ul>
        </div>
    )
}

export default MobileMenu;