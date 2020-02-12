    import React from 'react';
    import Typography from '@material-ui/core/Typography';
    import VisualizerLegend from './Legend'
    import {
      convertResponseMapToDataset
    } from '../../../utils/timeSeries'
    import {
      makeStyles
    } from '@material-ui/core/styles';
    import OntologyLoader from '../../../components/OntologyLoader'
    import VizPlot from './VizPlot'


    const useStyles = makeStyles(theme => ({
      plotContainer: {
        padding: 50,
        display: "flex",
        flexDirection: "column",
        minHeight: "500px",
        height: "70vh",
        backgroundColor: "#ffffff"
      },
      title: {
        flexGrow: 1,
        fontFamily: "Muli",
        fontWeight: 700,
        fontSize: 32,
        color: theme.textColor
      },
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
      },
      plotHeader: {
        marginLeft: 36
      },
      plotLegend: {
        display: "flex",
        flexWrap: "wrap"
      }
    }));



    export default function VisualizerPlotContainer(props) {
      const classes = useStyles();
      const labels = [...props.labels.keys()];
      const data = {
        datasets: convertResponseMapToDataset(props.labels)
      };



      return (
        <div className={classes.plotContainer} >
          <div className={classes.plotHeader}>
          <Typography color="textSecondary" className={classes.title}>
            Interest Over Time
          </Typography>
          <VisualizerLegend

             onRemoveLabel = {props.onRemoveLabel}
             onAddLabel = {props.onAddLabel}
              labels={props.labels}/>
          </div>
          { props.isLoading?

             /* Show loading animation if get datapoints call
            is loading
            */
             //[...props.labels.keys()].length === 0 ?
            <OntologyLoader/>
            :
          <VizPlot data={data} type={props.type} labels={labels}/>}


              </div>
      );
    }