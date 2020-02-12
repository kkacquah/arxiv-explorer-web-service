import React from 'react';
import OntologyIconChipAdd from '../../../components/OntologyIconChipAdd'
import {
  getCounter
} from '../../../utils/lists'

import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  plotLegend: {
    display: "flex",
    flexWrap: "wrap"
  },
}));


export default function VisualizerLegend(props) {
  //counter for managing keys
  var increment = getCounter();

  const classes = useStyles();



  //Function for generating new add topic component
  function getLegendItem(labelName) {
    var labelColor = props.labels.get(labelName) ? props.labels.get(labelName).color : null;
    const onCloseHandler = () => props.onRemoveLabel(labelName);
    return ( < OntologyIconChipAdd text = {
        labelName
      }
      color = {
        labelColor
      }
      //Counter for setting a new key each added component
      key = {
        increment()
      }
      onRemoveLegendItem = {
        onCloseHandler
      }
      onAddLegendItem = {
        props.onAddLabel
      }
      textColor = "#d8d8d8" /
      >
    );
  }


  //Keeps list of legend items for component view


  function LegendItems() {
    const newLegendItems = [...props.labels.keys()].map(label => getLegendItem(label));
    newLegendItems.push(getLegendItem());
    return newLegendItems;
  }



  return ( <
    div className = {
      classes.plotLegend
    } >
    <
    LegendItems / >
    <
    /div>
  );
}