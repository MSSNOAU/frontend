"use client";

import React from "react";
import HomePage from "../components/HomePage/HomePage";
import forAllUsers from "../shared/hocs/forAllUsers";

const Home = () => {
  return <HomePage />;
};

export default forAllUsers(Home);
