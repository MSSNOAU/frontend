"use client";

import React from "react";
import { useRouter } from "next/navigation";
import forAllUsers from "../../../../shared/hocs/forAllUsers";
import AboutExcos from "@/src/components/AboutExcos/AboutExcos";

type Props = {
  params: { session: string };
}

const AboutPastExcosPage: React.FC<Props> = ({ params }) => {  
  return <AboutExcos session={params.session} />;
};

export default forAllUsers(AboutPastExcosPage);