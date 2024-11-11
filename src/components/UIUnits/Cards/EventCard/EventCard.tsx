import React from "react";
import Image from "next/image";
import styles from "./EventCard.module.scss";
import AlUsrahImage from "@/public/images/landing/del1.png";
import Button from "../../Button/Button";
type Props = {
  imageUrl?: string;
  tag: string;
  title: string;
  speaker1: string;
  speaker2?: string;
  date: string;
  link: string;
};

const EventCard: React.FC<Props> = ({
  imageUrl,
  tag,
  title,

  speaker1,
  speaker2,
  date,
  link,
}) => {
  return (
    <li className={styles.programCard}>
      <div className={styles.image}>
        <Image
          src={imageUrl || AlUsrahImage}
          alt={title}
          fill
          objectFit="cover"
        />
      </div>
      <div className={styles.b}>
        {tag && <div className={styles.tag}>{tag}</div>}
        <h4>{title}</h4>

        <ul className={styles.speakers}>
          <li>
            By {speaker1} {speaker2 && "and;"}
          </li>

          <li>By {speaker2}</li>
        </ul>
        <p className={styles.date}>{date}</p>
        <div className={styles.watchButton}>
          <Button
            label="Watch Recordings"
            onClick={() => (window.location.href = link)}
            variant="FILL_GREEN"
          />
        </div>
      </div>
    </li>
  );
};

export default EventCard;
