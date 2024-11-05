"use client";

import React from "react";
import forAllUsers from "../../shared/hocs/forAllUsers";
import AboutMSSN from "@/src/components/AboutMSSN/AboutMSSN";

const AboutMSSNPage = () => {
  return <AboutMSSN />;
};

export default forAllUsers(AboutMSSNPage);