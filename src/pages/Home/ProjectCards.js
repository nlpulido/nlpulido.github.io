import { React } from "react";
import "./ProjectCards.scss";
import OutlinedCard from '../../components/OutlinedCard';

const projects = [
    {
        title: "iPARQ Permit Validator",
        language: "Python + Selenium", 
        description: "Automated validation of parking permit creation",
        route: "/projects/permit-validator",
        image: "star",
        github: "https://github.com/nlpulido/iparq-automation-testing"
    },
    {
        title: "Oasis Mobile",
        language: "React Native + Expo", 
        description: "Wellness in the comfort of your pocket",
        route: "/projects/oasis",
        image: "https://i.imgur.com/K9uROaF.png",
    },
    {
        title: "DPS Lost & Found",
        language: "React.JS", 
        description: "A Web App for USF's Public Safety",
        route: "/projects/lost-and-found",
        image: "../../components/icons/github-mark-white.png",
        github: "https://github.com/nlpulido/dps-lost-and-found"
    },
    {
        title: "Shadow Thief",
        language: "Python + Selenium", 
        description: "An automated add to cart service",
        route: "/projects/shadow-thief",
        image: "add_circle",
    },
];

export default function ProjectCards() {
    return (
        <ul className="carousel">
            {projects.map((project, index) => {
                return (
                    <li className={"li-" + index} key={index}>
                        <OutlinedCard project={project} />
                    </li>
                );
            })}
        </ul>
    )
};