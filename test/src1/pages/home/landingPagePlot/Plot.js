import React from 'react';
import { Line } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import VisualizerLegend from './Legend'
import  plotOptions  from './options'
import  landingPageData from './data'
import { makeStyles } from '@material-ui/core/styles';
import { defaults } from 'react-chartjs-2';


defaults.global.defaultFontFamily = "Muli";

const useStyles = makeStyles(theme => ({
  plotContainer:{
    background:"#ffffff",
    padding:25,
    width: 520,
  },
  title: {
    flexGrow: 1,
    fontFamily:"Muli",
    fontWeight:700,
    fontSize:16,
    color:theme.textColor
  },
  plotHeader:{
    marginLeft:36
  },
  plotLegend:{
    zIndex:0,
  }
}));
export default function VisualizerPlot() {
  const classes = useStyles();
  return (
      <div className={classes.plotContainer}>
      <div className={classes.plotHeader}>
      <Typography color="textSecondary" className={classes.title}>
        Neural networks take over other machine-learning methods
      </Typography>
      <VisualizerLegend className={classes.plotLegend} data={landingPageData.datasets}/>
      </div>
          <Line data={landingPageData} options={plotOptions} />
          </div>
      );
    }
