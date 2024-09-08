import React from "react";
import Image from "next/image";
import AlUsrahImage from "@/public/images/landing/del1.png";
import ArrowRightIcon from "@/public/icons/svgs/arrow-t3-right.svg";
import Button from "../../Button/Button";
import styles from "./NewsCard.module.scss";

type Props = {
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  readTime: number;
}

const NewsCard: React.FC<Props> = ({ imageUrl, title, content, author, readTime }) => {
  return (
    <li className={styles.newsCard}>
      <div className={styles.image}>
        <Image
          src={AlUsrahImage}
          alt="image"
          fill
          objectFit="cover"
        />
        <span className={styles.tag}>
          <p>Upcoming Event</p>
        </span>
      </div>
      <div className={styles.b}>
        <h4>{title}</h4>
        <p className={styles.content}>{content}</p>

        <div className={styles.cta}>
          <div className={styles.author}>
            <span className={styles.userIcon}>{author.split(" ").slice(0, 2).map(a => a[0]).join("")}</span>
            <div>
              <p className={styles.name}>{author}</p>
              <p className={styles.readTime}>{readTime} min read</p>
            </div>
          </div>
          <Button
            label="Read More"
            onClick={() => {}}
            variant="FILL_NONE_TEXT"
            iconPos="RIGHT"
            icon={<ArrowRightIcon height={16} />}
          />
        </div>
      </div>
    </li>
  )
}

export default NewsCard;