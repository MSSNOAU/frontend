"use client";

import PressPage from "@/src/components/PressPage/PressPage";
import forAllUsers from "@/src/shared/hocs/forAllUsers";
import React from "react";

const Press = () => {
  return <PressPage />;
};

export default forAllUsers(Press);
