"use client";

import React from "react";
import EventsPage from "@/src/components/EventsPage/EventsPage";
import forAllUsers from "@/src/shared/hocs/forAllUsers";

const Events = () => {
  return <EventsPage />;
};

export default forAllUsers(Events);
