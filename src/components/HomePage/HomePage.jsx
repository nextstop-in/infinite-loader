import React from "react";
import Header from "../Header/Header";
import List from "../InfiniteLoader/InfiniteLoader";

const HomePage = (props) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  console.log({ isAuthenticated });
  return (
    <div>
      <Header />
      <div>
        <List />
      </div>
    </div>
  );
};

export default HomePage;
