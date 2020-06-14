import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Animated } from "react-animated-css";
import FadeIn from "react-fade-in";
import projectHeader from "../assets/images/project_header.png";
//ASSETS
import BtyLogo from "../assets/images/BetterThanYesterday/logo.png";
import PL from "../assets/images/PortLogue/logo.png";
//COMPONENT
import ProjectList from "../components/projects/projectList";

const Projects = () => {
    
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    useEffect(() => {
        const parallaxEffect = () => {
            const parallax = document.getElementsByClassName("project-background");
            let offset = window.pageYOffset;
            for (const element of parallax) {
                element.style.backgroundPositionY = offset * -0.3 + "px";;
            }
        }
        window.addEventListener("scroll", parallaxEffect);
        return () => {
            window.removeEventListener("scroll", parallaxEffect);
        }
    }, []);

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
                        <ProjectList
                            projectLink="https://betterthanyesterday.herokuapp.com/"
                            classImage="bty"
                            logo={BtyLogo} 
                        />
                        <ProjectList
                            projectLink="https://sheltered-falls-05997.herokuapp.com/"
                            classImage="portlogue"
                            logo={PL} 
                        />
                    </FadeIn>
                </ul>
            </div>
        </section>
    );
};

export default Projects; 