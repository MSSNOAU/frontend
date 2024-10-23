import React from "react";
import ArrowRightIcon from "@/public/icons/svgs/arrow-t3-right.svg";
import classNames from "./mosque-prayer-time-card.module.scss";
import prayer_times from "@/src/data/prayer_times";

interface MosquePrayerTimeCardProps {
  mosque_name: string;
  mosque_address: string;
  hijri_date: string;
  gregorian_date: string;
  is_central?: boolean;
}

interface PrayerCardProps {
  prayer_name: string;
  prayer_time: string;
  is_current_prayer_time?: boolean;
}

const PrayerCard = ({ prayer_name, prayer_time }: PrayerCardProps) => {
  return (
    <div className={classNames["prayer-card"]}>
      <h2 className={classNames["prayer-card_title"]}>{prayer_name}</h2>
      <h4 className={classNames["prayer-card_sub-title"]}>{prayer_time}</h4>
    </div>
  );
};

const MosquePrayerTimeCard = ({
  mosque_name = "Geology Prayer Ground",
  mosque_address = "Geology Parking spot, OAU, Ile-Ife, Osun State",
  gregorian_date = "8 September, 2024",
  hijri_date = "5 Rabi`ul Awwal, 1446",
  is_central
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
        {prayer_times.map((pt, id) => {
          return (
            <PrayerCard
              key={id + pt.prayer_time + id + pt.prayer_name}
              prayer_name={pt.prayer_name}
              prayer_time={pt.prayer_time}
            />
          );
        })}
      </main>
      <button className={classNames["mosque_prayer_time_card-view_all_btn"]}>
        <span>See&nbsp;Full&nbsp;Timetable</span>
        <ArrowRightIcon height={16} width={16} />
      </button>

{is_central &&      <div className={classNames["mosque_prayer_time_card-central"]}>
        <p>Friday Sermon starts at 1:00 PM and Prayer commences at 2:00 PM</p>
      </div>}
    </div>
  );
};

export default MosquePrayerTimeCard;
