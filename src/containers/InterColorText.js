/* 

To use this

<div>
    <InterColorText textColor="#cd122d" overlayColor="#fdc52c">HELLO</InterColorText>
</div>

*/

import React, { useState, useRef } from "react";

export const InterColorText = ({ children, textColor, overlayColor, ...props }) => {

    const containerElem = useRef(null);

    const initMousePos = { x: 0, y: 0, };

    const [mousePos, setMousePos] = useState(initMousePos);

    const handleMouseMove = event => {
        event = event.nativeEvent;
        const elem = containerElem.current;
        const newX = (event.offsetX / elem.clientWidth) * 100;
        const newY = (event.offsetY / elem.clientHeight) * 100;

        const newMousePo = {
            x: newX,
            y: newY,
        };

        setMousePos(newMousePo);
    };

    const handleMouseOut = () => {
        setMousePos(initMousePos);
    };

    return(
        <section 
            style={{ "--maskX": mousePos.x, "--maskY": mousePos.y }} 
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            ref={containerElem}
            className="animatedTextContainer" 
            {...props}
        >
            <h1 style={{ color: textColor }} className="animatedTextContent">{children}</h1>
            <h1 style={{ color: overlayColor }} className="animatedTextContentClone">{children}</h1>
        </section>
    );
};