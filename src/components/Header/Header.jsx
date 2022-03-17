import React from "react";
import CustomButton from "../FormInputs/CustomButton";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const Header = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", false);
    navigate("/login");
  };
  return (
    <Grid
      container
      justifyContent="flex-end"
      className="header"
      sx={{ height: 50, background: "blue", color: "white" }}
    >
      <CustomButton onClick={handleLogout} variant="standard" label="Logout" />
    </Grid>
  );
};

export default Header;
