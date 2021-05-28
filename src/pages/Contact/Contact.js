import { React } from "react";
import "./Contact.css";

function Contact() {
    // const [submissionComplete, setSubmissionComplete] = useState(false);
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [subject, setSubject] = useState(null);
    // const [message, setMessage] = useState(null);
    
    // if (submissionComplete) {
    //     // const data = {
    //     //     first: firstName,
    //     //     last: lastName,
    //     //     email: email,
    //     //     subject: subject,
    //     //     message: message,
    //     // }

    //     // console.log(JSON.stringify(data));

    //     return (
    //         <div className="container">
    //             <h1>Submission Complete!</h1>
    //         </div>
    //     )
    // }

    return(
        <div className="container">
            <div className="contact-container">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-description">
                    <p>
                        If you want to collaborate on a project, or just enjoy a cup 
                        of coffee together you can always reach me through my socials & I will try to get back to you 
                        as soon as possible! Have an amazing day!
                    </p>
                </div>
                {/* <div className="contact-name-form">
                    <form 
                        className="contact-form" 
                        action="mailto:neilpphoto@gmail.com"
                    >
                        <h3>Name *</h3>
                        <div className="name-form">
                            <input 
                                type="text" 
                                id="fname" 
                                name="fname"
                                onChange={(firstName) => setFirstName(firstName)}
                            />
                            <label for="fname">First Name</label>
                        </div>
                        <div className="name-form">
                            <input 
                                type="text" 
                                id="lname" 
                                name="lname"
                                onChange={(lastName) => setLastName(lastName)}
                            />
                            <label for="lname">Last Name</label>
                        </div>
                        <h3>Email *</h3>
                        <div className="email-form">
                            <input 
                                type="text" 
                                id="email" 
                                name="email"
                                onChange={(email) => setEmail(email)}
                            />
                        </div>
                        <h3>Subject *</h3>
                        <div className="subject-form">
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject"
                                onChange={(subject) => setSubject(subject)}
                            />
                        </div>
                        <h3>Message *</h3>
                        <div className="message-form">
                            <input 
                                type="text" 
                                id="message" 
                                name="message"
                                onChange={(message) => setMessage(message)}    
                            />
                        </div>
                        <button type="submit" value="submit" className="submit" onClick={() => setSubmissionComplete(true)}>SUBMIT</button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default Contact;