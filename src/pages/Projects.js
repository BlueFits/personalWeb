import React from "react";
import FadeIn from "react-fade-in";
import projectHeader from "../assets/images/project_header.svg";

const Projects = () => {
    return(
        <section>
            <div style={{ backgroundColor: "#f7e8a0" }} className="spacing-compensate"></div>
            <div className="project-container">
                <div className="project-header-container">
                    <img src={projectHeader} alt="project_header.svg" className="project-header-svg"/>
                </div>
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