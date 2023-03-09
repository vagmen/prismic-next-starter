// import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { FaqItem } from "../../components/FaqItem/FaqItem";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param { StatisticsProps }
 */
const Faq = ({ slice }) => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {slice?.items?.map((item) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={<PrismicRichText field={item.answer} />}
        />
      ))}
    </div>
  </section>
);

export default Faq;
