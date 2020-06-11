import React from "react";

const Greeters = ({ style, header, text, buttonComponent }) => {
    return(
        <div style={style}>
            <h2>{header}</h2>
            <p style={{ marginTop: "10px" }}>{text}</p>
            <div>{buttonComponent}</div>
        </div>
    );
};

export default Greeters;