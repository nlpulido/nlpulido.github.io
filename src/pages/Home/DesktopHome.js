import React from "react";
import headshot from './headshot_bubble.png';
import OutlinedCard from '../../components/OutlinedCard';
import "./Home.css";

function DesktopHome() {
    const projects = [
        {
            title: "Oasis Mobile", 
            description: "blah"
        },
        {
            title: "DPS Lost & Found", 
            description: "blah"
        },
        {
            title: "Shadow Thief", 
            description: "blah"
        },
        {
            title: "iPARQ Permit Validator", 
            description: "blah"
        },
    ]


    return (
        <div className="landscapeContainer">
            <div className="eyeCatcherLandscape">
                <div className="eyeCatcherTextLandscape">
                    <h1>Hi there!</h1>
                    <h1>My name is Neil.</h1>
                    <h2>I'm a software engineer based in the Bay Area.</h2>
                    <h2>Let's make something great.</h2>
                </div>
                <img src={headshot} alt="headshot"></img>
            </div>
            <div className="projects">
                <header>
                    <h3>Latest Projects</h3>
                </header>
                <ul className="carousel">
                    {projects.map((project) => {
                        return (
                            <li>
                                <OutlinedCard title={project.title} description={project.description}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default DesktopHome;