"use client";

import React from "react";
import ProgramDetails from "@/src/components/ProgramsPage/ProgramDetails/ProgramDetails";
import forAllUsers from "@/src/shared/hocs/forAllUsers";

interface Props {
  params: {
    slug: string;
  };
}

const ProgramDetailsPage = ({ params }: Props) => {
  const slug = params.slug;

  return <ProgramDetails slug={"mock"} />;
};

export default forAllUsers(ProgramDetailsPage);
