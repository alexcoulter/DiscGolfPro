import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: "95%",
    margin: "0 auto"
  },
  margin: {
    height: theme.spacing(3),
  },
}));



 function SliderFun(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>How many holes are there?</p><br />
      <Typography id="discrete-slider-always" gutterBottom>
      </Typography>
      <Slider
        min={1}
        max={30}
        defaultValue={18}
        // getAriaValueText={props.getNumHoles}
        onChange={props.getNumHoles}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="on"
      />
    </div>
  );
}

export default SliderFun;