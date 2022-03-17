import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  const { onChange, name, label, onBlur } = props;
  return (
    <TextField
      sx={{ m: 1 }}
      name={name}
      autoComplete="off"
      fullWidth
      label={label}
      id="outlined"
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default TextInput;
