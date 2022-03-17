import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PasswordField from "../FormInputs/PasswordField";
import TextInput from "../FormInputs/TextInput";
import CustomButton from "../FormInputs/CustomButton";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    // userName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const { userName, password, confirmPassword } = values;
  console.log({ values });
  const [error, setError] = useState({
    userNameError: "",
    passwordError: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSignUp = () => {
    const userDetails = JSON.parse(localStorage.getItem("user")) || [];
    const isRegistered =
      userDetails.find((item) => item.userName === userName) || false;
    console.log({ userDetails });
    if (userName && confirmPassword === password) {
      if (isRegistered) {
        setError({ ...error, userNameError: "User already registered" });
      } else {
        userDetails.push({ userName, password });
        localStorage.setItem("user", JSON.stringify(userDetails));
        localStorage.setItem("isAuthenticated", true);
        navigate("/");
      }
    } else if (confirmPassword && confirmPassword !== password) {
      setError({
        ...error,
        passwordError: "Password and Confirm Password are not equal",
      });
    }
  };

  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container width={400} direction="column">
        <Grid item md={4}>
          {/* <TextInput
            sx={{ m: 1 }}
            name="userName"
            label="User Name"
            onChange={handleChange}
          /> */}
          <TextInput
            name="userName"
            label="user Name"
            id="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PasswordField
            name="password"
            label="Password"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PasswordField
            name="confirmPassword"
            label="Confirm Password"
            onChange={handleChange}
          />
        </Grid>
        <Grid sx={{ m: 1 }} container justifyContent="center">
          <CustomButton
            onClick={() => navigate("/login")}
            variant="contained"
            label="Existing User"
          />
          <CustomButton
            variant="contained"
            onClick={handleSignUp}
            label="SignUp"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
