import React from "react";
import Button from '@mui/material/Button'

const CustomButton = (props) => {
  const { variant, label, onClick } = props;
  return (
    <Button sx={{ mr: 1 }} onClick={onClick} variant={variant}>
      {label}
    </Button>
  );
};

export default CustomButton;
