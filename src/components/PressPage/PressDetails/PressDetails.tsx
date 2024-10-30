import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./PressDetails.module.scss";
import Newsletter from "../../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import NavHierarchy from "../../UIUnits/NavHierarchy/NavHeirarchy";
import NewsCard from "../../UIUnits/Cards/NewsCard/NewsCard";

function getPressData(slug?: string) {
  return {
    id: 0,
    title: "TWILIGHT: A Night To Remember - MSSN OAU FYB Dinner and UNIFEMGA Induction",
    imageUrl: "/images/press/grad-muslims-and-induction.png",
    author: "",
    date: "",
    readingTime: "",
    content: `The Muslim Students’ Society of Nigeria (MSSN), Obafemi Awolowo University (OAU) chapter, hosted a significant event to celebrate the achievements of its final year brethren who have successfully navigated the challenges of OAU. The grand dinner and induction ceremony took place at the OAU Central Mosque of Unity on the 11th of August, 2024.

                The evening was decorated with joy and nostalgia as the fresh graduates gathered, beaming with accomplishment and their faces saying “Alhamdulillah, I survived OAU’s Shege”.
                The programme started immediately after the sunset prayer with the recitation from the majestic book-Al_Qur’an.The Chief Imam, OAU Muslim Community, Abubakar Abefe Sanusi delivered a value-laden and inspiring speech, offering a piece of golden advice to the newly minted graduates as they will soon be exposed to a new phase of life.

                In an interview with one of the attendees, Sister Roqeebah Bashir–one of the final-year brethrens–described the event as “a joyful gathering that will leave lasting memories.” She narrated how the event was fun from the setting of the hall to the red carpet; the induction into UNIFEMGA; the Imam’s speech and the opportunities to share experiences and bond over OAU’s unique challenges. She also commented “The quiz, Kahoots game, and special delicacies served added to the evening’s delight.”.

                In another interview with Sister Nusaybah Shuayb-Osunleke-a finalist from the department of History-she also narrated her experience. She recounted, “…after the red carpet session, we went for the night prayer. The program kicked-off afterwards starting with the recitation from the glorious Qur’an and as the event progressed the Chief Imam stood to address and give us fatherly advice about life while we were sequentially inducted into the UNIFEMGA.” She also mentioned that games and appetisers were served graciously as the event went on; awards were also presented to finalists for their undiluted enthusiasm through the course of their studies on campus.

                “Twilight” was a testament to the strength and camaraderie of the MSSN OAU family, celebrating victory over OAU’s rigours and ushering in a new chapter of growth and success.",
 `,

    topStories: [
      {
        id: 1,
        imageUrl: "",
        title: "TWILIGHT: A Night To Remember-MSSN OAU Dinner",
        content: "The evening was decorated with joy and nostalgia as the fresh graduates gathered...",
        author: "Ayodele Khadijat",
        readTime: 5,
      },
      {
        id: 2,
        imageUrl: "",
        title: "Update On The Orientation Week Organized For The Freshers",
        content: "The evening was decorated with joy and nostalgia as the fresh graduates gathered...",
        author: "Ni'mah Idera",
        readTime: 3,
      },
    ],

    moreStories: [
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
    ],
  };
}

function PressDetailsPage() {
  const router = useRouter();

  const data = getPressData();

  return (
    <>
      <NavHierarchy rootPath="An-Nur Press" otherPaths={[data.title]} />

      <div></div>

      <div className={styles.imgContainer}>
        <Image src={data.imageUrl} alt={data.title} width={1240} height={1113} layout="responsive" />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.details}>
          <p>{data.content}</p>
          <p>
            <strong>
              Interested in reading more, check out the Article on <Link href="/press">An-Nur Press Blog</Link>
            </strong>
          </p>
        </div>

        <aside className={styles.topStories}>
          <h2 className={styles.heading_topStories}>Top Stories</h2>
          <div className={styles.topStoriesCards}>
            {data.topStories.map((news) => (
              <NewsCard
                key={news.id}
                imageUrl={news.imageUrl}
                title={news.title}
                content={news.content}
                author={news.author}
                readTime={news.readTime}
                onBtnClick={() => {
                  router.push("/press/twilight-a-night-to-remember");
                }}
              />
            ))}
          </div>
        </aside>
      </div>

      <div className={styles.moreStories}>
        <h2 className={styles.heading_moreStories}>More Stories</h2>
        <div className={styles.moreStoriesCards}>
          {data.moreStories.map((news) => (
            <NewsCard
              key={news.id}
              imageUrl={news.imageUrl}
              title={news.title}
              content={news.content}
              author={news.author}
              readTime={news.readTime}
              onBtnClick={() => {
                router.push("/press/twilight-a-night-to-remember");
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.newsletterContainer}>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default PressDetailsPage;
