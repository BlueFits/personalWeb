import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io"
import { Link } from "react-router-dom";

const MobileNav = () => {
    //STATES    
    const [isVisible, setIsVisible] = useState();
    
    //HANDLERS
    function menuHandler() {
        setIsVisible(!isVisible);
    };

    return(
        <nav>
            <div className="mobile-navigation-bar">
                <p>CHRISTIAN ROJAS</p>
                <IoIosMenu size={40} onClick={menuHandler}/>
            </div>
            <div className={`mobile-menu ${isVisible ? 'menu-is-visible' : ''}`}>
                <ul>
                    <li onClick={() => setIsVisible(false)}><Link to="/"><p className="mobile-menu-text">HOME</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/about"><p className="mobile-menu-text">ABOUT</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/projects"><p className="mobile-menu-text">PROJECT</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/contact"><p className="mobile-menu-text">CONTACT</p></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;