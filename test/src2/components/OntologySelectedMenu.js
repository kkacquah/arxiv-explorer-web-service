import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom:10,

    padding:0
  },
  paper:{
    backgroundColor: 'transparent',
    borderRadius: 0,
  },
  menu: {
    margin:0,
    border: '1px solid #d8d8d8',
    backgroundColor:'#F4F5F4',
    overflowY:'hidden'
  },
  listItem: {
    padding:10,
    height:"32px",
    margin:0,
  },
  text:{
    fontFamily:"Muli",
    fontWeight:600,
    fontSize:14,
    color:theme.textColor
  },
  hint:{
    fontFamily:"Muli",
    fontSize:11,
    color:"#a4a4a4"
  },
  list:{
    width:200,
    padding:0,
    backgroundColor: "#F4F5F4",
    height:"30px",
    margin:0
  }
}));


export default function OntologySelectedMenu(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(props.index);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event, index) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, index) => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    props.onSelect(index);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    <Typography className={classes.hint}>
      {props.hintText}
    </Typography>
      <List component="nav" aria-label="Device settings" className={classes.list}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          className={classes.listItem}
        >
          <ListItemText>
          <div className={classes.textContainer}>
          <Typography className={classes.text}>
          {props.options[selectedIndex]}
          </Typography>
          </div>
          </ListItemText>
          <ExpandMoreIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        color='transparent'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PopoverClasses={{ paper: classes.paper }}
      >
      <div className={classes.menu}>
        {props.options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option}

          </MenuItem>
        ))}
        </div>
      </Menu>
    </div>
  );
}
