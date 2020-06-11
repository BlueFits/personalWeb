import React from "react";

const Content = ({ style, header, highlight, general }) => {
    return(
        <div style={style} className="about-content">
            <h1 className="about-text-header">{header}</h1>
            <div className="about-content-texts">
                <span className="about-text-highlight">
                    <h1>{highlight}</h1>
                </span>
                <span className="about-text-general">
                    <p>{general}</p>
                </span>
            </div>
        </div>
    );
}

export default Content;