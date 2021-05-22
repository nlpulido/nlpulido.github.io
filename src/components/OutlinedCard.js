import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, 
  Card, 
  CardActions, 
  CardContent,
  Icon 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
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
}));

export default function OutlinedCard(props) {
  // inline styling sheet
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined" backgroundColor="theme.palette.secondary">
        <CardContent>
          <h1>{props.project.title}</h1>
          <h3 className={classes.language}>{props.project.language}</h3>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => alert(`Taking you to ${props.project.route}`)}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}