import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.PageHeaderSlice} PageHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PageHeaderSlice>} PageHeaderProps
 * @param { PageHeaderProps }
 */
const PageHeader = ({ slice }) => (
  <section className={styles.section}>
    <span className={styles.title}>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    <span className={styles.description}>
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </span>
    <style jsx>{`
      section {
        // max-width: 600px;
        // margin: 4em auto;
        // text-align: center;
      }
    `}</style>
  </section>
);

export default PageHeader;
