import { React } from "react";
import "./Contact.css";

function Contact() {
    return(
        <div className="container">
            <div className="contact-container">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-description">
                    <p>
                        If you want to collaborate on a project, or just enjoy a cup 
                        of coffee together you can always reach me through my socials 
                        or through the contact form below. I will try to get back to you 
                        as soon as possible!
                    </p>
                </div>
                <div className="contact-name-form">
                    <form className="contact-form">
                        <h3>Name *</h3>
                        <div className="name-form">
                            <input type="text" id="fname" name="fname"/>
                            <label for="fname">First Name</label>
                        </div>
                        <div className="name-form">
                            <input type="text" id="lname" name="lname"/>
                            <label for="lname">Last Name</label>
                        </div>
                        <h3>Email *</h3>
                        <div className="email-form">
                            <input type="text" id="email" name="email"/>
                        </div>
                        <h3>Subject *</h3>
                        <div className="subject-form">
                            <input type="text" id="subject" name="subject"/>
                        </div>
                        <h3>Message *</h3>
                        <div className="message-form">
                            <input type="text" id="message" name="message"/>
                        </div>
                        <button className="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;