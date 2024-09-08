import React from "react";
import Image from "next/image";
import InfoBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AboutImage from "@/public/images/landing/about_image.png";
import IDebateImage from "@/public/images/landing/del2.png";
import Button from "../UIUnits/Button/Button";
import PrayerTimeToday from "./PrayerTimeToday/PrayerTimeToday";
import styles from './HomePage.module.scss';
import ProgramCard from "../UIUnits/Cards/ProgramCard/ProgramCard";
import NewsCard from "../UIUnits/Cards/NewsCard/NewsCard";

const RAND_DATA = [
  {
    id: 0,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 1,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 2,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 3,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 4,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 5,
    image_url: "",
    title: "Al-Usrah Program",
    description: "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
]

const HomePage = () => {
  return (
    <>
      <div className={styles.landingPage}>
        <div className={styles.intro}>
          <h3>THE UMMAH OF MUSLIM STUDENTS</h3>
          <h1>A Reliable Islamic Organization To Follow The Qur’an And Sunnah</h1>
          <p>
            The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo University, Ile-Ife is the only Islamic organization on OAU Campus which is meant to cater for the welfare of Muslim Students on Campus. The body provides academic, financial, moral as well as upliftment for Muslim Students.
          </p>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.image}>
            <Image
              src={AboutImage}
              alt="About image"
              fill
              objectFit="contain"
            />
          </div>
          <div className={styles.txt}>
            <h3>ABOUT US</h3>
            <h2>Welcome To The Official MSSN OAU Page</h2>
            <p>
              The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo University (MSSNOAU) ia a branch among MSSN higher institution branches and is an inclusive platform for all Muslim students in the university to find spiritual expression, islamic knowledge, and fellowship irrespective of their backgrounds and orientation. At MSSNOAU, we foster a vibrant and inclusive community where every member is encouraged to grow and excel. Our diverse programs and activities are designed to cater to the holistic development of our members, ensuring they achieve academic excellence while maintaining strong spiritual and moral values.
            </p>
            <Button
              label="Read More"
              onClick={() => {}}
            />
          </div>
        </div>

        <PrayerTimeToday />

        <div className={styles.programsContainer}>
          <h3>ABOUT US</h3>
          <div className={styles.desc}>
            <div className={styles.l}>
              <h2>
                Activities We Do For The Benefits Of The Muslim Students
              </h2>
              <p>
                Explore our comprehensive range of programs, from regular and weekly sessions to special events, designed to enrich your journey with MSSNOAU. At MSSNOAU, we foster a vibrant and inclusive community where every member is encouraged to grow and excel. 
              </p>
            </div>
            
            <Button
              label="See More"
              onClick={() => {}}
            />
          </div>
          <ul className={styles.programs}>
            {RAND_DATA.map((program) => (
              <ProgramCard
                key={program.id}
                imageUrl={""}
                title={program.title}
                description={program.description}
              />
            ))}
          </ul>
        </div>

        <div className={styles.eventsContainer}>
          <div className={styles.bck} />
          <div className={styles.inner}>
            <h3>OUR EVENTS</h3>
            <h2>Past And Upcoming Events</h2>
            <p>
              MSSN OAU makes an effort to ensure that her members are not only bookworms, but also have a good time. So, at MSSN OAU, we organize a variety of social events such as hangouts, get together, dinner night, and other programs aimed at fostering social relationships.
            </p>

            <ul className={styles.events}>
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <span className={styles.tag}>
                    <p>Upcoming Event</p>
                  </span>

                  <Image
                    src={IDebateImage}
                    alt="Event image"
                    fill
                    objectFit="cover"
                  />
                </li>
              ))}
            </ul>

            <Button
              label="See More"
              onClick={() => {}}
            />
          </div>
        </div>

        <div className={styles.newsHighlights}>
          <div>
            <h3>AN-NUR PRESS</h3>
            <div className={styles.desc}>
              <div className={styles.l}>
                <h2>
                  News And Story From An-Nur Press
                </h2>
                <p>
                  An-Nur Press is the Editorial body of the MSSN OAU body. It is the one that is responsible for delivering all news and informations to muslim students on campus.              </p>
              </div>
              
              <Button
                label="View All"
                onClick={() => {}}
              />
            </div>
            <ul className={styles.programs}>
              {RAND_DATA.slice(0, 3).map((program) => (
                <NewsCard
                  key={program.id}
                  imageUrl={""}
                  title={program.title}
                  content={program.description}
                  author={program.author}
                  readTime={program.readTime}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage;
