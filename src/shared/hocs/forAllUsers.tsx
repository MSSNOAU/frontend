"use client";

import React, { ComponentType } from "react";
import NavBar from "@/src/components/NavBar/NavBar";
import styles from "./styles.module.scss";

interface ForAllUsersProps {}

const forAllUsers = <P extends object>(
  Component: ComponentType<P>
): React.FC<P & ForAllUsersProps> => {
  const Comp: React.FC<P & ForAllUsersProps> = (props) => {
    return (
      <>
        <NavBar />
        <div className={styles.navPadding} />
        <Component {...props} />
      </>
    );
  };

  return Comp;
};

export default forAllUsers;