import React from "react";
import Footer from "../Footer/Footer";
import PageHeader from "../UIUnits/PageHeader/PageHeader";
import CommitteImg from "@/public/images/landing/del2.png";
import Line from "@/public/icons/svgs/line.svg";
import Logo from "@/public/icons/images/logo.png";
import styles from './AboutMSSN.module.scss';
import Image, { StaticImageData } from "next/image";

const RAND_DATA = [
  {
    id: 0,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
  {
    id: 1,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
  {
    id: 2,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
  {
    id: 3,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
  {
    id: 4,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
  {
    id: 5,
    name: "Jihad Week Committee (JWC)",
    description: `The Jihad Week Committee (JWC) is a committee under the Muslim Students' Society of Nigeria (MSSN), Obafemi Awolowo University Branch, dedicated to organizing a spiritual upliftment and developmental program for Muslim students.
      Aim:
      To provide a platform for Muslim students to rejuvenate their faith and spiritual growth
      To empower Muslim students with knowledge, skills, and inspiration
      To foster a sense of community and brotherhood/sisterhood among Muslim students amongst others.`,
    footer: "To Join Jihad Week Committee as a member",
    image: CommitteImg,
    action: () => {},
  },
]


const AboutStaffAdvisers = () => {
  const renderCommittee = (committee: { name: string, image: StaticImageData, description: string, footer: string, action: () => void }) => (
    <div className={styles.committee}>
      <div className={styles.image}>
        <Image
          src={committee.image}
          alt={committee.name}
          width={350}
          height={350}
        />
      </div>
      <div className={styles.txt}>
        <h3>{committee.name}</h3>
        <p>{committee.description}</p>
        <p>{committee.footer},<a href="/"> Click here</a></p>
      </div>
    </div>
  );

  return (
    <>
      <PageHeader title="About MSSN OAU" />

      <div className={styles.brief}>
        <h2>Brief About MSSN OAU</h2>
        
        <p>The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo University (MSSNOAU) ia a branch among MSSN higher institution branches and is an inclusive platform for all Muslim students in the university to find spiritual expression, islamic knowledge, and fellowship irrespective of their backgrounds and orientation.</p>
        <p>At MSSNOAU, we foster a vibrant and inclusive community where every member is encouraged to grow and excel. Our diverse programs and activities are designed to cater to the holistic development of our members, ensuring they achieve academic excellence while maintaining strong spiritual and moral values.</p>
      </div>
      <div className={styles.chart}>
        <div className={styles.diagram}>
          <Line height={235} />

          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="MSSNOAU logo"
              width={200.9}
              height={105.41}
            />
          </div>
          <div className={styles.logoSpace} />

          <Line height={235} className={styles.r} />
        </div>
        <div className={styles.txt}>
          <div>
            <h3>Our Mission</h3>
            <p>To work relentlessly towards the establishment of a society that fosters all-around human development. To achieve this, MSSN will continuously strive towards strengthening Ummah educationally, emotionally, spiritually and politically through a wide spectrum of activities in the university and the larger society in partnership with like-minded organizations. To succeed, MSSN must ensure that its members are God-fearing, knowledgeable, united and with superior moral values.</p>
          </div>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="MSSNOAU logo"
              width={200.9}
              height={105.41}
            />
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>To establish an Islamic Ummah governed by the principles and rules of the Shariah. To become a leading student organization that inspires Muslim students to become dynamic leaders, passionate about their faith, knowledge, and community, and to create a supportive environment that nurtures their overall well-being and success.</p>
          </div>
        </div>
      </div>

      <div className={styles.comittees}>
        <h2>Our Committees</h2>
        
        <p>The Muslim Students&apos; Society of Nigeria (MSSN), Obafemi Awolowo University Branch, has established various committees to cater to the diverse needs of Muslim students on campus. Here at MSSN OAU, we also established this committee so that students can join just to gain other extraordinary activities. This will allow them to be useful for the society and community at large. </p>
        
        {RAND_DATA.map((committee) => renderCommittee(committee))}
      </div>
      <Footer />
    </>
  )
}

export default AboutStaffAdvisers;
