import { PrismicNextImage } from "@prismicio/next";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";
import useWindowSize from "../../hooks/useWindowSize";
import { ILinkWithIcon } from "../../interfaces";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { Navbar } from "../Navbar/Navbar";
import styles from "./index.module.css";

interface IHeader {
  links: ILinkWithIcon[];
  logo: EmptyImageFieldImage | FilledImageFieldImage | null | undefined;
}

export const Header = ({ links, logo }: IHeader) => {
  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      <PrismicNextImage field={logo} className={styles.logo} alt="" />
      {width > 1000 && <Navbar links={links} />}
      <div className={styles.actions}>
        <Button variant="filled">filled</Button>
        <Button>Написать</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </div>
    </div>
  );
};
