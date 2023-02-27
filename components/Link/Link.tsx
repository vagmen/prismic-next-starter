import { PrismicNextImage } from "@prismicio/next";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";
import useWindowSize from "../../hooks/useWindowSize";
import { ILinkWithIcon } from "../../interfaces";
import { Navbar } from "../Navbar/Navbar";
import styles from "./index.module.css";
import { default as NextLink } from "next/link";

interface ILink {
  link: string;
  children: string;
}

export const Link = ({ link, children }: ILink) => {
  const { width } = useWindowSize();

  return (
    <NextLink href={link || "/"}>
      <span className={styles.a}>{children}</span>
    </NextLink>
  );
};
