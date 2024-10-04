"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/src/shared/constants";
import CallIcon from "@/public/icons/svgs/phone.svg"
import WhatsappIcon from "@/public/icons/svgs/whatsapp.svg"
import XIcon from "@/public/icons/svgs/x.svg"
import FacebookIcon from "@/public/icons/svgs/facebook.svg"
import InstagramIcon from "@/public/icons/svgs/instagram.svg"
import MailIcon from "@/public/icons/svgs/mail.svg"
import HamburgerIcon from "@/public/icons/svgs/hamburger.svg"
import CloseIcon from "@/public/icons/svgs/close-t1.svg"
import Logo from "@/public/icons/images/logo-txt.png";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import styles from './NavBar.module.scss';

{/* Some infos here should eventually be fetched from the backend */}
const NavBar = () => {
  const [ismobileNavopen, setIsmobileNavopen] = useState(false);
  
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className={styles.dsk}>
        <div className={styles.contactInfo}>
          <div className={styles.innerC}>
            <div className={styles.l}>
              <span className={styles.contact}>
                <CallIcon height={17} />
                <WhatsappIcon height={17} />
                <p>{CONTACT_DETAILS.ameerPhone} / {CONTACT_DETAILS.ameerahPhone}</p>
              </span>
            </div>

            <div className={styles.r}>
              <span className={styles.contact}>
                <XIcon height={17} />
                <p>{SOCIAL_LINKS.x.name}</p>
              </span>
              <span className={styles.contact}>
                <FacebookIcon height={17} />
                <InstagramIcon height={17} />
                <p>{SOCIAL_LINKS.facebook.name}</p>
              </span>
              <span className={styles.contact}>
                <MailIcon height={17} />
                <p>{CONTACT_DETAILS.email}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.navItems}>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="MSSNOAU logo"
              fill
            />
          </div>
          <div className={styles.menus}>
            <NavBarMenu
              variant="dropdown"
              items={["About MSSN OAU", "MSSN OAU Excos", "Staff Advisers"]}
              label="About Us"
            />
            <NavBarMenu
              variant="normal"
              href=""
              // items={["Page", "New"]}
              label="Programs"
            />
            <NavBarMenu
              variant="normal"
              href="/"
              label="An-Nur Press"
            />
            <NavBarMenu
              variant="normal"
              href="/"
              label="Projects"
            />
            <NavBarMenu
              variant="normal"
              href="/"
              label="Events"
            />
            <NavBarMenu
              variant="normal"
              href="/"
              label="Donate"
            />
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className={styles.mob}>
        <div className={styles.barContainer}>
          <div className={styles.logoContainer}>
            <Image
              src={Logo}
              alt="MSSNOAU logo"
              fill
            />
          </div>
          <button onClick={() => setIsmobileNavopen(true)}>
            <HamburgerIcon height={24} />
          </button>
        </div>
        {ismobileNavopen && (
          <div className={styles.mobNav}>
            <div className={styles.header}>
              <div className={styles.logoContainer}>
                <Image
                  src={Logo}
                  alt="MSSNOAU logo"
                  // fill
                  width={116.88}
                  height={21.69}
                />
              </div>
              <button onClick={() => setIsmobileNavopen(false)}>
                <CloseIcon height={16} />
              </button>
            </div>

            <div className={styles.menus}>
              <NavBarMenu
                variant="dropdown"
                items={["Page", "New"]}
                label="About Us"
              />
              <NavBarMenu
                variant="dropdown"
                items={["Page", "New"]}
                label="Programs"
              />
              <NavBarMenu
                variant="normal"
                href="/"
                label="An-Nur Press"
              />
              <NavBarMenu
                variant="normal"
                href="/"
                label="Projects"
              />
              <NavBarMenu
                variant="normal"
                href="/"
                label="Events"
              />
              <NavBarMenu
                variant="normal"
                href="/"
                label="Donate"
              />
            </div>
            
            <div className={styles.contactInfo}>
              <span className={styles.contact}>
                <CallIcon height={13} />
                <WhatsappIcon height={13} />
                <p>{CONTACT_DETAILS.ameerPhone} / {CONTACT_DETAILS.ameerahPhone}</p>
              </span>

              <span className={styles.contact}>
                <XIcon height={13} />
                <p>{SOCIAL_LINKS.x.name}</p>
              </span>
              <span className={styles.contact}>
                <FacebookIcon height={13} />
                <InstagramIcon height={13} />
                <p>{SOCIAL_LINKS.facebook.name}</p>
              </span>
              <span className={styles.contact}>
                <MailIcon height={13} />
                <p>{CONTACT_DETAILS.email}</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  )
};

export default NavBar;
