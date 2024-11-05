"use client";
import React from "react";
import classNames from "./mosque-detail-page.module.scss";
import Spacer from "../../UIUnits/spacer/spacer";

import Newsletter from "../../Newsletter/Newsletter";
import BreadCrumbs from "../../UIUnits/bread-crumbs/bread-crumbs";
import clsx from "clsx";


interface MosqueTimeTodayProps {
  prayer_name?: string;
  prayer_time?: string;
}

const MosqueTimeToday = ({
  prayer_name = "Fajr",
  prayer_time = "05:23 AM",
}: MosqueTimeTodayProps) => {
  return (
    <div className={classNames["mosque_time_today"]}>
      <span className={classNames["mosque_time_today_left"]}>
        {prayer_name}
      </span>
      <span className={classNames["mosque_time_today_right"]}>
        {prayer_time}
      </span>
    </div>
  );
};

interface MosqueTimeProps {
  date?: string;
  is_current?:boolean;
}

const MosqueTime = ({ date = "Sun 1 Sept" ,is_current = false}: MosqueTimeProps) => {
  return (
    <div className={clsx({
      [classNames["mosque_time"]]:true,
      [classNames['current']]:is_current
    })}>
      <span>{date}</span>
      <span>05:23</span>
      <span>06:11</span>
      <span>12:44</span>
      <span>04:06</span>
      <span>06:50</span>
      <span>08:05</span>
    </div>
  );
};

const MosqueDetailPage = ({ slug }: { slug?: string }) => {
  return (
    <section
      className={clsx({
        [classNames.page_wrapper]: true,
        [classNames.no_pt]: true,
      })}
    >
      <BreadCrumbs
        pages={[
          {
            name: "Prayer Times",
            current: false,
            href: "/prayer-times",
          },
          {
            name: slug ?? "Mosque Details",
            current: true,
            href: `/prayer-times/mosques/${slug}`,
          },
        ]}
      />

      <Spacer size={40} />

      <section className={classNames.page_wrapper_content}>
        <h1 className={classNames.page_wrapper_content_title}>
          Awo Hall Mosque Prayer Times
        </h1>
        <h3 className={classNames.page_wrapper_content_subtitle}>
          Awo Hall, OAU, Ile-Ife, Osun State
        </h3>

        <main className={classNames["page_content"]}>
          <section className={classNames["page_content-left"]}>
            <div className={classNames["page_content-left_header"]}>
              <h1>Prayer Times In Awo Mosque</h1>

              <div className="">
                <h3>8 September, 2024</h3>
                <h2>5 Rabi’ul Awwal, 1446</h2>
              </div>
            </div>
            <div className={classNames["page_content-left_body"]}>
              <div className={classNames["page_content-left_body_caption"]}>
                <span>&nbsp;&nbsp;</span>
                <span>Fajr</span>
                <span>Sunrise</span>
                <span>Dhuhr</span>
                <span>Asr</span>
                <span>Maghrib</span>
                <span>Isha</span>
              </div>

              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime is_current/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
              <MosqueTime/>
            </div>
          </section>
          <section className={classNames["page_content-right"]}>
            <div className={classNames["page_content-right_header"]}>
              <h2>Awolowo Hall Mosque</h2>
              <h4>TODAY, 8 September, 2024</h4>
            </div>

            <div className={classNames["page_content-right_body"]}>
              <MosqueTimeToday />
              <MosqueTimeToday />
              <MosqueTimeToday />
              <MosqueTimeToday />
              <MosqueTimeToday />
            </div>
          </section>
        </main>
      </section>

      <Newsletter fullWidth />
    </section>
  );
};

export default MosqueDetailPage;
