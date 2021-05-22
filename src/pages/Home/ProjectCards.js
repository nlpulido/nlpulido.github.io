import { React } from "react";
import "./ProjectCards.css";
import OutlinedCard from '../../components/OutlinedCard';

const projects = [
    {
        title: "Shadow Thief",
        language: "Python + Selenium", 
        description: "An automated add to cart service",
        route: "/projects/shadow-thief",
        image: "add_circle",
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
    },
    {
        title: "iPARQ Permit Validator",
        language: "Python + Selenium", 
        description: "Automated validation of parking permit creation",
        route: "/projects/permit-validator",
        image: "star",
    },
];

export default function ProjectCards() {
    return (
        <ul className="carousel">
            {projects.map((project, index) => {
                return (
                    <li className={"li-" + index}>
                        <OutlinedCard project={project} />
                    </li>
                );
            })}

            {/* <li>
                <OutlinedCard
                    className="project-2"
                    project={{
                        title: "Oasis Mobile",
                        language: "React Native + Expo", 
                        description: "Wellness in the comfort of your pocket",
                        route: "/projects/oasis",
                        image: "https://i.imgur.com/K9uROaF.png",
                    }}
                />
            </li> */}
        </ul>
    )
};