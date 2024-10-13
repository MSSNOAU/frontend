import React from "react";
import Image from "next/image";
import InfoBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AboutImage from "@/public/images/landing/about_image.png";
import IDebateImage from "@/public/images/landing/del2.png";
import ELibraryImage1 from "@/public/images/landing/e_library1.png";
import ELibraryImage2 from "@/public/images/landing/e_library2.png";
import ELibraryImage3 from "@/public/images/landing/e_library3.png";
import SuggestionBoxImage from "@/public/images/landing/suggestion_box.png";
import Button from "../UIUnits/Button/Button";
import PrayerTimeToday from "./PrayerTimeToday/PrayerTimeToday";
import ProgramCard from "../UIUnits/Cards/ProgramCard/ProgramCard";
import NewsCard from "../UIUnits/Cards/NewsCard/NewsCard";
import styles from "./HomePage.module.scss";
import Newsletter from "../Newsletter/Newsletter";
import Link from "next/link";

const RAND_DATA = [
  {
    id: 0,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 1,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 2,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 3,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 4,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 5,
    image_url: "",
    title: "Al-Usrah Program",
    description:
      "Seeking Knowledge both Western and Islamic is compulsory upon every Muslim, Seeking Knowledge both Western and Islamic is compulsory upon every Muslim., Seeking Knowledge both Western and Islamic is compulsory upon every Muslim.",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
];

const HomePage = () => {
  return (
    <>
      <div className={styles.landingPage}>
        <div className={styles.intro}>
          <h3>THE UMMAH OF MUSLIM STUDENTS</h3>
          <h1>
            A Reliable Islamic Organization To Follow The Qur’an And Sunnah
          </h1>
          <p>
            The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo
            University, Ile-Ife is the only Islamic organization on OAU Campus
            which is meant to cater for the welfare of Muslim Students on
            Campus. The body provides academic, financial, moral as well as
            upliftment for Muslim Students.
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
              The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo
              University (MSSNOAU) ia a branch among MSSN higher institution
              branches and is an inclusive platform for all Muslim students in
              the university to find spiritual expression, islamic knowledge,
              and fellowship irrespective of their backgrounds and orientation.
              At MSSNOAU, we foster a vibrant and inclusive community where
              every member is encouraged to grow and excel. Our diverse programs
              and activities are designed to cater to the holistic development
              of our members, ensuring they achieve academic excellence while
              maintaining strong spiritual and moral values.
            </p>
            <Button label="Read More" onClick={() => {}} />
          </div>
        </div>

        <PrayerTimeToday />

        <div className={styles.programsContainer}>
          <h3>ABOUT US</h3>
          <div className={styles.desc}>
            <div className={styles.l}>
              <h2>Activities We Do For The Benefits Of The Muslim Students</h2>
              <p>
                Explore our comprehensive range of programs, from regular and
                weekly sessions to special events, designed to enrich your
                journey with MSSNOAU. At MSSNOAU, we foster a vibrant and
                inclusive community where every member is encouraged to grow and
                excel.
              </p>
            </div>

            <Button label="See More" onClick={() => {}} />
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
              MSSN OAU makes an effort to ensure that her members are not only
              bookworms, but also have a good time. So, at MSSN OAU, we organize
              a variety of social events such as hangouts, get together, dinner
              night, and other programs aimed at fostering social relationships.
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

            <Link href={"/prayer-times"}>
              <Button label="See More"  />
            </Link>
          </div>
        </div>

        <div className={styles.newsHighlights}>
          <div>
            <h3>AN-NUR PRESS</h3>
            <div className={styles.desc}>
              <div className={styles.l}>
                <h2>News And Story From An-Nur Press</h2>
                <p>
                  An-Nur Press is the Editorial body of the MSSN OAU body. It is
                  the one that is responsible for delivering all news and
                  informations to muslim students on campus.{" "}
                </p>
              </div>

              <Button label="View All" onClick={() => {}} />
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

        <div className={styles.libDonContainer}>
          <div className={styles.eLibrary}>
            <div className={styles.desc}>
              <h3>OUR ACHIEVEMENT</h3>
              <h2>New E-Library Now Available For Use In The Central Mosque</h2>
              <p>
                The New E-Library situated in the Central Mosque is now
                available for use between the hour of 8:00am to 4:00pm. Various
                islamic books majorly on hadeeth, biographies, Quran (in
                different languages) and many more are available. Various
                islamic books majorly on hadeeth, biographies, Quran (in
                different languages) and many more are available.
              </p>
            </div>
            <div className={styles.imgContainer}>
              {/* Replace images with ones without borders */}
              <div className={styles.imageGrid}>
                <div className={styles.full}>
                  <Image
                    src={ELibraryImage1}
                    alt="E-Library image"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className={styles.innerSplit}>
                  <div>
                    <Image
                      src={ELibraryImage2}
                      alt="E-Library image"
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={ELibraryImage3}
                      alt="E-Library image"
                      fill
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.timeContainer}>
                <p className={styles.text}>OPEN & CLOSE:</p>
                <p className={styles.time}>8:00AM - 4:00PM</p>
              </div>
            </div>
          </div>

          {/* DONATION BOX */}
          <div className={styles.donation}>
            <div className={styles.about}>
              <h3>WE NEED YOUR HELP</h3>
              <h2>Donate For The Cause Of Allah And Earn Great Reward</h2>
              <p className={styles.verse}>
                Those who believe, and do deeds of righteousness, and establish
                regular prayers and regular charity, will have their reward with
                their Lord. On them shall be no fear, nor shall they grieve”
                (Q2:277)
              </p>

              <div>
                <p>
                  Your Donation to <strong>MSSN OAU</strong> Branch will help in
                  the covering of the following;
                </p>
                <ul>
                  <li>BUS</li>
                  <li>Running the WEBSITE</li>
                  <li>MOSQUE PROJECT</li>
                  <li>
                    Cater for the WELFARISM of the Muslim Students and others
                  </li>
                </ul>
              </div>
              <Button label="More Reason For Donation" onClick={() => {}} />
            </div>
            <div className={styles.accountDets}>
              <span>ACCOUNT DETAILS</span>
              <p>
                <strong>Account Name: </strong>
                Muslim Students’ Society Of Nigeria, OAU
              </p>
              <p>
                <strong>Bank Name: </strong>
                GTBank
              </p>
              <p>
                <strong>Account Number: </strong>
                0217023039
              </p>
            </div>
          </div>

          {/* NEWLETTER */}
          <Newsletter title={"NEWSLETTER"} transparent />

          <div className={styles.bck} />
        </div>

        {/* SUGGESTION BOX */}
        <div className={styles.suggestionBox}>
          <div>
            <div className={styles.l}>
              <h3>WE WANT TO HEAR FROM YOU</h3>
              <h2>Have Some Questions? Put It In The Suggestion Box</h2>
              <p className={styles.verse}>
                The <strong>MSSN OAU Executives</strong> really appreciate your
                effort by abiding with laws and doing the right thing. However,
                we might not know some things you think we should more. That is
                why this platform is created so as to hear from you. Muslim
                Students may assist. Not only do you aid your society, but you
                also support the professionals that we will one day become.
              </p>

              <Button label="Fill Form" onClick={() => {}} />
            </div>
            <div className={styles.r}>
              <Image
                src={SuggestionBoxImage}
                alt="Suggestion Box image"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
