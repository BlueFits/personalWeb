import React from "react";
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
                    <li className="project-li">
                        <div className="project-content"></div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Projects; 