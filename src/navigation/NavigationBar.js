import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {

    const [homeLine, setHomeLine] = useState();
    const [aboutLine, setAboutLine] = useState();
    const [projectLine, setProjectLine] = useState();
    const [contactLine, setContactLine] = useState();

    const location = useLocation();
    
    useEffect(() => {
        //Resets all hook states
        setHomeLine({});
        setAboutLine({});
        setProjectLine({});
        setContactLine({});

        //Underline styling
        const underline = { borderBottom: "2px solid" };

        //Set where to underline
        switch(location.pathname) {
            case("/"):
                setHomeLine(underline);
                break;
            case("/about"):
                setAboutLine(underline);
                break;
            case("/projects"):
                setProjectLine(underline);
                break;
            case("/contact"): 
                setContactLine(underline);
                break;
            default:
                setHomeLine(underline);
        };
    }, [location]);

    return(
        <nav className="NavigationBar">
            <div>
                <p style={{ border: "none" }} className="navigationText">CHRISTIAN ROJAS</p>
            </div>
            <div>
                <ul className="NavigationUl">
                    <li><Link to="/"><p  style={homeLine} className="navigationText">HOME</p></Link></li>
                    <li><Link to="/about"><p style={aboutLine} className="navigationText">ABOUT</p></Link></li>
                    <li><Link to="/projects"><p style={projectLine} className="navigationText">PROJECTS</p></Link></li>
                    <li><Link to="/contact"><p style={contactLine} className="navigationText">CONTACT</p></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;