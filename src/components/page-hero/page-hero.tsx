import React from 'react';
import classNames from "./page-hero.module.scss";


interface PageHeroProps{
  title?:string;
}


const PageHero = ({title}:PageHeroProps) => {
  return (
    <section className={classNames.page_hero}>
      <h2>{title}</h2>
    </section>
  )
}

export default PageHero;