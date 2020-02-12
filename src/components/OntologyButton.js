import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    color: theme.primary,
    flex: 1,
    textPrimary: true
  },
  buttonText: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 16,
    color: "#fff"
  },
}));

export default function OntologyAppBar(props) {
  const classes = useStyles();

  return (
    <Button
       variant="contained"
       style={{backgroundColor:props.color, marginLeft: props.marginLeft
       , marginTop: props.marginTop}}
       className={classes.button}
       onClick = {props.onPress}
        >
       <Typography className={classes.buttonText}>{props.buttonText}</Typography>
     </Button>
  );
}