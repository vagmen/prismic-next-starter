import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import { Button } from "../../components/Button/Button";

/**
 * @typedef {import("@prismicio/client").Content.FormSlice} FormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FormSlice>} FormProps
 * @param { FormProps }
 */
const Form = ({ slice }) => (
  <section className={styles.section}>
    <form className={styles.form}>
      {slice?.items?.map((item, i) => (
        <div key={i} className={styles.control}>
          <span>{item.title}</span>
          <input value="sdfsdfsdf" className={styles.input} />
          {/* <div dangerouslySetInnerHTML={{ __html: item.sliceexample.html }} /> */}
        </div>
      ))}
      <Button variant={slice.primary.buttonvariant}>
        {slice.primary.buttontitle}
      </Button>
    </form>
  </section>
);

export default Form;
