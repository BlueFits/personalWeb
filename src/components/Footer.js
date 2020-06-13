import React from "react";

const Footer = ({ style }) => {
        return(
            <footer style={ style }>
                <div>
                    <p> &#169; Christian Rojas/2020/All Rights Reserved</p>
                </div>
                <div>
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100047736457748" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a></li>
                        <li><a href="https://github.com/BlueFits" target="_blank" rel="noopener noreferrer"><p>Github</p></a></li>
                        <li><a href="https://www.linkedin.com/in/christian-rojas-16194a186" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a></li>
                    </ul>
                </div>
            </footer>
        );
};

export default Footer;