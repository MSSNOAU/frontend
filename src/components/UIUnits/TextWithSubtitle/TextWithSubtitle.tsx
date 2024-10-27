import React from "react";
import styles from "./TextWithSubtitle.module.scss";

type Props = {
  title: string;
  subtitle: string;
  maxWidth?: number;
  marginTop?: number;
};

const TextWithSubtitle: React.FC<Props> = ({ title, subtitle, maxWidth, marginTop }) => {
  return (
    <div className={styles.intro} style={{ maxWidth: maxWidth || 948, marginTop: marginTop || 0 }}>
      <h2 className={styles.introTitle}>{title}</h2>
      <p className={styles.introSubtitle}>{subtitle}</p>
    </div>
  );
};

export default TextWithSubtitle;
