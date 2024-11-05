"use client";

import React from "react";
import ProgramsPage from "@/src/components/ProgramsPage/ProgramsPage";
import forAllUsers from "@/src/shared/hocs/forAllUsers";

const Programs = () => {
  return <ProgramsPage />;
};

export default forAllUsers(Programs);
