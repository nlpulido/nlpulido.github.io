import { React } from "react";
import graduation_headshot from "./graduation_headshot.jpg";
import keyboard_image from "./keyboard_image.jpg";
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
                        taking pictures with my film camera or tinkering with mechanical keyboards. Feel free to read 
                        through the sections below to get a better insight into my hobbies!
                    </p>
                </div>
            </div>
            <div className="contents">
                <div className="description">
                    <h4>Read About My Hobbies</h4>
                    <h1>Mechanical Keyboards</h1>
                    <p>
                        Building & Collecting Mechanical Keyboards is my latest <span className="strikethrough">money-sink</span> hobby! 
                        I picked it up at the start of our quarantine & I've been having tons of fun with it. There's so many different 
                        reasons to customize a keyboard: sound, feel, or aesthetics. Different keyboards have special mounting methods which
                        can ultimately change the feeling of typing on the keyboard. You also can't forget the Cherry MX style switches. Different
                        materials on switches can cause an endless amount of combinations for sound & feel. Here are a couple of my favorite keyboards.
                    </p>
                </div>
                <div>
                    <img src={keyboard_image} alt={"Neil's Keyboards"} className="horizontal_image"></img>
                    <h3>Kei SE (silver) & Keycult No. 2/65 (black)</h3>
                </div>

            </div>
        </div>
    )
}

export default About;