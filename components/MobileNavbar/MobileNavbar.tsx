import { ILinkWithIcon } from "../../interfaces";
import { MobileNavItem } from "../MobileNavItem/MobileNavItem";
import styles from "./index.module.css";

interface INavbar {
  links: ILinkWithIcon[];
}

export const MobileNavbar = ({ links }: INavbar) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map((item) => (
            <MobileNavItem
              key={item.link}
              link={item.link}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
