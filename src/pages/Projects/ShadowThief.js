import { React } from "react";
import PythonLogo from "./python_logo.png";
import "./Projects.scss";

function ShadowThief() {
    return (
        <div className="container">
            <div className="project-container">
                <img src={PythonLogo} alt={"Python Logo"} className="header_image"></img>
                <div className="project-description">
                    <h4>Projects</h4>
                    <h1>Shadow Thief</h1>
                    <p>
                        Shadow Thief is a headless add to cart service for Shopify websites. 
                        I programmed the bot in <span>Python</span> with the use of <span>Selenium </span>
                        and <span>BeautifulSoup4.</span> The project is designed to automate the process of 
                        checking out items for users by parsing & crawling websites for data & adding products 
                        to carts for users in order to check out. Motivation was to make the process as "human"
                        as possible so that it could get past any anti-bot services set up on sites.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ShadowThief;