import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
//ICONS
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaGit, FaInstagramSquare } from "react-icons/fa";
//COMPONENTS
import Greeters from "../components/home/Greeters";
//IMAGES
import circuits from "../assets/images/circuits.svg";
import myImage from "../assets/images/myImage.svg";
import FadeIn from "react-fade-in";

const Home = () => {

    const [aboutAnim, setAboutAnim] = useState(0);
    const [projectAnim, setProjectAnim] = useState(0);

    useEffect(() => {
        buttonHandler(setAboutAnim);
    }, []);

    const about = {
        header: (
            <TextLoop interval={aboutAnim}>
                <span>My Favourite Quote</span>
                <span>Another Random Fact</span>
            </TextLoop>
        ),
        description: (
            <TextLoop noWrap={false} interval={aboutAnim}>
                <span>One of my favourite works of literature is “Keys To Success” by B.C. Forbes.</span>
                <span>
                    So basically the shortest amount of text becomes the width 
                    for our text.
                </span>
            </TextLoop>
        ),
    };

    const project = {
        header: (
            <TextLoop interval={projectAnim}>
                <span>BetterThanYesterday</span>
                <span>BetterThanYesterday</span>
            </TextLoop>
        ),
        description: (
            <TextLoop noWrap={false} interval={projectAnim}>
                <span>
                    My first mobile application made with React-Native.
                    This app use a point system to asses your day and
                    the goal is to aquire my points than you did on the
                    previous day
                </span>
                <span>
                    My first mobile application made with React-Native.
                    This app use a point system to asses your day and
                    the goal is to aquire my points than you did on the
                    previous day
                </span>
            </TextLoop> 
        ),
    };

    //CONSTANTS
    const favQuoteButtons = (
        <div className="home-button-container">
            <p className="home-button-styles" onClick={buttonHandler.bind({}, setAboutAnim)}>Tell me more</p>
            <Link className="home-button-styles" to="/about"><p>Visit my about page</p></Link>
        </div>
    );

    const projectsButton = (
        <div className="home-button-container">
            <p className="home-button-styles" onClick={buttonHandler.bind({}, setProjectAnim)}>Other projects</p>
            <Link className="home-button-styles" to="/projects"><p>View all my projects</p></Link>
        </div>
    );

    const socialMediaIcons = (
        <div className="social-icons">
            <a style={{ color: "#fff" }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size="1.5em" /></a>
            <a style={{ color: "#fff" }} href="#"><FaGit size="1.5em" /></a>
            <a style={{ color: "#fff" }} href="#"><FaInstagramSquare size="1.5em" /></a>
            <a style={{ color: "#fff" }} herf="#"><FaLinkedinIn size="1.5em" /></a>
        </div>
    );

    //HANDLERS
    function onScrollHandler() {
        const arrow = document.getElementById("arrowDown");
        arrow.style.opacity = 0;
        arrow.style.transform = "scale(0)";
    };
    
    function buttonHandler(setAnim) {
        setTimeout(() => {
            setAnim(500)
        });
        setTimeout(() => {
            setAnim(0)
        }, 1000);
    };

    return(
        <section className="home-section">
            <div style={{ display: "none" }}>
                <img src={circuits} alt="circuits.svg" className="circuits"/>
            </div>
            <div className="home-contents-wrapper">
                <div className="home-contents">
                    <img src={myImage} alt="myImage.svg" className="myImage"/>
                </div>
                <div style={{ width: 150 }}>{/* Placeholder for middle */}</div>
                <div className="greeters home-contents">
                    <div onScroll={onScrollHandler} className="greeters-container">
                        <FadeIn transitionDuration={700}>
                            <h1 style={{ color: "#fff", marginBottom: "10px"  }}>
                                <TextLoop>
                                    <span>Discipline</span>
                                    <span>Dedication</span>
                                    <span>Commitment</span>
                                    <span>Excellence</span>
                                </TextLoop> {" "}
                                over everything.
                            </h1>
                            <Greeters 
                                style={styles.textSpacing}
                                header="Welcome"
                                text="This is my personal website, want to know something about me?"
                            />
                            <Greeters 
                                style={styles.textSpacing}
                                header={about.header}
                                text={about.description}
                                buttonComponent={favQuoteButtons}
                            />
                            <Greeters 
                                style={styles.textSpacing}
                                header={project.header}
                                text={project.description}
                                buttonComponent={projectsButton}
                            />
                            <Greeters 
                                style={styles.textSpacing}
                                header="Contact me"
                                text="Back in 2014 I made a deccision to stay away from social
                                media, ever since then I use my social media strictly for
                                work. You can find me here."
                                buttonComponent={socialMediaIcons}
                            />
                        </FadeIn>
                    </div>
                    <Animated className="animated-icon" animationIn="bounceIn" animationInDuration={3000}>
                        <IoIosArrowDown id="arrowDown" style={ styles.arrowDown } size="1.5em"/>
                    </Animated>
                </div>
            </div>
        </section>
    );
}

const styles = {
    textSpacing: {
        marginBottom: "45px",
    },
    arrowDown: { 
        marginTop: "10px", 
        transition: "0.3s ease-out" 
    },
};

export default Home;