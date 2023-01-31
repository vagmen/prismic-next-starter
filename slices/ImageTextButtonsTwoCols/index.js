import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import classNames from "classnames";

/**
 * @typedef {import("@prismicio/client").Content.ImageTextButtonsTwoColsSlice} ImageTextButtonsTwoColsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageTextButtonsTwoColsSlice>} ImageTextButtonsTwoColsProps
 * @param { ImageTextButtonsTwoColsProps }
 */
const ImageTextButtonsTwoCols = ({ slice }) => {
  const withTopMargin =
    slice.primary.title &&
    slice.primary.title[0] &&
    slice.primary.title[0].type === "heading1";
  return (
    <section
      className={classNames(styles.section, {
        [styles.revers]: slice.variation === "leftImageTextButtonsTwoCols",
        [styles.topMargin]: withTopMargin,
      })}
    >
      {/* <div className={styles.container}> */}
      <div className={styles.content}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        <div className={styles.actions}>
          {slice.items.map((item) => (
            <button key={item.title}>{item.title}</button>
          ))}
        </div>
      </div>
      <div>
        <PrismicNextImage
          field={slice.primary.image}
          className={styles.image}
          alt=""
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default ImageTextButtonsTwoCols;
