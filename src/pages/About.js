import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import { Animated } from "react-animated-css";
//IMAGES
import aboutHeader from "../assets/images/about-header.png";
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
                        general="Hello! I am Christian and I am a computer science
                        student at York University. I have been exposed to
                        programming ever since I was a kid, primarily with
                        visual basics. From then on I’ve learned a bit of java
                        in high school and used my knowledge
                        to build a couple of small projects. I have then
                        changed my focus to javascript, where I learned how
                        to be a MERN stack developer and made a bit of
                        projects with this stack. Additionally I also learned
                        mobile development with React-Native, combining
                        this with my backending knowledge I am able to
                        make full web applications as well as mobile
                        applications. Currently I am shifting my focus to
                        C++ and I have taken an interest in competitive
                        programming.
                        I am first and foremost a programmer, but I have also
                        grown to love design. I have taken courses in school
                        to help me learn more about design, and thanks to
                        my projects I have had ample time to practice my
                        design skills. Furthermore, learning about
                        design has helped me become a better problem solver,
                        thanks to Design Thinking. "
                    />
                </Fade>
                <Fade bottom>
                    <Content 
                        style={{ marginTop: "80px" }}
                        header="Personal Life"
                        highlight="I love to read, play music, play basketball, travel, anything really."
                        general="I've always had a knack for music ever since I was younger. I started playing guitar
                        when I was around 7. I love all kinds of music, these days I use my musical abilities in FL studio 
                        to create music just for fun. On top of that I love playing basketball. I've been playing basketball
                        ever since I was young when my dad enrolled me in a skills camp. Ever since then I've joined many organized
                        basketball teams like my Phil-Can, Phil-Am, and OBA. Aside from that I've been fortunate enough to 
                        travel to many different places. I've travelled all across Asia from singapore, korea, phillipines, malaysia, only to name a few 
                        and also all across the U.S. My upcoming trip is going to be to Alaska and that is something I really look forward to."
                    />
                </Fade>
            </div>
        </section>
    );
};

export default About;