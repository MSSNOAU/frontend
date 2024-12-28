import Footer from '@/src/components/Footer/Footer';
import NavBar from '@/src/components/NavBar/NavBar';
import Spacer from '@/src/components/UIUnits/spacer/spacer';
import React from 'react'
import classNames from "./layout.module.scss";

const PrayerTimesLayout = ({children}:{children?:React.ReactNode;}) => {
  return (
    <section  className={classNames.layout}>
      <NavBar/>
      {/* <div className={styles.navPadding} /> */}
      <Spacer size={54} />
      {children}
      <Footer/>
    </section>
  )
}

export default PrayerTimesLayout