import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import { Animated } from "react-animated-css";
//IMAGES
import aboutHeader from "../assets/images/about-header.svg";
//COMPONENTS
import Content from "../components/about/Content";

const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return(
        <section>
            <div style={{ backgroundColor: "#24305e" }} className="spacing-compensate"></div>
            <div className="about-container">
                <Animated animationIn="fadeIn">
                    <div className="about-header">
                        <img src={aboutHeader} alt="about-header.svg" className="about-header-svg"/>
                    </div>
                </Animated>
                <Fade bottom>
                    <Content 
                        style={{ marginTop: "80px" }}
                        header="Hi, my name is Christian Rojas."
                        highlight="Creating software and websites has
                        been a hobby of mine ever since I
                        was a kid. I love learning new things
                        such as programming technologies,
                        physics, and design."
                        general="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation "
                    />
                </Fade>
                <Fade bottom>
                    <Content 
                        style={{ marginTop: "80px" }}
                        header="Hi, my name is Christian Rojas."
                        highlight="Creating software and websites has
                        been a hobby of mine ever since I
                        was a kid. I love learning new things
                        such as programming technologies,
                        physics, and design."
                        general="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation "
                    />
                </Fade>
            </div>
        </section>
    );
};

export default About;