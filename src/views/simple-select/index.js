import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "97%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const {title, options, name, handleChange, value} = props;

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          name={name}
          onChange={handleChange}
        >
          {options.map((option, key) => {
            return (
              <MenuItem value={option.key} key={key}>
                {option.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
