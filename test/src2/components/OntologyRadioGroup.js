import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
  },
  radio: {
    color: "#A4A4A4"
  },
  label: {
    color: "#A4A4A4"
  }
}));

export default function OntologyRadioGroup(props) {
  const classes = useStyles();

  const handleChange = event => {
    props.onSelectFeedbackType(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup className={classes.radioGroup} aria-label="feedback-type" name="feedback-type" value={props.feedbackType} onChange={handleChange}>
          <FormControlLabel classes={{label:classes.label}} value="Bugs" control={<Radio className={classes.radio}/>} label="Bug" />
          <FormControlLabel classes={{label:classes.label}} value="Suggestions" control={<Radio className={classes.radio}/>} label="Suggestion" />
          <FormControlLabel classes={{label:classes.label}} value="Kudos" control={<Radio className={classes.radio}/>} label="Kudos" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}