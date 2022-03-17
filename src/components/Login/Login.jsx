import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PasswordField from "../FormInputs/PasswordField";
import CustomButton from "../FormInputs/CustomButton";
import TextInput from "../FormInputs/TextInput";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    userName: "",
    password: "",
  });
  const { userName, password } = values;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log({ userDetails });
    const isExistingUser =
      userDetails.find((item) => item.userName === userName) || false;
    if (isExistingUser && isExistingUser.password === password) {
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
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
          <TextInput
            name="userName"
            value={values.userName}
            label="User Name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PasswordField
            name="password"
            value={values.password}
            onChange={handleChange}
            label="Password"
          />
        </Grid>
        <Grid sx={{ m: 1 }} container justifyContent="center">
          <CustomButton
            onClick={handleLogin}
            variant="contained"
            label="Login"
          />
          <CustomButton
            onClick={handleSignUp}
            variant="contained"
            label="SignUp"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
