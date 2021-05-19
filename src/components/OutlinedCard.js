import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
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
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <h1>{props.project.title}</h1>
        <h3 className={classes.language}>{props.project.language}</h3>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}