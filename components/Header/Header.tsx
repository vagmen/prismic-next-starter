import useWindowSize from "../../hooks/useWindowSize";
import { ILink, ILinkWithIcon } from "../../interfaces";
import { Navbar } from "../Navbar/Navbar";
import { NavItem } from "../NavItem/NavItem";
import styles from "./index.module.css";

interface IHeader {
  links: ILinkWithIcon[];
}

export const Header = ({ links }: IHeader) => {
  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      {width > 1000 && <Navbar links={links} />}
    </div>
  );
};
