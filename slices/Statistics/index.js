// import React from "react";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param { StatisticsProps }
 */
const Statistics = ({ slice }) => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {slice?.items?.map((item) => (
        <div key={item.description} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.description}>{item.description}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Statistics;
