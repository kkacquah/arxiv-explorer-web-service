import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rodal from 'rodal';
import OntologyButton from './OntologyButton';
import OntologyRadioGroup from './OntologyRadioGroup';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  TextField
} from '@material-ui/core';
import {
  createRecord
} from '../services/records'
// include styles
import './css/OntologyFeedbackForm.css';


const useStyles = makeStyles(theme => ({
  feedbackButtonText: {
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 14,
    color: theme.secondary
  },
  textField: {
    height: 200,
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    backgroundColor: '#F2F5F5',
  },
  titleText: {
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 24,
    margin: 4,
    color: theme.secondary
  },
  subtitleText: {
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 16,
    margin: 4,
    color: "#a4a4a4"
  },
  feedbackFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  feedbackFormHeader: {
    display: 'flex',
    flexDirection: 'column'
  },
  ontologyButtonContainer: {
    width: 250,
    display: 'flex',
  },
  rodal: {
    height: "100vh",
    width: "100vw",
  },
}));

export default function OntologyFeedbackForm(props) {

  const classes = useStyles();

  const [feedbackType, setFeedbackType] = React.useState("Bugs");
  const [description, setDescription] = React.useState('');

  const onSelectFeedbackType = (feedbackType) => setFeedbackType(feedbackType);

  const onPressSendFeedback = () => {
    console.log("onPressSendFeedback");
    createRecord(description, feedbackType, props.onError);
    //reset description and bugs.
    setDescription("");
    setFeedbackType("Bugs");
    props.onCloseFeedback();
  };

  const handleChange = event => {
    setDescription(event.target.value);
  };

  return (
    <div className={classes.rodalContainer}>
      <Rodal
        className={classes.rodal}
        visible={props.visible}
        closeOnEsc
        width={450}
        height={500}
        animation={'slideUp'}
        onClose={props.onCloseFeedback}>
        <div className={classes.feedbackFormContainer}>
        <div className={classes.feedbackFormHeader}>
        <Typography className={classes.titleText}>
          Send us your feedback!
        </Typography>
        <Typography className={classes.subtitleText}>
          Feel free to report bugs, give suggestions, or just say thanks!
        </Typography>
      </div>
      <TextField
        placeholder={"Describe your experience..."}
        multiline
        className={classes.textField}
        InputProps={{className: classes.input,disableUnderline: true}}
        value={description}
        onChange={handleChange}
      />
        <OntologyRadioGroup
          feedbackType={feedbackType}
          onSelectFeedbackType={onSelectFeedbackType}
        />
        <div className={classes.ontologyButtonContainer}>
          <OntologyButton
            onPress={onPressSendFeedback}
            marginTop={20}
            color={'#3C64B1'}
            buttonText={"Send Feedback"}/>
      </div>
      </div>
            </Rodal>
            </div>
  );
}