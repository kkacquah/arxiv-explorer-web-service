import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import OntologyTitle from '../../components/OntologyTitle'
import OntologySelectedMenu from '../../components/OntologySelectedMenu'
import OntologyButton from '../../components/OntologyButton'
import
plotOptions
from '../../utils/plotOptions';
import html2canvas from 'html2canvas';

const useStyles = makeStyles(theme => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: 25,
    width: 250
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  title: {
    flexGrow: 1,
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 10,
    color: "#3C64B1"
  },

}));



export default function VizOptionsView(props) {
  function downloadURI(uri) {
    var link = document.createElement("a");
    link.download = props.labels.join("+") + "-ResearchTrends";
    link.href = uri;
    link.click();
  }

  function onPressSaveImage() {
    const element = document.querySelector("#plot");
    if (props.labels) {
      html2canvas(element, {
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      }).then(canvas => {
        downloadURI(canvas.toDataURL('image/png'));
      });
    } else {
      props.onError();
    }
  }
  const classes = useStyles();

  const onSelectCategory = (categoryIndex) => props.onSelect('categoryIndex', categoryIndex)
  const onSelectRange = (rangeIndex) => props.onSelect('rangeIndex', rangeIndex);
  //when stacked is selected change the state of "stacked"
  const onSelectType = (typeIndex) => props.onSelect('typeIndex', typeIndex);
  return (
    <div className={classes.body}>
    <div className={classes.header}>
    <OntologyTitle fontSize={18}/>
    <OntologySelectedMenu index={props.rangeIndex} onSelect={onSelectRange} hintText={"Range"} options={plotOptions.RANGES}/>
      <OntologySelectedMenu index={props.typeIndex} onSelect={onSelectType} hintText={"Type"} options={plotOptions.TYPES}/>
        <OntologySelectedMenu index={props.categoryIndex} onSelect={onSelectCategory} hintText={"Category"} options={plotOptions.CATEGORIES}/>
        </div>
        <div className={classes.buttons}>
        <OntologyButton color={"#3C64B1"} buttonText={"Save Image"} onPress={onPressSaveImage} marginTop={10}/>
        </div>
      </div>
  );
}