import React, { useState } from "react";
import MenuIcon from "@/public/icons/svgs/arrow-t1-down.svg";
import styles from "./NavBarMenu.module.scss";
import Link from "next/link";

interface CommonMenuProps {
  label: string;
}

interface NormalMenuProps extends CommonMenuProps {
  variant: 'normal';
  href: string;
  items?: {
    title: string;
    link: string;
  }[]
}

interface DropdownMenuProps extends CommonMenuProps {
  variant: 'dropdown';
  href?: string;
  items: {
    title: string;
    link: string;
  }[]
}

type PropsType = NormalMenuProps | DropdownMenuProps;

const NavBarMenu: React.FC<PropsType> = ({ variant, items, href, label }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.navbarMenu}>
      {variant === 'normal' ? (
        <Link className={styles.label} href={href}>{label}</Link>
      ) : (
        <>
          <button className={styles.label} onClick={() => setIsDropdownOpen((prev) => !prev)}>
            {label}
            <MenuIcon />
          </button>
          {isDropdownOpen && (
            <div className={styles.items}>
              {items.map((i) => (
                <Link key={i.title} href={i.link}>{i.title}</Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default NavBarMenu;
