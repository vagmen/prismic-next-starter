import { ILink } from "../../interfaces";
import { NavItem } from "../NavItem/NavItem";
import styles from "./index.module.css";

interface INavbar {
  links: ILink[];
}

export const Navbar = ({ links }: INavbar) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map((item) => (
            <NavItem key={item.link} href={item.link} title={item.title} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
