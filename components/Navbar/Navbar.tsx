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
            <NavItem
              key={item.link}
              link={item.link}
              title={item.title}
              href={item.href}
            />
            // <div key={item.link}>{item.title}</div>
          ))}
        </ul>
      </nav>
    </div>
  );
};
