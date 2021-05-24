import { React } from "react";
import graduation_headshot from "./graduation_headshot.jpg";
import keyboard_image from "./keyboard_image.jpg";
import photography_image from "./photography_image.jpg";
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, 
    Card, 
    CardActions, 
    CardContent
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import "./About.css";

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      marginTop: 10,
      fontSize: 15,
      backgroundColor: '#3f4f4c',
      color: "#f2f2f2",
      fontFamily: 'Fira Sans',
    },
  
    language: {
      fontStyle: "italic"
    },
  
    cardHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
}));

function About() {
    const classes = useStyles();

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
                        <Card className={classes.root} variant="outlined" backgroundColor="theme.palette.secondary">
                            <CardContent>
                                <h2>Mechanical Keyboards</h2>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="project image"
                                height="175"
                                image={keyboard_image}
                            >
                            </CardMedia>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => alert(`Taking you to Keyboards`)}>Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.root} variant="outlined" backgroundColor="theme.palette.secondary">
                            <CardContent>
                                <h2>Photography</h2>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="project image"
                                height="175"
                                image={photography_image}
                            >
                            </CardMedia>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => alert(`Taking you to Photography`)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;