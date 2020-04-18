import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      //marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        style={{color: "#fff", width: "20px", height: "20px"}}
      />
    </div>
  );
}
