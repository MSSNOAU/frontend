import React from "react";
import Image from "next/image";
import styles from "./EventCard.module.scss";
import Button from "../../Button/Button";

type Props = {
  id: string | number;
  imageUrl: string;
  title: string;
  details: string[];
  date: string;
};

const EventCard: React.FC<Props> = ({ id, imageUrl, title, details, date }) => {
  return (
    <li className={styles.eventCard}>
      <div className={styles.imageContainer}>
        <Image src="/images/programs/event.png" width={385} height={290} alt={title} objectFit="cover" />
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <ul className={styles.detailsList}>
          {details.map((d) => (
            <li key={d} className={styles.detail}>
              <p>{d}</p>
            </li>
          ))}
        </ul>
        <p className={styles.date}>{date}</p>
        <Button label="Watch Recordings" variant="FILL_GREEN" size="sm" rounded onClick={() => {}} />
      </div>
    </li>
  );
};

export default EventCard;
