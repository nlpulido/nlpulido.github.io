import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, 
  Card, 
  CardActions, 
  CardContent
} from '@material-ui/core';
import history from "../History";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
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
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  link: {
    color: "#a9c4c0"
  }
}));

export default function OutlinedCard(props) {
  // inline styling sheet
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined" backgroundColor="theme.palette.secondary">
        <CardContent>
          <h1>{props.project.title}</h1>
          <p>{props.project.description}</p>
          <h3 className={classes.language}>{props.project.language}</h3>
          {/* {props.project.github ? <h3><a href={props.project.github} className={classes.link}>Github Repo</a></h3> : <></>} */}
        </CardContent>
        {/* <CardMedia
          component="img"
          alt="project image"
          height="175"
          image={props.project.image}
        /> */}
        <CardActions>
          <Button size="small" color="primary" onClick={() => history.push(props.project.route)}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}