import { React } from "react";
import PythonLogoWebp from "./python_logo.webp";
import "./Projects.scss";

function PermitValidator() {
    return (
        <div className="container">
            <div className="project-container">
                <img src={PythonLogoWebp} alt={"Python Logo"} className="header_image"></img>
                <div className="project-description">
                    <h4>Projects</h4>
                    <h1>iPARQ Permit Validator</h1>
                    <a href="https://github.com/nlpulido/iparq-automation">Github Repo</a>
                    <p>
                        The iPARQ Permit Validator serves as an automated bot to validate permits recently created
                        on the backend of the iPARQ Admin website. While working at Public Safety, one area I found 
                        took awhile was creating new permits for each school semester & making sure the data was recorded
                        correctly for the payroll department. With this script, It will utilize <span>Python</span> with <span>Selenium </span>
                        in validating permits recorded in Google Sheets with the help of the <span>EZSheets</span> library. I'm currently in the
                        process of changing the script into a easy-install <span>Chrome Extension</span> built with <span>Node.JS & Javascript.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PermitValidator;