import { React } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: 15,
      fontFamily: 'Fira Sans',
      backgroundColor: "red"
    },
}));

function RightHandColumn() {
    // inline styling sheet
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Test</h1>
        </div>
    )
}

export default RightHandColumn;