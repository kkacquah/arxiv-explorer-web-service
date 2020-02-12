import React from 'react';
import OntologyAppBar from '../../components/OntologyAppBar'
import HomeVisualizerPreview from './HomeVisualizerPreview'
import LandingPageQueryField from './LandingPageQueryField'
import {
  makeStyles
} from '@material-ui/core/styles';
import OntologyErrorSnackbar from '../../components/OntologyErrorSnackbar'
import OntologyFeedbackForm from '../../components/OntologyFeedbackForm'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minWidth: 1200
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: 1200
  },
  homeVisualizerPreviewContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
}));


export default function HomePage(props) {
  const classes = useStyles();
  const [snackbarOpen, toggleSnackbar] = React.useState(false);
  const [feedbackFormOpen, setFeedbackFormOpen] = React.useState(false);
  const onError = (error) => {
    console.log(error);
    toggleSnackbar(true);
  }
  const onErrorClose = (error) => {

    toggleSnackbar(false)
  };

  const onOpenFeedback = () => setFeedbackFormOpen(true)
  const onCloseFeedback = () => setFeedbackFormOpen(false)

  return (
    <div className={classes.root}>
          <OntologyAppBar
            onOpenFeedback={onOpenFeedback}

          />
          <div className={classes.body}>
          <div className={classes.mainContainer}>
          <div className={classes.homeVisualizerPreviewContainer}>
          <HomeVisualizerPreview />
          </div>
          <div className={classes.homeVisualizerPreviewContainer}>
<LandingPageQueryField onError={onError} />
          </div>
          </div>
          </div>
          <OntologyErrorSnackbar open={snackbarOpen} onClose={onErrorClose}/>
<OntologyFeedbackForm
  onError={onError}
  onCloseFeedback={onCloseFeedback} visible={feedbackFormOpen}/>
          </div>
  );
}