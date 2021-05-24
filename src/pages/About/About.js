import { React } from "react";
import graduation_headshot from "./graduation_headshot.jpg";
import "./About.css";

function About() {
    return(
        <div className="container">
            <div className="contents">
                <img src={graduation_headshot} alt={"Neil's Graduation Headshot"}></img>
                <div className="description">
                    <h4>Read About Me</h4>
                    <h1>About Me</h1>
                    <p>Hi there! My name's Neil & I just recently graduated from the University of San Francisco with a major in Computer Science.</p>
                </div>
            </div>
        </div>
    )
}

export default About;