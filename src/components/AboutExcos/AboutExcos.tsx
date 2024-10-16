import React from "react";
import Footer from "../Footer/Footer";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import ArrowIcon from "@/public/icons/svgs/arrow-t2-left.svg"
import styles from './AboutExcos.module.scss';
import ExcosGroup from "./ExcosGroup/ExcosGroup";
import Button from "../UIUnits/Button/Button";
import Link from "next/link";

const RAND_DATA = [
  {
    id: 0,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 1,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 2,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 3,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 4,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 5,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 6,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 7,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
  {
    id: 8,
    name: "Nasir Abdulrahman",
    post: "Ameer",
    department: "Dentistry",
    level: "500",
    phone_no: "08173343673",
  },
]

// interface CurrentSessionProps {
//   isCurrentYear?: boolean;
//   session: string;
// }
// interface PastSessionProps {
//   isCurrentYear: boolean;
//   session: string;
// }

type PageProps = {
  isCurrentYear?: boolean;
  session: string;
};

const AboutExcos: React.FC<PageProps> = ({ isCurrentYear, session }) => {
  const sessionFmt = session.split("-").join("/");

  return (
    <>
      <PageHeader title={`MSSN OAU Excos${!isCurrentYear ? " " + sessionFmt : ""}`} />
      <div className={styles.content}>
        <h2>Meet The {isCurrentYear ? "New" : ""} Executives For {sessionFmt} Academic Session</h2>
        
        <div className={styles.container}>
          <ExcosGroup
            group={RAND_DATA}
            title="A. Central Executive Council Committee"
          />

          <span>
            <Button
              label="Show All"
              onClick={() => {}}
            />
          </span>
        </div>
        
        <div className={styles.container}>
          <ExcosGroup
            group={RAND_DATA.slice(0, 5)}
            title="B. An-Nur Press Agency Editorial Board"
          />
        </div>
        
        <div className={styles.container}>
          <ExcosGroup
            group={RAND_DATA.slice(0, 6)}
            title="C. Business Committee"
          />
        </div>
      </div>

      {isCurrentYear && (
        <div className={styles.pastExecs}>
          <h2>Meet Our Past Executives</h2>

          <Link className={styles.pastLink} href="/about/excos/2023-2024">
            <span className={styles.txt}>
              2023/2024 Academic Session
            </span>
            <span className={styles.arrow}>
              <ArrowIcon height="16px" />
            </span>
          </Link>
          <Link className={styles.pastLink} href="/about/excos/2022-2023">
            <span className={styles.txt}>
              2022/2023 Academic Session
            </span>
            <span className={styles.arrow}>
              <ArrowIcon height="16px" />
            </span>
          </Link>
          <Link className={styles.pastLink} href="/about/excos/2021-2022">
            <span className={styles.txt}>
              2021/2022 Academic Session
            </span>
            <span className={styles.arrow}>
              <ArrowIcon height="16px" />
            </span>
          </Link>
        </div>
      )}
      <Footer />
    </>
  )
}

export default AboutExcos;
