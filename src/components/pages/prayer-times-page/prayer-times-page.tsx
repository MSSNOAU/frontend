import React from "react";
import classNames from "./prayer-times-page.module.scss";
import PageHero from "../../page-hero/page-hero";
import Spacer from "../../spacer/spacer";
import MosquePrayerTimeCard from "../../mosque-prayer-time-card/mosque-prayer-time-card";

const PrayerTimesPage = () => {
  return (
    <section className={classNames.page_wrapper}>
      <PageHero title="Prayer&nbsp;Times" />
      <section className={classNames.page_wrapper_content}>
        <div>
          <h2 className={classNames.page_wrapper_content_title}>
            Prayer Times In All Places Of Prayer On Campus
          </h2>
          <Spacer size={24} />
          <p className={classNames.page_wrapper_content_sub}>
            This is the place to check prayer times for all places of worship on
            campus. These times are subjected to changes.{" "}
          </p>
        </div>

        <main className={classNames.page_wrapper_content_prayer_times}>
          <MosquePrayerTimeCard />
          <MosquePrayerTimeCard />
          <MosquePrayerTimeCard />
          <MosquePrayerTimeCard />
        </main>
      </section>
    </section>
  );
};

export default PrayerTimesPage;
