import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily:"Lato",
    fontWeight:700,
    fontSize:24,
    lineHeight:1,
    color:"#3C64B1",
  },
  titleAlternate: {
    color:"#737B7D",
  },
  titleContainer:{
    margin:20,
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection:"row",
  }
}));

export default function OntologyTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
    <Typography color="textSecondary" style={{fontSize:props.fontSize}} className={`${classes.title} ${classes.titleAlternate}`}>
    RESEARCH
    </Typography>
    <Typography color="textPrimary" style={{fontSize:props.fontSize}} className={classes.title}>
    TRENDS
    </Typography>
    </div>
  );
}
