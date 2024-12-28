import React from "react";
import Image from "next/image";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import styles from "./ProgramDetails.module.scss";
import NavHierarchy from "../../UIUnits/NavHierarchy/NavHeirarchy";
import TextWithSubtitle from "../../UIUnits/TextWithSubtitle/TextWithSubtitle";
import EventCard from "../../UIUnits/Cards/EventCard/EventCard";

interface Props {
  slug: string;
}

function getProgram(slug?: string) {
  // mock data - `slug` data would be fetched from the backend

  return {
    slug,
    imageUrl: "/images/programs/orientation-program.png",
    title: "Academic Programs",
    subtitle:
      "MSSN OAU also seeks to organize tutorial to help Muslim Students be better in their academics. Muslim Students who are from higher level in the Campus teaches tutorials at Moro for Muslim Students in Lower Level",
    tutorials: [
      {
        id: 0,
        heading: "School Tutorials",
        subheading:
          "MSSN OAU also seeks to organize tutorial to help Muslim Students be better in their academics. Muslim Students who are from higher level in the Campus teaches tutorials at Moro for Muslim Students in Lower Level",
      },
      {
        id: 1,
        heading: "JAMB Tutorials",
        subheading:
          "For Students who are looking to seek admission into higher institution; Jamb tutorials are also organized in order to help them get better prepared for their POST UTME ",
      },
      {
        id: 2,
        heading: "IJMB & Tutorials",
        subheading:
          "For Students who are looking to seek admission into higher institution; IJMB Tutorial tutorial are also part of the academic programs being tutored. Tutorial are also held for Jupeb Students",
      },
    ],
    events: [1, 2, 3, 4, 5, 6].map((id) => ({
      id,
      title: "Navigating Course Registration, Electives, Prerequisites For Success",
      details: ["By Brother Muthohir (Pilot) and;", "By Sister Rukoyat Areh"],
      date: "Sunday, October 21, 2023",
    })),
  };
}

export default function ProgramDetails({ slug }: Props) {
  const programData = getProgram();

  return (
    <>
      <NavHierarchy rootPath="Programs" otherPaths={[programData.title]} />

      <div className={styles.imgContainer}>
        <Image src={programData.imageUrl} alt={programData.title} width={1240} height={1103} layout="responsive" />
      </div>

      <TextWithSubtitle
        title="Academic Programs"
        subtitle="MSSN OAU also seeks to organize tutorial to help Muslim Students be better in their academics. Muslim Students who are from higher level in the Campus teaches tutorials at Moro for Muslim Students in Lower Level"
        maxWidth={871}
      />

      <div className={styles.programs}>
        {programData.tutorials.map((el) => (
          <div className={styles.program} key={el.id}>
            <h2 className={styles.programHeading}>{el.heading}</h2>
            <p className={styles.programSubheading}>{el.subheading}</p>
          </div>
        ))}
      </div>

      <section className={styles.eventsSection}>
        <TextWithSubtitle
          title="Events Organised For Academic Programs"
          subtitle="MSSN OAU makes an effort to ensure that her members are not only bookworms, but also have a good time. So, at MSSN OAU, we organize a variety of social events such as hangouts, get together, dinner night, and other programs aimed at fostering social relationships and also academic life. "
          maxWidth={1045}
        />

        <div className={styles.events}>
          {programData.events.map((p) => (
            <EventCard id={p.id} imageUrl="" title={p.title} details={p.details} date={p.date} />
          ))}
        </div>
      </section>

      <section className={styles.newsletterContainer}>
        <Newsletter header="Subscribe to An-Nur Press Blog" />
      </section>

      <Footer />
    </>
  );
}
