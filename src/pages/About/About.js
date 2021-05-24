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
                    <p>
                        Hi there! My name's Neil & I just recently graduated from the University of San Francisco 
                        with a major in Computer Science. Front-end / Web Development 
                        is my forte but I always love to learn more about other areas. When I'm not coding, I'm usually
                        taking pictures with my film camera or tinkering with mechanical keyboards. Feel free to visit the links
                        below to get a better insight into my hobbies!
                    </p>
                    <div className="hot-links">
                        <h3>Mechanical Keyboards</h3>
                        <h3>Photography</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;