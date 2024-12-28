import React, { useEffect, useState } from "react";
import styles from "./CardsSlider.module.scss";
import ChevronRightIcon from "@/public/icons/svgs/chevron-right.svg";
import ChevronLeftIcon from "@/public/icons/svgs/chevron-left.svg";
import clsx from "clsx";
type Props = {
  totalNoOfCards: number;
  cardsToDisplay: number;
  currentSlide: number;
  setCurrentSlide: Function;
};

const CardsSlider: React.FC<Props> = ({ totalNoOfCards, cardsToDisplay, currentSlide, setCurrentSlide }) => {
  //   const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [noOfSlides, setNoOfSlides] = useState<number>(0);

  useEffect(() => {
    const totalSlides = Math.ceil(totalNoOfCards / cardsToDisplay);
    setNoOfSlides(totalSlides);
  }, [totalNoOfCards, cardsToDisplay]);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderIndicator}>
        {new Array(noOfSlides).fill(0).map((_, idx) => {
          return (
            <button
              key={idx}
              className={clsx(styles.indicator, currentSlide === idx && styles.indicator__active)}
              onClick={() => setCurrentSlide(idx)}
            ></button>
          );
        })}
      </div>
      <div className={styles.sliderControls}>
        <button
          className={styles.sliderBtn}
          onClick={() => setCurrentSlide((old: number) => old - 1)}
          disabled={currentSlide === 0}
        >
          <ChevronLeftIcon width={16} height={16} />
        </button>
        <button
          className={styles.sliderBtn}
          onClick={() => setCurrentSlide((old: number) => old + 1)}
          disabled={currentSlide + 1 === Math.ceil(totalNoOfCards / cardsToDisplay)}
        >
          <ChevronRightIcon width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default CardsSlider;
