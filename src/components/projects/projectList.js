import React from "react";

const ProjectList = ({ projectLink, classImage, logo }) => {
 return(
    <li className="project-li">
        <a href={projectLink} target="_blank" rel="referrer noopener">
            <div className="project-content">
                <div className={`project-background  ${classImage}`} >
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </a>
    </li>
 );
};

export default ProjectList;