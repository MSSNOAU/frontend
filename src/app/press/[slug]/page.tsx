"use client";

import React from "react";
import forAllUsers from "@/src/shared/hocs/forAllUsers";
import PressDetailsPage from "@/src/components/PressPage/PressDetails/PressDetails";

const PressDetails = () => {
  return <PressDetailsPage />;
};

export default forAllUsers(PressDetails);
