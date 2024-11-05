import React from "react";
import ArrowRightIcon from "@/public/icons/svgs/arrow-t3-right.svg";
import classNames from "./mosque-prayer-time-card.module.scss";
import prayer_times from "@/src/data/prayer_times";
import { pxToRem } from "@/src/shared/utils";
import Link from "next/link";

interface MosquePrayerTimeCardProps {
  mosque_name: string;
  mosque_address: string;
  hijri_date: string;
  gregorian_date: string;
  is_central?: boolean;
  prayer_times?: unknown[];
  mosque_id?: string | number;
}

interface PrayerCardProps {
  prayer_name: string;
  prayer_time: string;
  is_current_prayer_time?: boolean;
}

const PrayerCard = ({
  prayer_name,
  prayer_time,
  is_current_prayer_time,
}: PrayerCardProps) => {
  return (
    <div
      className={classNames["prayer-card"]}
      style={
        {
          height: is_current_prayer_time ? pxToRem(174) : undefined,
          width: is_current_prayer_time ? pxToRem(211) : undefined,
          minHeight: is_current_prayer_time ? pxToRem(174) : undefined,
          minWidth: is_current_prayer_time ? pxToRem(211) : undefined,
          backgroundColor: is_current_prayer_time ? "#333333" : undefined,
          color: is_current_prayer_time ? "#fff" : undefined,
          "--c-gap": "9px",
        } as React.CSSProperties
      }
    >
      {is_current_prayer_time && (
        <h6 className={classNames["prayer-card_upcoming-title"]}>
          Upcoming&nbsp;Prayer
        </h6>
      )}
      <h2 className={classNames["prayer-card_title"]}>{prayer_name}</h2>
      {is_current_prayer_time && (
        <h1 className={classNames["prayer-card_upcoming-sub-title"]}>
          00:15:12
        </h1>
      )}
      <h4 className={classNames["prayer-card_sub-title"]}>{prayer_time}</h4>
    </div>
  );
};

const MosquePrayerTimeCard = ({
  mosque_name = "Geology Prayer Ground",
  mosque_address = "Geology Parking spot, OAU, Ile-Ife, Osun State",
  gregorian_date = "8 September, 2024",
  hijri_date = "5 Rabi`ul Awwal, 1446",
  is_central,
  mosque_id,
}: Partial<MosquePrayerTimeCardProps>) => {
  return (
    <div className={classNames.mosque_prayer_time_card}>
      <div className={classNames["mosque_prayer_time_card-header"]}>
        <div className={classNames["mosque_prayer_time_card-header-left"]}>
          <h1>{mosque_name}</h1>
          <h2>{mosque_address}</h2>
        </div>
        <div className={classNames["mosque_prayer_time_card-header-right"]}>
          <h1>{gregorian_date}</h1>
          <h2>{hijri_date}</h2>
        </div>
      </div>
      <main className={classNames["mosque_prayer_time_card-time_list"]}>
        {prayer_times?.map((pt, id) => {
          return (
            <PrayerCard
              key={id + pt.prayer_time + id + new Date().getTime()}
              prayer_name={pt.prayer_name}
              prayer_time={pt.prayer_time}
              is_current_prayer_time={pt.is_current_prayer_time}
            />
          );
        })}
      </main>
      <Link href={`/prayer-times/mosques/${mosque_id}`}>
        <button className={classNames["mosque_prayer_time_card-view_all_btn"]}>
          <span>See&nbsp;Full&nbsp;Timetable</span>
          <ArrowRightIcon height={16} width={16} />
        </button>
      </Link>

      {is_central && (
        <div className={classNames["mosque_prayer_time_card-central"]}>
          <p>Friday Sermon starts at 1:00 PM and Prayer commences at 2:00 PM</p>
        </div>
      )}
    </div>
  );
};

export default MosquePrayerTimeCard;
