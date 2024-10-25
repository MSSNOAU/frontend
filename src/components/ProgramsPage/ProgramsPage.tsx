import React from "react";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import ProgramCard from "../UIUnits/Cards/ProgramCard/ProgramCard";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import styles from "./ProgramsPage.module.scss";

// prettier-ignore
const RANDOM_PROGRAMS_DATA = [
  { id: 0, imageUrl: "", title: "Al-Usrah Program", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 1, imageUrl: "", title: "Orientation Program", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 2, imageUrl: "", title: "Jihad Week Event", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 3, imageUrl: "", title: "Madrasah Class", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 4, imageUrl: "", title: "An-Nur Press Agnecy", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 5, imageUrl: "", title: "Skill Acquisition", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 6, imageUrl: "", title: "Rural Dawah", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 7, imageUrl: "", title: "Iftar Program", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 8, imageUrl: "", title: "Dawah Nights", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 9, imageUrl: "", title: "Academic Programs", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 10, imageUrl: "", title: "Iftar Programs", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 11, imageUrl: "", title: "Iftar Programs", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 12, imageUrl: "", title: "Dawah Nights", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 13, imageUrl: "", title: "Iftar Programs", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
  { id: 14, imageUrl: "", title: "Dawah Nights", description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim..." },
];

export default function ProgramsPage() {
  return (
    <>
      <div>
        <PageHeader title="Programs" />

        <div className={styles.intro}>
          <h2 className={styles.introTitle}>
            Activities We Do For The Benefits Of The Muslim Students
          </h2>
          <p className={styles.introSubtitle}>
            Explore our comprehensive range of programs, from regular and weekly
            sessions to special events, designed to enrich your journey with
            MSSNOAU. At MSSNOAU, we foster a vibrant and inclusive community
            where every member is encouraged to grow and excel.
          </p>
        </div>

        <ul className={styles.programs}>
          {RANDOM_PROGRAMS_DATA.map((program) => (
            <ProgramCard
              key={program.id}
              imageUrl=""
              title={program.title}
              description={program.description}
            />
          ))}
        </ul>
      </div>

      <div className={styles.newsletterContainer}>
        <Newsletter header="Subscribe to An-Nur Press Blog" />
      </div>

      <Footer />
    </>
  );
}
