import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  TextField
} from '@material-ui/core';
import OntologyButton from '../../components/OntologyButton'
import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 36,
  },
  subtitle: {
    fontFamily: "Muli",
    fontSize: 18,
    color: "#737B7D"
  },
  textField: {
    display: "flex",
    padding: 5,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    flex: 4,
    zIndex: 0
  },
  queryInputContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: 'row'
  },
  searchButton: {
    color: theme.primary,
    flex: 1,
    marginLeft: theme.spacing(1),
    textPrimary: true
  },
  searchButtonText: {
    fontFamily: "Muli",
    fontWeight: 700,
    fontSize: 16,
    color: "#fff"
  },
  input: {
    color: '#373F41'
  },
  root: {
    width: 500,

  },
}));

export default function LandingPageQueryField(props) {
  const classes = useStyles();
  const history = useHistory();

  const [phrase, setPhrase] = React.useState("");
  const setInputValue = (event) => {
    setPhrase(event.target.value);
  }
  const onPressSearch = () => {
    //set initialization flag
    history.push(`/viz?rangeIndex=0&typeIndex=0&categoryIndex=0&labelKeys=${phrase}`);

  }

  return (
    <div className={classes.root}>
    <Typography className={classes.title}>
      Explore new discoveries happening  around the world.
    </Typography>
    <Typography className={classes.subtitle}>
      Generate interactive visualizations of the trending topics in scientific research.
    </Typography>
    <div className={classes.queryInputContainer}>
    <TextField onChange={setInputValue} className={classes.textField} InputProps={{className: classes.input,disableUnderline: true}}/>
    <OntologyButton
       buttonText={"Search"}
       color={"#3C64B1"}
       onPress={onPressSearch}
       marginLeft={8}
        />
    </div>
    </div>
  );
}
