import React from "react";
import classNames from "./mosque-prayer-time-card.module.scss";



interface MosquePrayerTimeCardProps{
  mosque_name:string;
  mosque_address:string;
  hijri_date:string;
  gregorian_date:string;
}



const MosquePrayerTimeCard = ({}:Partial<MosquePrayerTimeCardProps>) => {
  return (
    <div className={classNames.mosque_prayer_time_card}>
      MosquePrayerTimeCard
    </div>
  );
};

export default MosquePrayerTimeCard;
