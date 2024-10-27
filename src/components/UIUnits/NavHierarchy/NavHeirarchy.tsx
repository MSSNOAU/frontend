import React from "react";
import ChevronRightIcon from "@/public/icons/svgs/chevron-right.svg";
import styles from "./NavHierarchy.module.scss";
import clsx from "clsx";

type Props = {
  rootPath: string;
  otherPaths: string[];
};

const NavHierarchy: React.FC<Props> = ({ rootPath, otherPaths }) => {
  return (
    <div className={styles.container}>
      <span className={clsx(styles.path, styles.rootPath)}>{rootPath}</span>

      {otherPaths.map((path) => (
        <>
          <ChevronRightIcon height={16} width={16} />
          <span className={styles.path}>{path}</span>
        </>
      ))}
    </div>
  );
};

export default NavHierarchy;
