import React from "react";
import styles from './InfoBar.module.scss';
import CallIcon from "@/public/icons/svgs/phone.svg"
import WhatsappIcon from "@/public/icons/svgs/whatsapp.svg"
import XIcon from "@/public/icons/svgs/x.svg"
import FacebookIcon from "@/public/icons/svgs/facebook.svg"
import InstagramIcon from "@/public/icons/svgs/instagram.svg"
import MailIcon from "@/public/icons/svgs/mail.svg"

const InfoBar = () => {
  return (
    <div className={styles.infoBar}>
      <div className={styles.l}>
        <span className={styles.contact}>
          <CallIcon height={16} />
          <WhatsappIcon height={16} />
          {/* Should be fetched from the backend */}
          <p>+234-903-953-9042 / +234-678-322-3576</p>
        </span>
      </div>

      <div className={styles.r}>
        <span className={styles.contact}>
          <XIcon height={16} />
          <p>@mssngreatife1</p>
        </span>
        <span className={styles.contact}>
          <FacebookIcon height={16} />
          <InstagramIcon height={16} />
          <p>@MSSN_OAU</p>
        </span>
        <span className={styles.contact}>
          <MailIcon height={16} />
          <p>mssnthenewgreatife@gmail.com</p>
        </span>
      </div>
    </div>
  )
};

export default InfoBar;
