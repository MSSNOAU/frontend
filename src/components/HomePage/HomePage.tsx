import React from "react";
import InfoBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from './HomePage.module.scss';


const HomePage = () => {
  return <>
    <InfoBar />
    <div className={styles.random} />
    <Footer />
  </>
}

export default HomePage;
