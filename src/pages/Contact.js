import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { Animated } from "react-animated-css";


const Contact = () => {
    //CONSTANTS
    const textAnim = [
        "tada",
        "pulse",
        "flash",
    ];

    //STATES
    const [anim, setAnim] = useState(textAnim[randomNum()]);

    //EFFECTS
    useEffect(() => {
        //For missing dependancy error
        const textAnim = [
            "tada",
            "pulse",
            "flash",
        ];
        setAnim(textAnim[randomNum()]);
    }, []);

    return(
        <section style={{ backgroundColor: "#f76c6c" }}>
            <div className="contact-container">
                <div className="contact-content-wrapper">
                    <FadeIn>
                        <span>
                            <h2>SAY HELLO</h2>
                            <p className="contact-header-p">Want to contact me? You can reach me here</p>
                        </span>
                        <Animated animationIn={anim} animationInDelay={1000}>
                            <h1 className="contact-email">rojas.christian@outlook.com</h1>
                        </Animated>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

//HELPERS
function randomNum() {
    return Math.floor(Math.random() * 3);
};

export default Contact;