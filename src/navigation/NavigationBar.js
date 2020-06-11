import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return(
        <nav className="NavigationBar">
            <div>
                <p className="navigationText">CHRISTIAN ROJAS</p>
            </div>
            <div>
                <ul className="NavigationUl">
                    <li><Link to="/"><p className="navigationText">HOME</p></Link></li>
                    <li><Link to="/about"><p className="navigationText">ABOUT</p></Link></li>
                    <li><Link to="/projects"><p className="navigationText">PROJECTS</p></Link></li>
                    <li><Link to="/contact"><p className="navigationText">CONTACT</p></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;