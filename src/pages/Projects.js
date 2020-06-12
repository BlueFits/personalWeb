import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Animated } from "react-animated-css";
import FadeIn from "react-fade-in";
import projectHeader from "../assets/images/project_header.svg";

const Projects = () => {
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return(
        <section>
            <div style={{ backgroundColor: "#f7e8a0" }} className="spacing-compensate"></div>
            <div className="project-container">
                <Animated animationIn="fadeIn">
                    <div className="project-header-container">
                        <img src={projectHeader} alt="project_header.svg" className="project-header-svg"/>
                    </div>
                </Animated>
                <ul className="project-ul">
                    <FadeIn className="project-fadeIn">
                        <li className="project-li">
                            <div className="project-content"></div>
                        </li>
                        <li className="project-li">
                            <div className="project-content"></div>
                        </li>
                        <li className="project-li">
                            <div className="project-content"></div>
                        </li>
                    </FadeIn>
                </ul>
            </div>
        </section>
    );
};

export default Projects; 