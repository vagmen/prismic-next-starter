import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => (
  <section className={styles.section}>
    {slice.primary.content ? (
      <PrismicRichText field={slice.primary.content} />
    ) : (
      <h2>Template slice, update me!</h2>
    )}
  </section>
);

export default Text;
