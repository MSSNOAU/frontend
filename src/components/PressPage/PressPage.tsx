import React from "react";
import { useRouter } from "next/navigation";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import Footer from "../Footer/Footer";
import TextWithSubtitle from "../UIUnits/TextWithSubtitle/TextWithSubtitle";
import NewsCard from "../UIUnits/Cards/NewsCard/NewsCard";
import Newsletter from "../Newsletter/Newsletter";
import Button from "../UIUnits/Button/Button";
import styles from "./PressPage.module.scss";

const MOCK_NEWS_DATA = [
  {
    id: 3,
    imageUrl: "",
    title: "TWILIGHT: A Night To Remember-MSSN OAU Dinner",
    content: "The evening was decorated with joy and nostalgia as the fresh graduates gathered...",
    author: "Ayodele Khadijat",
    readTime: 5,
  },
  {
    id: 4,
    imageUrl: "",
    title: "Update On The Orientation Week Organized For The Freshers",
    content: "The evening was decorated with joy and nostalgia as the fresh graduates gathered...",
    author: "Ni'mah Idera",
    readTime: 3,
  },
  {
    id: 5,
    imageUrl: "",
    title: "Beautiful Scene From The Sisters' Hangout During Jihad Week",
    content: "The evening was decorated with joy and nostalgia as the fresh graduates gathered...",
    author: "Odunjo Azeez",
    readTime: 4,
  },
];

function PressPage() {
  const router = useRouter();

  return (
    <>
      <PageHeader title="An-Nur Press" />
      <TextWithSubtitle
        title="News And Story From An-Nur Presss"
        subtitle="An-Nur Press is the Editorial body of the MSSN OAU body. It is the one that is responsible for delivering all news and information to muslim students on campus."
        marginTop={100}
      />

      <div className={styles.newsSection}>
        <div className={styles.news}>
          {[0, 1, 2].map((idx) =>
            MOCK_NEWS_DATA.map((news) => (
              <NewsCard
                key={idx + "" + news.id}
                imageUrl={news.imageUrl}
                title={news.title}
                content={news.content}
                author={news.author}
                readTime={news.readTime}
                onBtnClick={() => {
                  router.push("/press/twilight-a-night-to-remember");
                }}
              />
            ))
          )}
        </div>

        <Button label="View All" variant="FILL_GREEN" onClick={() => {}} />
      </div>

      <div className={styles.newsletterContainer}>
        <Newsletter header="Subscribe to An-Nur Press Blog" />
      </div>
      <Footer />
    </>
  );
}

export default PressPage;
