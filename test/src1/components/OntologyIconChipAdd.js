import React from 'react';
import Box from '@material-ui/core/Box';
import OntologyIconChip from './OntologyIconChip';
import {
  IconButton
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';
import AutosizeInput from 'react-input-autosize';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  chip: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d8d8d8',
    borderWidth: 1,

  },
  chipContainer: {
    marginRight: 4,
    marginTop: 2,
    marginBottom: 2,
  },

  iconButton: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 8,
    marginLeft: 2,
    paddingRight: 8,
  },
  addIcon: {
    color: "#d8d8d8",
    fontSize: 16,
  },

  text: {
    outline: 'none',
    fontFamily: "Muli",
    fontWeight: 600,
    fontSize: 16,
    minWidth: 10,
    color: "#d8d8d8",
    paddingBottom: 1.5,
    verticalAlign: "middle",
    border: '0 !important',
    '&:click': {
      border: '0 !important'
    }
  }
}));



const OntologyIconChipAdd = props => {
  const classes = useStyles();
  const [innerText, setInnerText] = React.useState("Add Topic");
  const [focused, setFocused] = React.useState(false);

  function useOutsideBlur(ref, onBlur) {
    function handleClickOutside(event) {
      if (focused && ref.current && !ref.current.contains(event.target)) {
        onBlur();
      }
    }

    React.useEffect(() => {
      // Bind the event listener
      document.addEventListener("mouseup", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mouseup", handleClickOutside);
      };
    });
  }

  const handleChange = evt => {
    setInnerText(evt.target.value);
  };

  const onFocus = evt => {
    if (!focused) {
      setInnerText("");
      setFocused(true);
    }
  };

  const onBlur = () => {
    setFocused(false);
  };

  const onPressAdd = () => {
    props.onAddLegendItem(innerText);
  };

  const chipRef = React.useRef(null);
  useOutsideBlur(chipRef, onBlur);



  //If text is specified, return an ontology chip component
  //Other wise prompt a chip addition.
  return (<div
    ref={chipRef}
    className={classes.chipContainer}

    >{
    props.text ? <OntologyIconChip onPressClose={props.onRemoveLegendItem} color={props.color} text={props.text}/> :
<Box
     className={classes.chip}
     size= 'large'
     border={1}
     onClick={onFocus}
   >
       <AutosizeInput
            value={focused ? innerText : "Add Topic"}
             inputClassName={classes.text}
             onChange={handleChange} // handle innerHTML change

           />
     <IconButton
     className={classes.iconButton}
     onClick={onPressAdd}
     children={<Typography className={classes.text}>+</Typography>}
     />

   </Box>}</div>);
};

export default OntologyIconChipAdd