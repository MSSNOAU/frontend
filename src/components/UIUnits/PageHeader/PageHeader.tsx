import React from "react";
import Image from "next/image";
import AlUsrahImage from "@/public/images/landing/del1.png";
import ArrowRightIcon from "@/public/icons/svgs/arrow-t3-right.svg";
import styles from "./PageHeader.module.scss";

type Props = {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.pageHeader}>
      <h1>
        {title}
      </h1>
    </div>
  )
}

export default PageHeader;