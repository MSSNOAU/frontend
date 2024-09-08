import React from "react";
// import Prayer from "@/public/images/landing/prayer-times-bg.png";
import styles from './PrayerTimeToday.module.scss';
import Button from "../../UIUnits/Button/Button";

const PrayerTimeToday = () => {
  const prayerTimes = {
    fajr: "05:23",
    sunrise: "05:23",
    dhuhr: "05:23",
    asr: "05:23",
    magrib: "05:23",
    ishai: "05:23",
  }

  return (
    <div className={styles.prayerTimeContainer}>
      <div className={styles.inner}>
        <span className={styles.hall}>
          <p>AWOLOWO HALL MOSQUE</p>
        </span>

        <h2>Prayer Times In All Places Of Prayer On Campus</h2>

        <div className={styles.times}>
          {Object.entries(prayerTimes).map((t) => (
            <>
              <p>{`${t[0]} ${t[1]}`}</p>
              <div />
            </>
          ))}
        </div>

        <Button
          label="See Others"
          variant="FILL_WHITE"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default PrayerTimeToday