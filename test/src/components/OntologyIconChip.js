import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  IconButton
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  chip: {

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeIcon: {
    color: "#ffffff",
    fontSize: 16,
  },
  iconButton: {
    paddingTop: 1,
    paddingBottom: 1,
    marginBottom: 1,
    marginTop: 1,
    paddingLeft: 8,
    marginLeft: 2,
    paddingRight: 8,
  },
  text: {
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 16,
    paddingBottom: 1.5,
    verticalAlign: "middle",
    color: "#ffffff"
  }
}));

export default function OntologyIconChip(props) {
  const classes = useStyles();

  return (
    <Box
     className={classes.chip}
     size= 'large'
     style= {{backgroundColor: props.color}}
   >

     <Typography className={classes.text}>{props.text}</Typography>
     <IconButton
     className={classes.iconButton}
     onClick={props.onPressClose}
     children={<Typography className={classes.text}>×</Typography>}
     />

   </Box>);
}