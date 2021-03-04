import React, { Component } from "react";
import headshot from './headshot_bubble.png'
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="intro">
                    <div className="text-box">
                        <p>
                            <span className="title-text">Hi there! </span>
                            <br></br>
                            My name is Neil and I love to build things.
                            <br></br>
                            I'm currently pursuing a bachelor's desgree in Computer
                            Science at the University of San Francisco.
                        </p>
                    </div>
                    <img src={headshot} alt="headshot"></img>
                </div>
                <div className="about-me">
                    <div className="about-me-column">
                        <h1 className="section-text">Personal Interests</h1>
                        <ul>
                            <li>
                                Photography: I've always loved taking pictures of everything around me.
                                I also ran my own freelance photography business up until 2019. Film
                                is my latest venture into this hobby and I'm loving it so far.
                            </li>
                            <li>
                                Keyboards: I've started to take an interest in building custom mechanical keyboards.
                                I've always had a soft spot for niche hobbies with specific followings. There's something
                                special about being able to customize the sound profile, typing feel, and aesthetics of a keyboard.
                            </li>
                            <li>
                                Archival Fashion: Since High School, I've been collecting different pieces of archival fashion
                                as a part of my wardrobe. Many vintage pieces of clothing served as stepping stones for popular fashion
                                trends today. Owning and wearing vintage clothing is special in the sense that it takes you back in time.
                            </li>
                        </ul>
                    </div>
                    <div className="about-me-column">
                        <h1 className="section-text">Recent Projects</h1>
                        <ul>
                            <li>
                                Shadow Thief: An automated "Add-To-Cart" application which utilizes <span className="keyword">Selenium</span> and
                                <span className="keyword"> Python</span> to crawl Shopify sites and checkout products for the user with a priority on speed.
                            </li>
                            <li>
                                Katchup: A Google Chrome extension built with <span className="keyword">Javascript</span> with aim to provide a tomato timer
                                useful for studying.
                            </li>
                            <li>
                                Java Search Engine: A classic implementation of a search engine built with <span className="keyword">Java</span>.
                                I utilized <span className="keyword">Apache</span> to debug the program when implementing worker threads. I also
                                utilized <span classname="keyword">Bulma</span> for a front end and <span className="keyword">Jetty</span> to provide Servlets to launch it on a local host.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}