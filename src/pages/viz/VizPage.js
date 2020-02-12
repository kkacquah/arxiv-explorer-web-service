import React, {
  useState
} from 'react';
import OntologyAppBar from '../../components/OntologyAppBar'
import OntologyErrorSnackBar from '../../components/OntologyErrorSnackbar'
import VizOptionsView from './VizOptionsView'
import VizPlotContainer from './vizPagePlot/VizPlotContainer'
import {
  Drawer
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';
import
plotOptions
from '../../utils/plotOptions'
import {
  getDatapoints
} from '../../services/datapoints'
import {
  getColor,
  difference,
  ListParam
} from '../../utils/lists'
import {
  NumberParam,
  useQueryParams
} from 'use-query-params';
import OntologyFeedbackForm from '../../components/OntologyFeedbackForm'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 1200,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  drawer: {
    color: "#ffffff"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 1200
  },
  paper: {
    background: 'white',
  }
}));


export default function VizPage(props) {
  //forceUpdate react hook
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  //get initial state from routing
  const [labels, setLabels] = React.useState(new Map());
  const classes = useStyles();
  const [drawerState, toggleDrawerState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //HANDLE ERROR SNACKBAR
  const [snackbarOpen, toggleSnackbar] = React.useState(false);
  const [feedbackFormOpen, setFeedbackFormOpen] = React.useState(false);

  const onError = (error) => {
    toggleSnackbar(true);
  }
  const onErrorClose = () => {
    //clean up query params
    query.labelKeys = [...labels.keys()];
    setQuery(query);
    toggleSnackbar(false);
  }

  const onOpenFeedback = () => setFeedbackFormOpen(true);
  const onCloseFeedback = () => setFeedbackFormOpen(false);

  const [query, setQuery] = useQueryParams({
    categoryIndex: NumberParam,
    rangeIndex: NumberParam,
    typeIndex: NumberParam,
    labelKeys: ListParam,
  });
  //HELPERS
  //get labelkeys for a list
  function loadDatapoints(_query) {
    const labelKeys = _query.labelKeys;
    const psVals = plotOptions.getPlotStateValues(_query);
    const onGetDatapointsSuccess = (response) => {
      Object.keys(response.data.pointArray).map(labelName =>
        addKey(labelName, {
            color: getColor(labelName), //get old color for labelName
            pointArray: response.data.pointArray[labelName] //get new pointarray from response
          },
          _query
        ));
      setIsLoading(false);
    }

    getDatapoints(labelKeys, psVals,
      onGetDatapointsSuccess,
      onError);

  }
  //check if there are any items in the query that are not in labelKeys
  let newLabels = difference(query.labelKeys, [...labels.keys()]);
  //If there are new labels to add and the state is not loading
  //If query is not correctly defined, set it with all indicies = 0
  console.log("query");
  console.log(query);
  var validation = plotOptions.PLOT_OPTIONS_SCHEMA.validate(query);
  if (validation.error) {
    setQuery({
      categoryIndex: 0,
      rangeIndex: 0,
      typeIndex: 0,
      labelKeys: []
    });
    forceUpdate();
  }
  if (newLabels.length !== 0 && !isLoading) {
    if (!isLoading) setIsLoading(true);
    //call load datapoints
    loadDatapoints(query);
  }
  var plotStateValues = plotOptions.getPlotStateValues(query);

  const addKey = (k, v, _query) => {
    const newMap = new Map(labels.set(k, v));
    _query.labelKeys = [...newMap.keys()];
    setLabels(newMap);
    setQuery(_query);
  }

  const deleteKey = (k) => {
    labels.delete(k)
    const newLabels = new Map(labels)
    setLabels(newLabels);
    query.labelKeys = [...newLabels.keys()]
    setQuery(query);
  }


  //add label
  function onAddLabel(labelName) {
    const onGetDatapointsSuccess = (response) => {
      addKey(labelName, {
          color: getColor(labelName),
          pointArray: response.data.pointArray[labelName]
        },
        query);
      setIsLoading(false);
    };
    setIsLoading(true);
    console.log("plotStateValues");
    console.log(plotStateValues);
    console.log("labelName");
    console.log(labelName);
    getDatapoints(labelName, plotStateValues,
      onGetDatapointsSuccess,
      onError);

  }

  //get a new dataset for every label
  function onSelect(key, index) {
    //map point array keys to values
    query[key] = index;
    //if the change was in the type, we dont need to reload
    //datapoints, just rerender the state
    if (key === "type") {
      forceUpdate();
    } else {
      loadDatapoints(query);
    }
  }


  //remove label
  function onRemoveLabel(labelName) {
    deleteKey(labelName);
  }

  return (<div className={classes.root}>

          <OntologyAppBar onOpenFeedback={onOpenFeedback} menu={true} onMenuPress={() => toggleDrawerState(true)}/>
          <div className={classes.body} id="plot">
            <VizPlotContainer
              isLoading={isLoading}
              onError={onError} onAddLabel={onAddLabel}
              type = {plotStateValues.type}
              onRemoveLabel={onRemoveLabel} labels={labels}/>

          </div>
          <Drawer classes={{ paper: classes.paper }} anchor="left" open={drawerState} className={classes.drawer} onClose={() => toggleDrawerState(false)}>
          <VizOptionsView
            labels={query.labelKeys}
            onError={onError}
            rangeIndex={query.rangeIndex}
            typeIndex={query.typeIndex}
            categoryIndex={query.categoryIndex}
             onSelect={onSelect} onError={onError} />
      </Drawer>

      <OntologyErrorSnackBar open={snackbarOpen} onClose={onErrorClose}/>
      <OntologyFeedbackForm
        onError={onError}
        onCloseFeedback={onCloseFeedback}
        visible={feedbackFormOpen}/>
      </div>);
}