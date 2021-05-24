import { React } from "react";
import graduation_headshot from "./graduation_headshot.jpg";
import history from "../../History";
import "./About.css";

function About() {

    return(
        <div className="container">
            <div className="contents">
                <img src={graduation_headshot} alt={"Neil's Graduation Headshot"} className="header_image"></img>
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
                        <button 
                            className="hobbyLink"
                            title="Mechanical Keyboards"
                            onClick={() => history.push("/keyboards")}
                        >
                            <h2>Mechanical Keyboards</h2>
                        </button>
                        <button 
                            className="hobbyLink"
                            title="Photography"
                            onClick={() => history.push("/photography")}
                        >
                            <h2>Photography</h2>
                        </button>
                        <button 
                            className="hobbyLink"
                            title="Fashion"
                            onClick={() => history.push("/fashion")}
                        >
                            <h2>Fashion</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;