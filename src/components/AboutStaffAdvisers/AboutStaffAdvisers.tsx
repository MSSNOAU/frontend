import React from "react";
import Footer from "../Footer/Footer";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import CallIcon from "@/public/icons/svgs/phone_1.svg"
import WhatsappIcon from "@/public/icons/svgs/whatapp_1.svg"
import MailIcon from "@/public/icons/svgs/mail_1.svg"
import styles from './AboutStaffAdvisers.module.scss';

const RAND_DATA = [
  {
    id: 0,
    name: "Dr. Surajudeen O. Obayopo",
    post: "Grand Patron",
    about: "Dr. Surajudeen O. is an Associate Professor from the Department of Mechanical Engineering. He has been our patron for the past 3years. He is the current HOD of the Department.",
    whatsappNo: "000",
    email: "temp@mail.com",
    phone_no: "00000",
  },
  {
    id: 1,
    name: "Dr. Surajudeen O. Obayopo",
    post: "Grand Patron",
    about: "Dr. Surajudeen O. is an Associate Professor from the Department of Mechanical Engineering. He has been our patron for the past 3years. He is the current HOD of the Department.",
    whatsappNo: "000",
    email: "temp@mail.com",
    phone_no: "00000",
  },
  {
    id: 2,
    name: "Dr. Surajudeen O. Obayopo",
    post: "Grand Patron",
    about: "Dr. Surajudeen O. is an Associate Professor from the Department of Mechanical Engineering. He has been our patron for the past 3years. He is the current HOD of the Department.",
    whatsappNo: "000",
    email: "temp@mail.com",
    phone_no: "00000",
  },
  {
    id: 3,
    name: "Dr. Surajudeen O. Obayopo",
    post: "Grand Patron",
    about: "Dr. Surajudeen O. is an Associate Professor from the Department of Mechanical Engineering. He has been our patron for the past 3years. He is the current HOD of the Department.",
    whatsappNo: "000",
    email: "temp@mail.com",
    phone_no: "00000",
  },
  {
    id: 4,
    name: "Dr. Surajudeen O. Obayopo",
    post: "Grand Patron",
    about: "Dr. Surajudeen O. is an Associate Professor from the Department of Mechanical Engineering. He has been our patron for the past 3years. He is the current HOD of the Department.",
    whatsappNo: "000",
    email: "temp@mail.com",
    phone_no: "00000",
  },
]

const AboutStaffAdvisers = () => {
  return (
    <>
      <PageHeader title="Staff Advisers" />
      <div className={styles.content}>
        <h2>Meet The MSSN OAU Advisers</h2>
        {RAND_DATA.map((ad) => (
          <div className={styles.adviser} key={ad.id}>
            <div className={styles.top}>
              <div className={styles.dets}>
                <h3>{ad.name}</h3>
                <h4>{ad.post}</h4>
              </div>
              <div className={styles.contact}>
                <button onClick={() => {}}>
                  <WhatsappIcon width={30} />
                </button>
                <button onClick={() => {}}>
                  <MailIcon width={30} />
                </button>
                <button onClick={() => {}}>
                  <CallIcon width={30} />
                </button>
              </div>
            </div>
            <p>{ad.about}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default AboutStaffAdvisers;
