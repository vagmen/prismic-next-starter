import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import styles from "./index.module.css";

interface INavItem {
  title: string;
  link: string;
  active?: boolean;
  href: any;
}

export const NavItem = ({ title, link, active = false, href }: INavItem) => {
  return (
    <li className={styles.navItem}>
      {/* <PrismicLink document={href}>My Link</PrismicLink> */}
      <Link href={link || "/"}>
        <span className={styles.a}>{title}</span>
      </Link>
    </li>
  );
};

{
  /* <a className={`nav__item ${active ? "active" : ""}`}> */
}
{
  /* </a> */
}
