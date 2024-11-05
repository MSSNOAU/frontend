"use client";
import React from "react";
import classNames from "./prayer-times-page.module.scss";
import Spacer from "../../UIUnits/spacer/spacer";
import MosquePrayerTimeCard from "../../mosque-prayer-time-card/mosque-prayer-time-card";
import Newsletter from "../../Newsletter/Newsletter";
import PageHeader from "../../UIUnits/PageHeader/PageHeader";



const PrayerTimesPage = () => {
  return (
    <section className={classNames.page_wrapper}>
      <PageHeader title="Prayer&nbsp;Times" />
      <section className={classNames.page_wrapper_content}>
        <div>
          <h2 className={classNames.page_wrapper_content_title}>
            Prayer Times In All Places Of Prayer On Campus
          </h2>
          <Spacer size={32} />
          <p className={classNames.page_wrapper_content_sub}>
            This is the place to check prayer times for all places of worship on
            campus. These times are subjected to changes.{" "}
          </p>
        </div>

        <main className={classNames.page_wrapper_content_prayer_times}>
          <MosquePrayerTimeCard mosque_id={1} />
          <MosquePrayerTimeCard  mosque_id={2}/>
          <MosquePrayerTimeCard  mosque_id={3}/>
          <MosquePrayerTimeCard mosque_id={4}  is_central/>
        </main>
        
        <Newsletter fullWidth />
      </section>
    </section>
  );
};

export default PrayerTimesPage;
