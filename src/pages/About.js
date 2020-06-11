import React from "react";
//IMAGES
import aboutHeader from "../assets/images/about-header.svg";
//COMPONENTS
import Content from "../components/about/Content";

const About = () => {
    /* Scroll to top of the page
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);
    */
    return(
        <section>
            <div style={{ backgroundColor: "#24305e" }} className="spacing-compensate"></div>
            <div className="about-container">
                <div className="about-header">
                    <img src={aboutHeader} alt="about-header.svg" className="about-header-svg"/>
                </div>
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
                <Content 
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
            </div>
        </section>
    );
};

export default About;