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
                <ul className={`mobile-menu ${isVisible ? 'menu-is-visible' : ''}`}>
                    <li onClick={() => setIsVisible(false)}><Link to="/"><p className={`mobile-menu-text ${isVisible ? 'mobile-text-is-visible' : ''}`}>HOME</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/about"><p className={`mobile-menu-text ${isVisible ? 'mobile-text-is-visible' : ''}`}>ABOUT</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/projects"><p className={`mobile-menu-text ${isVisible ? 'mobile-text-is-visible' : ''}`}>PROJECT</p></Link></li>
                    <li onClick={() => setIsVisible(false)}><Link to="/contact"><p className={`mobile-menu-text ${isVisible ? 'mobile-text-is-visible' : ''}`}>CONTACT</p></Link></li>
                </ul>
        </nav>
    );
};

export default MobileNav;