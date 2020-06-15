import React from "react";

const Greeters = ({ style, header, text, buttonComponent }) => {
    return(
        <div style={style}>
            <h2>{header}</h2>
            <span style={{ marginTop: "10px" }}>{text}</span>
            <div>{buttonComponent}</div>
        </div>
    );
};

export default Greeters;