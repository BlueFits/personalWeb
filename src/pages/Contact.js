import React from "react";

const Contact = () => {
    return(
        <section style={{ backgroundColor: "#f76c6c" }}>
            <div style={{ backgroundColor: "#f76c6c" }} className="spacing-compensate"></div>
            <div className="contact-container">
                <div className="contact-content-wrapper">
                    <span>
                        <h2>SAY HELLO</h2>
                        <p className="contact-header-p">Want to contact me? You can reach me here</p>
                    </span>
                    <h1 className="contact-email">rojas.christian@outlook.com</h1>
                </div>
            </div>
        </section>
    );
};

export default Contact;