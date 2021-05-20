import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card, 
  CardActions, 
  CardContent,
  Button,
  Modal 
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleModalClick() {
    setOpen(!open);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined" backgroundColor="theme.palette.secondary">
        <CardContent>
          <h1>{props.project.title}</h1>
          <h3 className={classes.language}>{props.project.language}</h3>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => handleModalClick()}>Learn More</Button>
        </CardActions>
      </Card>

      <Modal
        open={open}
      >
        <p>{props.project.description}</p>
      </Modal>
    </div>
  );
}