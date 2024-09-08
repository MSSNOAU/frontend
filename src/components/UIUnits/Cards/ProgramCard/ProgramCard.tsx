import React from "react";
import Image from "next/image";
import AlUsrahImage from "@/public/images/landing/del1.png";
import ArrowRightIcon from "@/public/icons/svgs/arrow-t3-right.svg";
import Button from "../../Button/Button";
import styles from "./ProgramCard.module.scss";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
}

const ProgramCard: React.FC<Props> = ({ imageUrl, title, description }) => {
  return (
    <li className={styles.programCard}>
      <div className={styles.image}>
        <Image
          src={AlUsrahImage}
          alt="image"
          fill
          objectFit="cover"
        />
      </div>
      <div className={styles.b}>
        <h4>{title}</h4>
        <p>{description}</p>

        <Button
          label="Learn More"
          onClick={() => {}}
          variant="FILL_NONE_TEXT"
          iconPos="RIGHT"
          icon={<ArrowRightIcon height={16} />}
        />
      </div>
    </li>
  )
}

export default ProgramCard;