import React from 'react';
import OntologyTitle from './OntologyTitle';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  appBar:{
    background:theme.secondary,
  },
  socialItem:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:"#ffffff"
  },
  menuIcon:{
    color:"#373F41",
    fontSize:24,
  },
  menuItem:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:theme.secondary
  },
  hamburgerButtonContainer: {
    flexGrow: 1,
    justifyContent: 'start',
    paddingLeft: theme.spacing(1),
  },
  socialButton:{
    borderRadius:4,
    backgroundColor:"#55ACEE",
    marginRight: theme.spacing(1),
    '&:hover': {
            backgroundColor: '#657786',
        }
  },
  title: {
    flexGrow: 1,
    fontFamily:"Lato",
    fontWeight:700,
    fontSize:24,
    color:theme.textColor
  },
  toolbar:{
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function OntologyAppBar(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar  className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
        {props.menu ?
          <div className={classes.hamburgerButtonContainer}>

          <IconButton
          onClick={props.onMenuPress}
          children={<MenuIcon  className={classes.menuIcon}/>}
          />
          </div>
          :
          <OntologyTitle/>}
          <div>
          <Button
             variant="contained"
             color="default"
             className={classes.socialButton}
             startIcon={<FontAwesomeIcon color="#ffffff" icon={faTwitter} />}
           >
             <Typography color="textSecondary" className={classes.socialItem}>Follow</Typography>
           </Button>
           <Button onClick={props.onOpenFeedback}><Typography color="textSecondary" className={classes.menuItem}>Feedback</Typography></Button>
          <Button ><Typography color="textSecondary" className={classes.menuItem}>About</Typography></Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
