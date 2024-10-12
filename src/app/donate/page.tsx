"use client";

import React from "react";
import DonatePage from "@/src/components/DonatePage/DonatePage";
import forAllUsers from "@/src/shared/hocs/forAllUsers";

const Donate = () => {
  return <DonatePage />;
};

export default forAllUsers(Donate);

