import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {
  makeStyles
} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#373F41",
    padding: theme.spacing(2)
  },
  errorText: {
    flexGrow: 1,
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 16,
    color: "#ffffff"
  },
  innerSnackbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  closeButton: {
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 14,
    color: "#EF3E36"
  },
}));

export default function OntologyErrorSnackBar(props) {
  const classes = useStyles();

  return (
    <Snackbar open={props.open} autoHideDuration={3000} onClose={props.onClose}>
        <Box onClose={props.onClose} className={classes.root}>
          <div className={classes.innerSnackbar}>
          <Typography className={classes.errorText}>Oops, that didn't work!</Typography>
          </div>
        </Box>
      </Snackbar>
  );
}