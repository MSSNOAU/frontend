import React from "react";
import Image from 'next/image';
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/src/shared/constants";
import XIcon from "@/public/icons/svgs/x.svg"
import FacebookIcon from "@/public/icons/svgs/facebook.svg"
import InstagramIcon from "@/public/icons/svgs/instagram.svg"
import YoutubeIcon from "@/public/icons/svgs/youtube.svg";
import LinkedInIcon from "@/public/icons/svgs/linkedin.svg";
import Logo from "@/public/icons/images/logo-txt.png";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => { 
  const quickLinks = [
    {
      label: "About Us",
      href: "/",
    },
    {
      label: "Programs",
      href: "/",
    },
    {
      label: "An-Nur Press",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "Events",
      href: "/",
    },
    {
      label: "Donate",
      href: "/",
    },
  ];
  
  const socialDets = [
    {
      logo: <FacebookIcon height={24} />,
      href: SOCIAL_LINKS.x.url,
    },
    {
      logo:  <InstagramIcon height={24} />,
      href: SOCIAL_LINKS.instagram.url,
    },
    {
      logo:  <YoutubeIcon height={24} />,
      href: SOCIAL_LINKS.youtube.url,
    },
    {
      logo:  <XIcon height={24} />,
      href: SOCIAL_LINKS.x.url,
    },
    {
      logo:  <LinkedInIcon height={24} />,
      href: SOCIAL_LINKS.linkedIn.url,
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.about}>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="MSSNOAU logo"
              width={285}
              height={52.99}
            />
          </div>

          <p>
            The Muslim Students Society of Nigeria (MSSN), Obafemi Awolowo University (MSSNOAU) ia a branch among MSSN higher institution branches and is an inclusive platform for all Muslim students in the university to find spiritual expression, islamic knowledge, and fellowship irrespective of their backgrounds and orientation.
          </p>
          
          <div className={styles.socials}>
            {socialDets.map((s) => (
              <a key={s.href} target="_blank" href={s.href}>
                {s.logo}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.shortcut}>
          <h3>Quick Links</h3>
          {quickLinks.map((q) => (
            <Link key={q.label} className={styles.label} href={q.href}>{q.label}</Link>
          ))}
        </div>

        <div className={styles.contact}>
          <h3>Contact Us</h3>
          
          <p>{CONTACT_DETAILS.address}</p>
          <p>Ameer - {CONTACT_DETAILS.ameerPhone}</p>
          <p>Ameerah - {CONTACT_DETAILS.ameerahPhone}</p>
          <p>{CONTACT_DETAILS.email}</p>
        </div>
      </div>
      
      <hr />
      
      <div className={styles.b}>
        <p>© 2024 RateCV. all Right Reserved </p>
      </div>
    </div>
 );
}

export default Footer;
