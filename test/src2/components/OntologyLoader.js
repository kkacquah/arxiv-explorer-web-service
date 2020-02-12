import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import {
  makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  plotContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    height: "70vh",
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#ffffff"
  }
}));

export default function OntologyLoader() {
  const classes = useStyles();

  return (
    <div
    className={classes.plotContainer}
    >
    <BarLoader
     loaded={false}
     height={10}
     width={200}
      //size={"150px"} this also works
      color={"#3C64B1"}
     loading={true}
     className="bar" />
     </div>
  );
}
