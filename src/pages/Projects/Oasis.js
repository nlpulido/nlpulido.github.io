import { React } from "react";
import iPhone from "./iphone_transparent.webp";
import "./Projects.scss";

function Oasis() {
    return (
        <div className="container">
            <div className="project-container">
                <img src={iPhone} alt={"iPhone Filler"} className="header_image"></img>
                <div className="project-description">
                    <h4>Projects</h4>
                    <h1>Oasis Mobile</h1>
                    <h3>Won “Best Team” / “Student Choice” Award</h3>
                    <p>
                        Oasis Mobile is a mobile application designed to engage users in 
                        wellness practice. It allows users to pursue their journey towards 
                        a healthier lifestyle through its menu of personalized mindfulness 
                        exercises and programs. For the project, I led a team of CS students
                        & business students in designing a UI with <span>Figma</span>, developing the front
                        end using <span>React Native & Expo</span>, and creating the backend services using 
                        <span> Express.JS, Node.JS, & Axiom.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Oasis;