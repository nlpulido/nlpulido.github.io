import { React } from "react";
import DesktopFiller from "./desktop_filler.png";
import "./Projects.css";

function PermitValidator() {
    return (
        <div className="container">
            <div className="project-container">
            <img src={DesktopFiller} alt={"Desktop Filler"} className="desktop_image"></img>
                <div className="project-description">
                    <h4>Projects</h4>
                    <h1>iPARQ Permit Validator</h1>
                    <a href="https://github.com/nlpulido/dps-lost-and-found">Github Repo</a>
                    <p>
                        The DPS Lost & Found project serves to be a possible revamp of the University
                        of San Francisco Public Safety Department's current lost and found system. As the
                        front desk lead at the position, I oversaw different areas where student assistants struggled
                        to maintain & the lost and found was one area. I built a progressive web app using <span>React.JS</span> &
                        <span> Google Firestore</span> in order to provide a place for students who don't work at Public Safety to 
                        submit tickets without having to visit the front desk. Given the current strict COVID-19 guidelines, another area
                        of motivation was to decrease the amount of in person visits to the front desk.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PermitValidator;