"use client";

import React from "react";
import forAllUsers from "../../../shared/hocs/forAllUsers";
import AboutStaffAdvisers from "@/src/components/AboutStaffAdvisers/AboutStaffAdvisers";

const AboutStaffAdvisersPage = () => {
  return <AboutStaffAdvisers />;
};

export default forAllUsers(AboutStaffAdvisersPage);