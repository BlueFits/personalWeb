import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {

    const location = useLocation();

    return(
        <div>
            <h1>No match: {location.pathname}</h1>
        </div>
    );
};

export default NoMatch;