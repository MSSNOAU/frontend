"use client";

import React from "react";
import forAllUsers from "../../../shared/hocs/forAllUsers";
import AboutExcos from "@/src/components/AboutExcos/AboutExcos";

const AboutExcosPage = () => {
  const currentSession = "2024-2025"; // Fetch from backend
  return <AboutExcos isCurrentYear session={currentSession} />;
};

export default forAllUsers(AboutExcosPage);