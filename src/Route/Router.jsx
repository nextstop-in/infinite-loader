import React from "react";
import Login from "../components/Login/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../components/HomePage/HomePage";

const Router = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
