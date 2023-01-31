import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param { CardsProps }
 */
const Cards = ({ slice }) => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {slice?.items?.map((item, i) => {
        // console.log("item", item.link);
        return (
          <Link href={item.link} key={i}>
            <div key={item.title} className={styles.card}>
              <PrismicNextImage field={item.image} className={styles.image} />
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </section>
);

export default Cards;
