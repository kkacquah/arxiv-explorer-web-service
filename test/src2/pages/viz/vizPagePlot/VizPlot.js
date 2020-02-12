import React from 'react';
import {
  Line
} from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  defaults
} from 'react-chartjs-2';
import
plotOptions
from '../../../utils/plotOptions'

defaults.global.defaultFontFamily = "Muli";


const useStyles = makeStyles(theme => ({
  prompt: {
    flexGrow: 1,
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 40,
    textAlign: "center",
    color: "#a4a4a4"
  },
  promptContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}));



export default function VizPlot(props)  {
  const classes = useStyles();
  return (props.labels.length === 0 ?
    <div className={classes.promptContainer}>
    <Typography color="textSecondary" className={classes.prompt}>
    Add a topic to explore its interest.
  </Typography>
</div> :
    <Line data={props.data} options={plotOptions.getPlotOptions(props.type)} />);
}
